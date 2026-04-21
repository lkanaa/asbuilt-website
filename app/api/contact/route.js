import { Resend } from 'resend';

export async function POST(request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey) {
      return Response.json(
        { error: 'Missing RESEND_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    if (!contactFromEmail || !contactToEmail) {
      return Response.json(
        { error: 'Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL environment variable.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `Nuevo mensaje de contacto - ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde As-Built</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);

    return Response.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}