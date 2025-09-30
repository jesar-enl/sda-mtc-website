"use server"

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  prayerRequest: boolean
  prayerDetails: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message}

${
  formData.prayerRequest
    ? `
PRAYER REQUEST:
${formData.prayerDetails}
`
    : ""
}
    `.trim()

    const apiKey = process.env.WEB3FORMS_KEY

    if (!apiKey) {
      throw new Error("Web3Forms API key is not configured. Please add WEB3FORMS_KEY to your environment variables.")
    }

    // Send via Web3Forms with custom fields
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        subject: formData.prayerRequest
          ? "🙏 Prayer Request from Masaka SDA Website"
          : "📧 New Contact Form Submission - Masaka SDA",
        from_name: `${formData.name} (via Masaka SDA Website)`,
        email: formData.email,
        message: emailContent,
        to_email: "jessekyambadde0@gmail.com", // Testing email - change back to info@masakasda.org later
        replyto: formData.email, // Allows easy reply to sender
        "Form Type": formData.prayerRequest ? "Prayer Request" : "General Contact",
        "Sender Phone": formData.phone || "Not provided",
        "Submission Date": new Date().toLocaleString(),
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true, message: "Email sent successfully!" }
    } else {
      throw new Error(result.message || "Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
    }
  }
}
