import nodemailer from 'nodemailer'

const otpEmailTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Your OTP</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#0d6efd;color:#ffffff;padding:20px;text-align:center;">
              <h1 style="margin:0;font-size:22px;">Yatra Insight</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p style="font-size:16px;">Hello,</p>
              <p style="font-size:16px;">
                Your One-Time Password (OTP) is:
              </p>

              <p style="
                font-size:28px;
                font-weight:bold;
                letter-spacing:4px;
                text-align:center;
                margin:20px 0;
                color:#0d6efd;
              ">
                ${otp}
              </p>

              <p style="font-size:14px;color:#555;">
                This OTP is valid for <strong>5 minutes</strong>.
                Please do not share it with anyone.
              </p>

              <p style="font-size:14px;color:#555;">
                If you did not request this OTP, please ignore this email.
              </p>

              <p style="margin-top:30px;font-size:14px;">
                Regards,<br />
                <strong>Yatra Insight Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f1f1;padding:15px;text-align:center;font-size:12px;color:#777;">
              © ${new Date().getFullYear()} Yatra Insight. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
})

export const sendEmailOtp = async (normalizedEmail, otp) => {
  await transporter.sendMail({
    from: `"Yatra Insight" <${process.env.EMAIL_USER}>`,
    to: normalizedEmail,
    subject: 'Your OTP for Yatra Insight',
    html: otpEmailTemplate(otp)
  })
}
