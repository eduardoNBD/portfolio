import type { APIRoute } from 'astro';
import { createTransport } from 'nodemailer';
import { google } from 'googleapis'; 

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, phone, message } = await request.json();

    if (!name || !email || !subject || !message || !phone) {
      return new Response(
        JSON.stringify({ status: 0, message: 'Todos los campos son obligatorios' }),
        { status: 400 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      import.meta.env.GMAIL_CLIENT_ID,
      import.meta.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: import.meta.env.GMAIL_REFRESH_TOKEN
    });

    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = accessTokenResponse.token;

    if (!accessToken) {
      throw new Error('No se pudo obtener el access token');
    }

    const smtpTransport = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'nbadtzdemort@gmail.com',
        clientId: import.meta.env.GMAIL_CLIENT_ID,
        clientSecret: import.meta.env.GMAIL_CLIENT_SECRET,
        refreshToken: import.meta.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const emailResponse = await smtpTransport.sendMail({
      from: 'nbadtzdemort@gmail.com',
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
