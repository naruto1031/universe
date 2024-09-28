import { useState, FormEvent } from 'react';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'あなたは有能なアシスタントです。' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  return (
    <>
      <div style={{ padding: '20px', maxHeight: '80vh', overflowY: 'auto', backgroundColor: '#f0f0f0' }}>
        {messages
          .filter((msg) => msg.role !== 'system')
          .map((msg, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
              <div
                style={{
                  maxWidth: '60%',
                  padding: '10px',
                  borderRadius: '20px',
                  backgroundColor: msg.role === 'user' ? '#dcf8c6' : '#ffffff',
                  border: '1px solid #e0e0e0',
                  wordBreak: 'break-word',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
          style={{
            flexGrow: 1,
            padding: '10px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '0 15px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#07c160',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          送信
        </button>
      </form>
    </>
  );
}
