import { NextResponse } from 'next/server';
import { saveWaitlistSubscriber } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const waitlistSource = source || 'calendar_vip_pass';
    const result = await saveWaitlistSubscriber(normalizedEmail, waitlistSource);

    await auditLogger.waitlistSubscribed(normalizedEmail, waitlistSource, req);

    return NextResponse.json({
      success: true,
      isNew: result.isNew,
      message: result.isNew
        ? 'Successfully subscribed to Brain OS quarterly drop transmissions.'
        : 'You are already on the priority notification list.',
    });
  } catch (error: any) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process waitlist subscription.' },
      { status: 500 }
    );
  }
}
