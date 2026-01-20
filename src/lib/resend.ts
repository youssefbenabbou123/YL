// API endpoint for sending emails (handles CORS by calling backend)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

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
    // Convert files to base64 for sending to backend
    const attachments = data.attachments && data.attachments.length > 0
      ? await Promise.all(
          data.attachments.map(async (file) => {
            return new Promise<{ filename: string; content: string }>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => {
                if (reader.result && typeof reader.result === 'string') {
                  // Remove data URL prefix (data:image/jpeg;base64,)
                  const base64 = reader.result.split(',')[1] || reader.result;
                  resolve({
                    filename: file.name,
                    content: base64,
                  });
                } else {
                  reject(new Error('Failed to read file'));
                }
              };
              reader.onerror = () => reject(new Error('Failed to read file'));
              reader.readAsDataURL(file);
            });
          })
        )
      : undefined;

    // Send to backend API
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        type: data.type,
        message: data.message,
        attachments: attachments,
      }),
    });

    const result = await response.json();

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
