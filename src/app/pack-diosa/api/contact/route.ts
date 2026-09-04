import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the inquiry (in production, send via Resend or store in DB)
    console.log("=== New Pack-DIOSA Inquiry ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Interest: ${interest}`);
    console.log(`Message: ${message}`);
    console.log("==============================");

    // TODO: Integrate with Resend for email delivery
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Pack-DIOSA <noreply@pack-diosa.com>',
    //   to: 'info@pack-diosa.com',
    //   subject: `New Inquiry: ${interest} - ${name}`,
    //   html: `...`,
    // });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. We'll contact you within 1 business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
