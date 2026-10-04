import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ success: false, error: 'Email and message are required.' }, { status: 400 });
    }

    // In production without external db, logs to server console securely
    console.log(`[BrainOS Support Inquiry] From: ${name || 'Anonymous'} <${email}>: ${message}`);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will respond within 24 hours.',
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to submit inquiry.' }, { status: 500 });
  }
}
