import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Avishkar Website" <${process.env.CONTACT_EMAIL}>`,
      to: "avishkarhyperloop@smail.iitm.ac.in",
      subject: `[CONTACT] ${data.queryType} — ${data.name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Organization:</b> ${data.organization}</p>
        <p><b>Role:</b> ${data.role}</p>
        <p><b>Query Type:</b> ${data.queryType}</p>
        <hr />
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
