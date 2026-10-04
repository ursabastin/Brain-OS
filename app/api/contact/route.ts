import { NextResponse } from 'next/server';
import { saveSupportInquiry } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ success: false, error: 'Email and message are required.' }, { status: 400 });
    }

    const contactName = (name || 'Anonymous').trim();
    const contactEmail = email.toLowerCase().trim();

    // Persist inquiry to Cloud Firestore
    await saveSupportInquiry(contactName, contactEmail, message);

    // Audit log entry
    await auditLogger.inquiryReceived(contactEmail, contactName, req);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will respond within 24 hours.',
    });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit inquiry.' }, { status: 500 });
  }
}
