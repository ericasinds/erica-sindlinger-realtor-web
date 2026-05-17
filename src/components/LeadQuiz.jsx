import { useState } from "react";
import { siteConfig } from "../config/siteConfig.js";

const initialAnswers = siteConfig.quizQuestions.reduce((answers, question) => {
  answers[question.name] = "";
  return answers;
}, {});

const initialContact = siteConfig.quizContactFields.reduce((answers, field) => {
  answers[field.name] = "";
  return answers;
}, {});

export default function LeadQuiz() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [contact, setContact] = useState(initialContact);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateAnswer(name, value) {
    setAnswers((current) => ({ ...current, [name]: value }));
  }

  function updateContact(name, value) {
    setContact((current) => ({ ...current, [name]: value }));
  }

  async function submitLead(event) {
    event.preventDefault();
    setError("");

    const missingContact = siteConfig.quizContactFields.find((field) => field.required && !contact[field.name]);
    if (missingContact) {
      setError(`Please add your ${missingContact.label.toLowerCase()} so Erica can follow up.`);
      return;
    }

    setStatus("loading");
    try {
      if (siteConfig.form.action) {
        await fetch(siteConfig.form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...answers, ...contact, source: "Start Your Home Plan quiz" })
        });
      }
      setStatus("success");
      setAnswers(initialAnswers);
      setContact(initialContact);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call or email Erica directly, and we can connect the form shortly.");
    }
  }

  return (
    <form className="lead-box" onSubmit={submitLead}>
      <p className="eyebrow">Start here</p>
      <h2>Start Your Home Plan</h2>
      <p>
        Share what you are hoping to do, where you are looking, and what feels most important.
        Erica will use this as a starting point for a no-pressure conversation.
      </p>

      {status === "success" && (
        <div className="success-box" role="status">
          Thank you. Erica has the details needed to follow up with a thoughtful next step.
        </div>
      )}
      {error && <p className="error-text">{error}</p>}

      <div className="quiz-grid">
        {siteConfig.quizQuestions.map((question) => (
          <fieldset key={question.name}>
            <legend>{question.label}</legend>
            <div className="option-grid">
              {question.options.map((option) => (
                <label key={option} className="choice">
                  <input
                    type="radio"
                    name={question.name}
                    value={option}
                    checked={answers[question.name] === option}
                    onChange={(event) => updateAnswer(question.name, event.target.value)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="form-grid compact-contact">
        {siteConfig.quizContactFields.map((field) => (
          <label key={field.name}>
            {field.label}
            <input
              type={field.type}
              value={contact[field.name]}
              onChange={(event) => updateContact(field.name, event.target.value)}
              required={field.required}
            />
          </label>
        ))}
      </div>

      <button className="button primary" type="submit">
        {status === "loading" ? "Sending..." : "Send My Home Plan"}
      </button>
    </form>
  );
}
