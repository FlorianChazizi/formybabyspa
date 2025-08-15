import { useState } from "react";
import "../styles/contact-form.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hours: "",
    date: "",
  });

  // Track message and type (success or error)
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit form");
    }

    // Success
    setFormMessage({ text: "Η φόρμα υποβλήθηκε με επιτυχία!", type: "success" });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      hours: "",
      date: "",
    });
  } catch (error: unknown) {
    console.error("Error submitting form:", error);

    // Narrow the unknown type
    if (error instanceof Error) {
      setFormMessage({ text: error.message, type: "error" });
    } else {
      setFormMessage({ text: "Υπήρξε σφάλμα κατά την υποβολή της φόρμας.", type: "error" });
    }
  }

  // Hide message after 5 seconds
  setTimeout(() => setFormMessage({ text: "", type: "" }), 5000);
};
  return (
    <div className="contact-form-wrapper" id="radevou">
      <form className="contact-form-card" onSubmit={handleSubmit}>
        <h2 className="contact-form-title">Κλείστε Ραντεβού</h2>

        {formMessage.text && (
          <div className={`form-message ${formMessage.type}`}>
            {formMessage.text}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="name">Όνομα</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Τηλέφωνο</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hours">Ώρες</label>
          <input
            type="text"
            id="hours"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            placeholder="π.χ. 09:00 - 21:00"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Ημερομηνία</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Υποβολή
        </button>
      </form>
    </div>
  );
}
