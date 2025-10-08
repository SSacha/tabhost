import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sachasoumaille1@gmail.com", // ton adresse gmail
      pass: process.env.GMAIL_APP_PASSWORD, // ⚠️ mot de passe d'application
    },
  });

  const mailOptions = {
    from: "sachasoumaille1@gmail.com",      // toujours ton adresse ici
    replyTo: email,                         // 👉 l’adresse de la personne
    to: "sachasoumaille1@gmail.com",
    subject: `Nouveau message de ${name}`,
    text: `
      Nom: ${name}
      Email: ${email}
      Message: ${message}
  `,
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erreur", { status: 500 });
  }
}