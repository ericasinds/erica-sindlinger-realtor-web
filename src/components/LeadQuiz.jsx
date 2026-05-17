import { Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../siteConfig.js";

const initialAnswers = siteConfig.quizQuestions.reduce((answers, question) => {
  answers[question.name] = "";
  return answers;
}, {});

export default function LeadQuiz() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function updateAnswer(name, value) {
    setAnswers((current) => ({ ...current, [name]: value }));
  }

  function submitLead(event) {
    event.preventDefault();
    console.log("Lead form ready for CRM/webhook:", { answers, contact });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="lead-box" aria-live="polite">
        <p className="eyebrow">Thank you</p>
        <h2>Your home plan request is ready.</h2>
        <p>
          This first version stores the form connection as a placeholder. When
          your CRM is ready, this can send the details directly into your follow-up
          system.
        </p>
      </section>
    );
  }

  return (
    <form className="lead-box" onSubmit={submitLead}>
      <p className="eyebrow">Start here</p>
      <h2>Start Your Home Plan</h2>
      <p>
        Share a little about where you are in the process, and Erica can help you
        think through the next right step.
      </p>
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
      <div className="contact-grid">
        <label>
          Name
          <input
            required
            value={contact.name}
            onChange={(event) => setContact({ ...contact, name: event.target.value })}
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={contact.email}
            onChange={(event) => setContact({ ...contact, email: event.target.value })}
          />
        </label>
        <label>
          Phone
          <input
            value={contact.phone}
            onChange={(event) => setContact({ ...contact, phone: event.target.value })}
          />
        </label>
      </div>
      <button className="button primary" type="submit">
        <Send size={18} />
        Send My Home Plan
      </button>
    </form>
  );
}
