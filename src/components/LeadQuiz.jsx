import { ArrowLeft, Home, Phone, Tags } from "lucide-react";
import { useMemo, useState } from "react";
import { siteConfig } from "../config/siteConfig.js";

const initialContact = siteConfig.quizContactFields.reduce((answers, field) => {
  answers[field.name] = "";
  return answers;
}, {});

const funnelOptions = [
  {
    value: "Buying",
    title: "I want to buy",
    text: "Build a simple buyer plan for areas, budget, timeline, and next steps.",
    icon: Home
  },
  {
    value: "Selling",
    title: "I want to sell",
    text: "Start a seller plan for pricing, prep, timing, and strategy.",
    icon: Tags
  }
];

export default function LeadQuiz() {
  const [intent, setIntent] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState(initialContact);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const questions = useMemo(() => {
    if (intent === "Selling") return siteConfig.sellerQuizQuestions;
    if (intent === "Buying") return siteConfig.buyerQuizQuestions;
    return [];
  }, [intent]);

  const totalSteps = questions.length + 2;
  const currentStep = intent ? step + 2 : 1;
  const progress = Math.round((currentStep / totalSteps) * 100);
  const currentQuestion = questions[step];
  const isContactStep = intent && step >= questions.length;

  function chooseIntent(value) {
    setIntent(value);
    setStep(0);
    setAnswers({ interest: value });
    setStatus("idle");
    setError("");
  }

  function chooseAnswer(name, value) {
    setAnswers((current) => ({ ...current, [name]: value }));
    window.setTimeout(() => setStep((current) => Math.min(current + 1, questions.length)), 180);
  }

  function goBack() {
    setError("");
    if (!intent) return;
    if (step === 0) {
      setIntent("");
      setAnswers({});
      return;
    }
    setStep((current) => current - 1);
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
          body: JSON.stringify({ ...answers, ...contact, source: `${intent} home plan quiz` })
        });
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call or email Erica directly, and we can connect the form shortly.");
    }
  }

  if (status === "success") {
    return (
      <div className="funnel-shell" aria-live="polite">
        <div className="funnel-card success-card">
          <p className="eyebrow">Home plan received</p>
          <h2>Thank you. Erica can follow up with a more personal next step.</h2>
          <p>
            If you would rather talk now, call Erica directly at{" "}
            <a href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>{siteConfig.phone}</a>.
          </p>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              setIntent("");
              setStep(0);
              setAnswers({});
              setContact(initialContact);
              setStatus("idle");
            }}
          >
            Start Another Plan
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="funnel-shell" onSubmit={submitLead}>
      <div className="funnel-intro">
        <p className="eyebrow">Start here</p>
        <h2>Build your Central Florida home plan in 60 seconds.</h2>
        <p>
          Answer a few quick questions so Erica knows whether to send buyer guidance,
          seller strategy, or a simple next-step plan. No pressure and no obligation.
        </p>
        <a className="funnel-call" href={`tel:${siteConfig.phone.replaceAll("-", "")}`}>
          <Phone size={18} aria-hidden="true" /> Prefer to talk? Call {siteConfig.phone}
        </a>
      </div>

      <div className="funnel-card">
        <div className="progress-row" aria-label={`Step ${currentStep} of ${totalSteps}`}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span key={index} className={index < currentStep ? "active" : ""} />
          ))}
        </div>

        {!intent && (
          <>
            <h3>Are you looking to buy or sell?</h3>
            <p>Choose the path that fits where you are right now.</p>
            <div className="funnel-choice-grid">
              {funnelOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button key={option.value} className="funnel-choice" type="button" onClick={() => chooseIntent(option.value)}>
                    <Icon size={28} aria-hidden="true" />
                    <strong>{option.title}</strong>
                    <span>{option.text}</span>
                  </button>
                );
              })}
              <button className="funnel-choice" type="button" onClick={() => chooseIntent("Buying")}>
                <Home size={28} aria-hidden="true" />
                <strong>I am just exploring</strong>
                <span>Start with the buyer path and Erica can help you sort out options.</span>
              </button>
            </div>
          </>
        )}

        {intent && currentQuestion && (
          <>
            <h3>{currentQuestion.label}</h3>
            <p>{intent === "Selling" ? "This helps Erica understand your selling goals." : "This helps Erica understand your buying goals."}</p>
            <div className="funnel-choice-grid">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  className={answers[currentQuestion.name] === option ? "funnel-choice selected" : "funnel-choice"}
                  type="button"
                  onClick={() => chooseAnswer(currentQuestion.name, option)}
                >
                  <strong>{option}</strong>
                </button>
              ))}
            </div>
          </>
        )}

        {isContactStep && (
          <>
            <h3>Where should Erica send your plan?</h3>
            <p>Add your best contact info so Erica can follow up with the right next step.</p>
            {error && <p className="error-text">{error}</p>}
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
              {status === "loading" ? "Sending..." : intent === "Selling" ? "Send My Seller Plan" : "Send My Buyer Plan"}
            </button>
          </>
        )}

        {intent && (
          <button className="back-button" type="button" onClick={goBack}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
        )}
        <p className="funnel-disclaimer">General guidance only. This is not financial or legal advice.</p>
      </div>
    </form>
  );
}
