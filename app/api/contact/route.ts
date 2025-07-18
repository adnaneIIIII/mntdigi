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


const date = new Date();
    const Content = `
       <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Confirmation</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 text-gray-800">
    <div class="max-w-xl mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden">
      <div class="bg-green-600 text-white text-center py-6 px-4">
        <h1 class="text-2xl font-bold">✅ Order Confirmed!</h1>
        <p class="text-sm mt-1">Thank you for choosing our IPTV service.</p>
      </div>

      <div class="p-6">
        <h2 class="text-lg font-semibold mb-4">Hi ${firstname} ${lastname},</h2>
        <p class="mb-4 text-sm">
          We're excited to let you know that your subscription order has been confirmed.
          Here are your order details:
        </p>

        <div class="bg-gray-50 border rounded-md p-4 text-sm mb-4">
          <p><strong>💳 Payment Method:</strong> PayPal</p>
          <p><strong>📅 Order Date:</strong> ${date.toDateString()}</p>
        </div>

        <p class="text-sm mb-4">
          ⏱️ Your service will be activated within <strong>10-30 minutes</strong>.  
          You'll receive your details via email shortly.
        </p>

        <p class="text-sm mb-4">
          If you have any questions or need help setting up, our support team is here 24/7.
        </p>

        <a
          href="mailto:support@youriptv.com"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md mt-2"
        >
          Contact Support
        </a>
      </div>

      <div class="bg-gray-100 text-center text-xs text-gray-500 py-4 px-6">
        This is an automated confirmation. If you did not place this order, please contact us immediately.<br />
        &copy; 2025 MNT Digital. All rights reserved.
      </div>
    </div>
  </body>
</html>
    `;

    resend.emails.send({
      from: "support@mntdigital.com",
      to: "support@mntdigital.com",
      
      subject: "Order has been submited!",
      html: htmlContent,
    });
       resend.emails.send({
      from: "support@mntdigital.com",
      to: "support@mntdigital.com",
      
      subject: "Order has been submited!",
      html: htmlContent,
    });

    await resend.emails.send({
      from: "support@mntdigital.com", // Use your verified domain
      to: email,   // Your receiving email
      subject: "Order confirmation! Thank you for choosing us.",
      html: Content,

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
