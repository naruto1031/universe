import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.API_KEY // Use a server-side environment variable
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{
        message: string | null
    }>,
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: '許可されていないメソッドです。' });
    }

    const {messages} = req.body

    try {
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo"
        });

        const assistantMessage = completion.choices[0].message.content;
        res.status(200).json({ message: assistantMessage });
    } catch (error) {
        console.error('OpenAI API エラー:', error);
        res.status(500).json({ message: 'OpenAI APIとの通信に失敗しました。' });
    }
}