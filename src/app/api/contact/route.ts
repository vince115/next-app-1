//src/app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // 使用 Nodemailer 配置 Gmail 發送
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vince115@gmail.com', // 替換為你的 Gmail 地址
      pass: 'bzczltcderhtfeuw', // 替換為你生成的應用程式密碼
    },
  });

  const mailOptions = {
    from: email,
    to: 'vince115@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
