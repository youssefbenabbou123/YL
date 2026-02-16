// API endpoint for sending emails. Use Vercel serverless by default.
const API_URL = import.meta.env.VITE_API_URL || '';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  type: 'particulier' | 'professionnel';
  message: string;
  attachments?: File[];
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('type', data.type);
    formData.append('message', data.message);

    if (data.phone) {
      formData.append('phone', data.phone);
    }

    if (data.attachments && data.attachments.length > 0) {
      data.attachments.forEach((file, index) => {
        formData.append(`attachment_${index}`, file);
      });
    }

    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.success) {
      return { 
        success: false,
        error: result.error || 'Failed to send email' 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}
