import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Validate required environment variables
if (!process.env.RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY is not set in .env file');
  process.exit(1);
}

if (!process.env.TEST_EMAIL) {
  console.error('ERROR: TEST_EMAIL is not set in .env file');
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);
const TEST_EMAIL = process.env.TEST_EMAIL;

app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received email request');
    const { name, email, phone, type, message, attachments } = req.body;

    // Validate required fields
    if (!name || !email || !message || !type) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message, type: !!type });
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    console.log('Form data:', { name, email, phone, type, messageLength: message.length, attachmentsCount: attachments?.length || 0 });

    // Convert base64 attachments to Resend format (Buffer)
    const emailAttachments = attachments && attachments.length > 0
      ? attachments.map((attachment) => {
          // Convert base64 string to Buffer
          const buffer = Buffer.from(attachment.content, 'base64');
          return {
            filename: attachment.filename,
            content: buffer,
          };
        })
      : undefined;

    if (emailAttachments) {
      console.log('Attachments prepared:', emailAttachments.map(a => ({ filename: a.filename, size: a.content.length })));
    }

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
                  ${attachments.map(att => `<li style="color: #1e293b;">${att.filename}</li>`).join('')}
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
    console.log('Sending email to:', TEST_EMAIL);
    console.log('Email from:', 'YL Solutions <onboarding@resend.dev>');
    
    const emailPayload = {
      from: 'YL Solutions <onboarding@resend.dev>',
      to: [TEST_EMAIL],
      replyTo: email,
      subject: `Nouveau message de contact - ${name} (${typeLabel})`,
      html: emailHtml,
    };

    if (emailAttachments && emailAttachments.length > 0) {
      emailPayload.attachments = emailAttachments;
    }

    console.log('Email payload prepared, sending...');
    const { data: emailData, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to send email',
        details: error 
      });
    }

    console.log('Email sent successfully!', emailData);
    res.json({ success: true, data: emailData });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Resend API Key configured: Yes`);
  console.log(`Test email: ${TEST_EMAIL}`);
});
