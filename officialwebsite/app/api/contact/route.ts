import nodemailer from "nodemailer";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "EMAIL_USER", "EMAIL_PASSWORD"] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    return Response.json(
      { ok: false, error: `Missing env: ${missing.join(", ")}` },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const project = String(formData.get("project") || "").trim();
  const budget = String(formData.get("budget") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const fromAddress = process.env.SMTP_FROM || process.env.EMAIL_USER || "no-reply@justpurrfolio.com";

  await transporter.sendMail({
    from: `Purrfolio Contact Form <${fromAddress}>`,
    to: "purrfoliodesigns@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project: ${project}\n` +
      `Budget: ${budget}\n\n` +
      `Message:\n${message}`,
  });

  return Response.json({ ok: true });
}
