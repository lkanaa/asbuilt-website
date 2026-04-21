import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

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

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      return Response.json(
        { error: 'Missing Supabase environment variables.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: savedMessage, error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message,
        status: 'new',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Supabase insert error:', dbError);

      return Response.json(
        {
          error: 'Failed to save message to database.',
          details: dbError.message,
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { data: emailData, error: emailError } = await resend.emails.send({
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

    if (emailError) {
      console.error('Resend error:', emailError);

      return Response.json(
        {
          success: false,
          saved: true,
          messageId: savedMessage.id,
          error: 'Message was saved, but email failed to send.',
          details: emailError,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      saved: true,
      messageId: savedMessage.id,
      email: emailData,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return Response.json(
      {
        error: 'Internal server error.',
        details: error.message,
      },
      { status: 500 }
    );
  }
}