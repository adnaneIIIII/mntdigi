import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, productname, country } = body;

    const contact = await prisma.contact.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        productname,
        country,
      },
    });

    const subject = `New Contact Form Submission from ${firstname} ${lastname}`;
    const htmlContent = `
      <h2>New Lead</h2>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Product:</strong> ${productname}</p>
      <p><strong>Country:</strong> ${country}</p>
    `;

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zarveo@gmail.com",
      subject: "Hello World",
      html: htmlContent,
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
