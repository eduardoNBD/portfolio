import type { APIRoute } from 'astro';
import { createTransport } from 'nodemailer'; 

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, phone, message } = await request.json();

    if (!name || !email || !subject || !message || !phone) {
      return new Response(
        JSON.stringify({ status: 0, message: 'Todos los campos son obligatorios' }),
        { status: 400 }
      );
    } 
  

    const smtpTransport = createTransport({
      host: import.meta.env.SMTP_HOST,
      port: import.meta.env.SMTP_PORT, 
      auth: {
        user: import.meta.env.SMTP_USER, 
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });

    const emailResponse = await smtpTransport.sendMail({
      from: import.meta.env.SMTP_USER,
      to: 'lalo_elma@hotmail.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `From: ${email} \nNombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    return new Response(
      JSON.stringify({ status: 1, message: 'Correo electrónico enviado exitosamente', emailResponse: JSON.stringify(emailResponse) }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 0, message: 'Hubo un error al enviar el correo electrónico', error: JSON.stringify(error) }),
      { status: 500 }
    );
  }
};
