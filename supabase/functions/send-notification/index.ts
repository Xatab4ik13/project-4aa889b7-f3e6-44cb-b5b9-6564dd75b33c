import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
const NOTIFICATION_EMAIL = "OSL.LOGISTIKA@yandex.ru";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  formType: "request" | "contact" | "vacancy";
  data: Record<string, string>;
}

const formatEmailHtml = (formType: string, data: Record<string, string>): string => {
  const headerColors = {
    request: "#1E3A5F",
    contact: "#1E3A5F", 
    vacancy: "#1E3A5F",
  };

  const formTitles = {
    request: "🚚 Новая заявка на перевозку",
    contact: "📩 Новое сообщение с сайта",
    vacancy: "👤 Отклик на вакансию",
  };

  const headerColor = headerColors[formType as keyof typeof headerColors] || "#1E3A5F";
  const title = formTitles[formType as keyof typeof formTitles] || "Новое уведомление";

  const dataRows = Object.entries(data)
    .filter(([_, value]) => value && value.trim())
    .map(([key, value]) => {
      const labels: Record<string, string> = {
        name: "Имя",
        phone: "Телефон",
        email: "Email",
        company: "Компания",
        from: "Откуда",
        to: "Куда",
        cargoType: "Тип груза",
        weight: "Вес",
        volume: "Объем",
        description: "Описание",
        message: "Сообщение",
        vacancy: "Вакансия",
      };
      return `
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 140px;">
            ${labels[key] || key}
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #eee; color: #555;">
            ${value}
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, ${headerColor} 0%, #2d5a8a 100%); border-radius: 12px 12px 0 0; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
            ${title}
          </h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px;">
            OSL Logistics
          </p>
        </div>
        
        <div style="background: #ffffff; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            ${dataRows}
          </table>
          
          <div style="padding: 24px; border-top: 2px solid ${headerColor}; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">
              Это автоматическое уведомление с сайта osl-logistics.ru
            </p>
            <p style="color: #888; font-size: 12px; margin: 8px 0 0;">
              ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const formatTelegramMessage = (formType: string, data: Record<string, string>): string => {
  const formTitles = {
    request: "🚚 *НОВАЯ ЗАЯВКА НА ПЕРЕВОЗКУ*",
    contact: "📩 *НОВОЕ СООБЩЕНИЕ*",
    vacancy: "👤 *ОТКЛИК НА ВАКАНСИЮ*",
  };

  const title = formTitles[formType as keyof typeof formTitles] || "📋 *НОВОЕ УВЕДОМЛЕНИЕ*";

  const labels: Record<string, string> = {
    name: "👤 Имя",
    phone: "📞 Телефон",
    email: "📧 Email",
    company: "🏢 Компания",
    from: "📍 Откуда",
    to: "🎯 Куда",
    cargoType: "📦 Тип груза",
    weight: "⚖️ Вес",
    volume: "📐 Объем",
    description: "📝 Описание",
    message: "💬 Сообщение",
    vacancy: "💼 Вакансия",
  };

  const dataLines = Object.entries(data)
    .filter(([_, value]) => value && value.trim())
    .map(([key, value]) => `${labels[key] || key}: ${value}`)
    .join("\n");

  return `${title}\n\n${dataLines}\n\n🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`;
};

const sendTelegramMessage = async (message: string) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("Telegram credentials not configured, skipping Telegram notification");
    return;
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const result = await response.json();
    console.log("Telegram response:", result);
    
    if (!result.ok) {
      console.error("Telegram API error:", result);
    }
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data }: NotificationRequest = await req.json();
    console.log(`Received ${formType} notification:`, data);

    const emailSubjects = {
      request: `🚚 Новая заявка: ${data.from || "—"} → ${data.to || "—"}`,
      contact: `📩 Сообщение от ${data.name || "Посетитель"}`,
      vacancy: `👤 Отклик: ${data.vacancy || "Вакансия"}`,
    };

    const subject = emailSubjects[formType as keyof typeof emailSubjects] || "Новое уведомление с сайта";

    // Send email
    const emailResponse = await resend.emails.send({
      from: "OSL Logistics <noreply@osllogistika.ru>",
      to: [NOTIFICATION_EMAIL],
      subject: subject,
      html: formatEmailHtml(formType, data),
    });

    console.log("Email sent successfully:", emailResponse);

    // Send Telegram notification
    await sendTelegramMessage(formatTelegramMessage(formType, data));

    return new Response(
      JSON.stringify({ success: true, emailId: emailResponse.data?.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
