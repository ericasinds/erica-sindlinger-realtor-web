import { useState } from "react";
import { siteConfig } from "../config/siteConfig.js";
import { CTAButton } from "./Button.jsx";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  timeline: "",
  interest: "",
  area: "",
  message: ""
};

export default function LeadForm({ title = "Start Your Home Plan", intro, compact = false, defaultInterest = "" }) {
  const [form, setForm] = useState({ ...initialForm, interest: defaultInterest });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setError("Please add your name and email so Erica can follow up.");
      return;
    }

    setStatus("loading");
    try {
      if (siteConfig.form.action) {
        await fetch(siteConfig.form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      }
      setStatus("success");
      setForm({ ...initialForm, interest: defaultInterest });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call or email Erica directly, and we can connect the form shortly.");
    }
  }

  return (
    <form className="lead-box" onSubmit={submitForm}>
      <p className="eyebrow">Lead form</p>
      <h2>{title}</h2>
      <p>{intro || "Share a few details and Erica will help you think through the next right step."}</p>

      {status === "success" && (
        <div className="success-box" role="status">
          Thank you. Your message is ready for follow-up.
        </div>
      )}
      {error && <p className="error-text">{error}</p>}

      <div className="form-grid">
        <label>
          Name
          <input value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required />
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
        </label>
        <label>
          Timeline
          <select value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)}>
            <option value="">Choose one</option>
            {siteConfig.form.timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
        <label>
          Interest
          <select value={form.interest} onChange={(event) => updateField("interest", event.target.value)}>
            <option value="">Choose one</option>
            {siteConfig.form.interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred area
          <input value={form.area} onChange={(event) => updateField("area", event.target.value)} placeholder="Orlando, Winter Park, Lake Mary..." />
        </label>
        {!compact && (
          <label className="full">
            Message
            <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} />
          </label>
        )}
      </div>
      <div className="button-row">
        <CTAButton type="submit" icon={false}>{status === "loading" ? "Sending..." : "Send Message"}</CTAButton>
      </div>
    </form>
  );
}
