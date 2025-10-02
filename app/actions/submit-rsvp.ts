"use server"

export async function submitRSVP(formData: FormData) {
  try {
    const data = {
      access_key: process.env.WEB3FORMS_KEY,
      subject: `Event RSVP: ${formData.get("event_name")}`,
      from_name: formData.get("name"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "Not provided",
      guests: formData.get("guests") || "1",
      notes: formData.get("notes") || "None",
      event_name: formData.get("event_name"),
      event_date: formData.get("event_date"),
      form_type: "Event RSVP",
      reply_to: formData.get("email"),
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true }
    } else {
      return { success: false, error: "Failed to submit RSVP" }
    }
  } catch (error) {
    console.error("RSVP submission error:", error)
    return { success: false, error: "An error occurred while submitting your RSVP" }
  }
}
