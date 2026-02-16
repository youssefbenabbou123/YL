import { Resend } from 'resend';

// Validate required environment variables
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set in environment variables');
}

if (!process.env.TEST_EMAIL) {
  throw new Error('TEST_EMAIL is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const TEST_EMAIL = process.env.TEST_EMAIL;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    
    const { name, email, phone, type, message, attachments } = body;

    // Validate required fields
    if (!name || !email || !message || !type) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert base64 attachments to Resend format (Buffer)
    const emailAttachments = attachments && attachments.length > 0
      ? attachments.map((attachment: { filename: string; content: string }) => {
          // Convert base64 string to Buffer
          const buffer = Buffer.from(attachment.content, 'base64');
          return {
            filename: attachment.filename,
            content: buffer,
          };
        })
      : [];

    // Prepare email content
    const typeLabel = type === 'particulier' ? 'Un particulier' : 'Un professionnel';
    const phoneDisplay = phone ? `<p style="margin: 8px 0; color: #1e293b;"><strong>Téléphone:</strong> ${phone}</p>` : '';
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
            line-height: 1.6; 
            color: #1e293b; 
            margin: 0; 
            padding: 0; 
            background-color: #f1f5f9;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
          }
          .header h1 { 
            margin: 0 0 10px 0; 
            font-size: 28px; 
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .header p { 
            margin: 0; 
            font-size: 16px; 
            opacity: 0.95;
          }
          .content { 
            padding: 40px 30px; 
            background-color: #ffffff;
          }
          .contact-info {
            background-color: #f8fafc;
            border-left: 4px solid #0ea5e9;
            padding: 20px;
            margin: 25px 0;
            border-radius: 8px;
          }
          .contact-info p {
            margin: 8px 0;
            color: #1e293b;
          }
          .contact-info strong {
            color: #1e293b;
            font-weight: 600;
          }
          .message-section {
            margin: 30px 0;
          }
          .message-box {
            background-color: #f8fafc;
            padding: 20px;
            margin: 15px 0;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            white-space: pre-wrap;
            color: #1e293b;
            line-height: 1.8;
          }
          .attachments-section {
            background-color: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 20px;
            margin: 25px 0;
            border-radius: 8px;
          }
          .attachments-section ul {
            margin: 10px 0 0 0;
            padding-left: 20px;
            color: #1e293b;
          }
          .attachments-section li {
            margin: 5px 0;
          }
          .footer { 
            text-align: center; 
            padding: 30px; 
            background-color: #f8fafc;
            color: #64748b; 
            font-size: 13px;
            border-top: 1px solid #e2e8f0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>YL Solutions</h1>
            <p>Nouveau message de contact</p>
          </div>
          <div class="content">
            <div class="contact-info">
              <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #1e293b; font-weight: 700;">
                Informations du contact
              </h3>
              <p style="margin: 8px 0; color: #1e293b;"><strong>Nom:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #1e293b;"><strong>Email:</strong> ${email}</p>
              ${phoneDisplay}
              <p style="margin: 8px 0; color: #1e293b;"><strong>Type:</strong> ${typeLabel}</p>
            </div>

            <div class="message-section">
              <h3 style="margin: 0 0 15px 0; font-size: 20px; color: #1e293b; font-weight: 700;">
                Message
              </h3>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>

            ${attachments && attachments.length > 0 ? `
              <div class="attachments-section">
                <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #1e293b; font-weight: 700;">
                  Pièces jointes (${attachments.length})
                </h3>
                <p style="margin: 0 0 10px 0; color: #1e293b; font-size: 14px;">
                  ${attachments.length} fichier(s) attaché(s) - Voir les fichiers en pièces jointes
                </p>
                <ul>
                  ${attachments.map((file: { filename: string }) => `<li style="color: #1e293b;">${file.filename}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p style="margin: 0;"><strong>YL Solutions</strong><br>Votre partenaire de confiance pour la mise en relation avec des professionnels qualifiés du bâtiment</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #94a3b8;">
              Ce message a été envoyé depuis le formulaire de contact du site.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'YL Solutions <onboarding@resend.dev>', // You'll need to verify your domain with Resend
      to: [TEST_EMAIL],
      replyTo: email,
      subject: `Nouveau message de contact - ${name} (${typeLabel})`,
      html: emailHtml,
      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ success: false, error: 'Failed to send email', details: error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
