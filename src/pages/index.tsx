import { useState, FormEvent } from 'react';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: '私は宇宙のすべての知識を持つAIアシスタントです。受けた質問に対して、!や絵文字を用いながら、相手を中学生だと思ってポップに説明して下さい。' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      setIsLoading(true)
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

    setIsLoading(false)
  };

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 70px)', backgroundColor: '#000' }}>
      <div style={{ padding: '20px', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
        <div style={{ color: '#fff', fontSize: "2.0rem", marginBottom: '20px', textAlign: 'center' }}>🌌 宇宙何でも相談チャット</div>
        {messages
          .filter((msg) => msg.role !== 'system')
          .map((msg, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  maxWidth: '60%',
                  padding: '15px',
                  borderRadius: '15px',
                  backgroundColor: msg.role === 'user' ? '#1e3a8a' : '#4b5563',
                  color: '#fff',
                  wordBreak: 'break-word',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
      </div>
      <form
        onSubmit={sendMessage}
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          display: 'flex',
          padding: '10px',
          backgroundColor: '#000',
          boxSizing: 'border-box',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="宇宙の謎を問いかけてください..."
          style={{
            flexGrow: 1,
            padding: '15px',
            borderRadius: '30px',
            border: '1px solid #333',
            outline: 'none',
            fontSize: '16px',
            backgroundColor: '#1f2937',
            color: '#fff',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '0 20px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: '#fff',
            fontSize: '20px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.5 : 1,
          }}
          disabled={isLoading}
        >
          {isLoading ? '送信中...' : '🚀'}   
        </button>
      </form>
    </div>
  );
}
