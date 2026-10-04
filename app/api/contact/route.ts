import { NextResponse } from 'next/server';
import { saveSupportInquiry } from '@/lib/firebase';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ success: false, error: 'Email and message are required.' }, { status: 400 });
    }

    // Persist inquiry to Cloud Firestore
    await saveSupportInquiry(name || 'Anonymous', email, message);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will respond within 24 hours.',
    });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit inquiry.' }, { status: 500 });
  }
}
