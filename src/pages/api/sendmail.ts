import type { APIRoute } from 'astro'
import { createTransport } from 'nodemailer'

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, phone, message } = await request.json();

    if (!name || !email || !subject || !message || !phone) {
      return new Response(
        JSON.stringify({ status: 0, message: 'Todos los campos son obligatorios'   }),
        { status: 400 }
      );
    }

    const smtpTransport = createTransport({
      host: import.meta.env.MAIL_HOST,
      port: import.meta.env.MAIL_PORT,
      secure: false, 
      auth: {
        user: import.meta.env.MAIL_USERNAME,
        pass: import.meta.env.MAIL_PASSWORD,
      },
    });

    const emailResponse = await smtpTransport.sendMail({
      from: 'lalo_elma@hotmail.com',
      to: 'lalo_elma@hotmail.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `From: ${email} \nNombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    return new Response(
      JSON.stringify({ status: 1, message: 'Correo electrónico enviado exitosamente '+JSON.stringify(emailResponse)}),
      { status: 200 }
    );
  } catch (error) { 
    return new Response(
      JSON.stringify({ status: 0, message: 'Hubo un error al enviar el correo electrónico ', error: JSON.stringify(error), imports: import.meta.env.MAIL_HOST+"-"+import.meta.env.MAIL_USERNAME+"-"+import.meta.env.MAIL_PASSWORD+"-"+import.meta.env.MAIL_PORT }),
      { status: 500 }
    );
  }
};