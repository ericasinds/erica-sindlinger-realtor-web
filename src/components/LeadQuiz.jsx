import { useState } from "react";
import { siteConfig } from "../config/siteConfig.js";
import LeadForm from "./LeadForm.jsx";

const initialAnswers = siteConfig.quizQuestions.reduce((answers, question) => {
  answers[question.name] = "";
  return answers;
}, {});

export default function LeadQuiz() {
  const [answers, setAnswers] = useState(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  function updateAnswer(name, value) {
    setAnswers((current) => ({ ...current, [name]: value }));
  }

  function submitLead(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div aria-live="polite">
        <LeadForm
          title="Almost done"
          intro="Add your contact details and Erica can follow up with a more personal next step."
          compact
          defaultInterest={answers.interest}
        />
      </div>
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
      <button className="button primary" type="submit">Continue</button>
    </form>
  );
}
