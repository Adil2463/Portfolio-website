<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Portfolio Contact</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 32px; border: 1px solid #e5e5e5;">
        <h2 style="margin: 0 0 24px 0; font-size: 20px; color: #1a1a1a;">New Contact Form Submission</h2>

        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #666; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">{{ $name }}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #666; width: 100px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">
                    <a href="mailto:{{ $email }}">{{ $email }}</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-size: 14px; color: #666; width: 100px; vertical-align: top;">Subject</td>
                <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">{{ $subject }}</td>
            </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;">

        <div style="font-size: 14px; color: #1a1a1a; line-height: 1.6; white-space: pre-wrap;">{{ $message }}</div>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;">

        <p style="font-size: 12px; color: #999; margin: 0;">
            This message was sent via the portfolio contact form on {{ now()->format('F j, Y \a\t g:i A') }}.
        </p>
    </div>
</body>
</html>
