import { NextResponse } from "next/server";

// Definisikan tipe data untuk payload
interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // Honeypot untuk menangkal spam/bot
}

export async function POST(req: Request) {
  // Parsing body JSON dengan aman
  const body: ContactFormPayload | null = await req.json().catch(() => null);

  // 1. Validasi awal & Cek Honeypot (bot protection)
  if (!body || body.company) {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }

  // 2. Validasi field yang wajib diisi
  const requiredFields: (keyof ContactFormPayload)[] = ["name", "email", "subject", "message"];
  for (const field of requiredFields) {
    if (!body[field] || typeof body[field] !== "string") {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }
  }

  // 3. Validasi format email menggunakan Regex
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(body.email)) {
    return NextResponse.json(
      { message: "Invalid email address." },
      { status: 400 }
    );
  }

  // 4. Cek ketersediaan Webhook URL di Environment Variables
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { message: "The contact form isn't connected to an email service yet. Please email me directly." },
      { status: 501 }
    );
  }

  // 5. Kirim data ke Webhook
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    }),
  }).catch(() => null);

  // 6. Tangani respons dari Webhook
  if (response?.ok) {
    return NextResponse.json({ message: "Message sent. Thank you!" });
  } 
  
  return NextResponse.json(
    { message: "Couldn't send your message. Please try again later." },
    { status: 502 }
  );
}