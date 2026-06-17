import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    studentName, dob, gender, classApplying, previousSchool,
    parentName, relation, mobile, whatsapp, email, address,
  } = req.body;

  if (!studentName || !dob || !gender || !classApplying || !parentName || !relation || !mobile || !address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const row = (label, value) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#4b5563;width:180px;border-bottom:1px solid #f3f4f6;">${label}</td>
          <td style="padding:8px 12px;color:#111827;border-bottom:1px solid #f3f4f6;">${value}</td>
        </tr>`
      : '';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#64B6AC;padding:24px 32px;">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1px;">VNC Public School</p>
            <h1 style="margin:4px 0 0;font-size:22px;color:#ffffff;">New Admission Application</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">Session 2025-26 &nbsp;·&nbsp; Received ${timestamp} IST</p>
          </td>
        </tr>

        <!-- Body -->
        <tr><td style="padding:24px 32px;">

          <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">
            A new admission application has been submitted on the school website. Details are below.
          </p>

          <!-- Student Info -->
          <h2 style="margin:0 0 10px;font-size:14px;font-weight:700;color:#64B6AC;text-transform:uppercase;letter-spacing:0.5px;">Student Information</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:20px;font-size:14px;">
            ${row('Full Name', studentName)}
            ${row('Date of Birth', dob)}
            ${row('Gender', gender)}
            ${row('Class Applied For', classApplying)}
            ${row('Previous School', previousSchool || '—')}
          </table>

          <!-- Parent Info -->
          <h2 style="margin:0 0 10px;font-size:14px;font-weight:700;color:#64B6AC;text-transform:uppercase;letter-spacing:0.5px;">Parent / Guardian</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:20px;font-size:14px;">
            ${row('Name', parentName)}
            ${row('Relation', relation)}
            ${row('Mobile', mobile)}
            ${row('WhatsApp', whatsapp || mobile)}
            ${row('Email', email || '—')}
          </table>

          <!-- Address -->
          <h2 style="margin:0 0 10px;font-size:14px;font-weight:700;color:#64B6AC;text-transform:uppercase;letter-spacing:0.5px;">Address</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;font-size:14px;">
            ${row('Residential Address', address)}
          </table>

          <!-- CTA -->
          <a href="https://wa.me/91${mobile.replace(/\D/g, '')}" style="display:inline-block;background:#64B6AC;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:10px 24px;border-radius:8px;">
            WhatsApp Parent
          </a>

        </td></tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f3f4f6;padding:16px 32px;font-size:12px;color:#9ca3af;text-align:center;">
            This email was sent automatically from the VNC Public School website admission form.
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: 'VNC Admissions <admissions@vncpublicschool.com>',
      to: 'vncpublicgajpur@gmail.com',
      replyTo: email || undefined,
      subject: `New Admission: ${studentName} - ${classApplying}`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err.message);
    return res.status(500).json({ error: 'Failed to send application' });
  }
}
