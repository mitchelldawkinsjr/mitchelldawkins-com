'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { submitContact } from '@/lib/contact-submit';

const STORAGE_KEY = 'ai-assistant-questionnaire-v1';
const SUBJECT = 'AI Assistant Client Questionnaire';

const fieldClass =
  'w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600';

type FollowUp = {
  name: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
};

type Question =
  | {
      kind: 'text';
      title: string;
      heading: string;
      lede: string;
      name: string;
      placeholder: string;
      hint?: string;
    }
  | {
      kind: 'multi';
      title: string;
      heading: string;
      lede: string;
      name: string;
      options: string[];
      followUp: FollowUp;
    }
  | {
      kind: 'single';
      title: string;
      heading: string;
      lede: string;
      name: string;
      options: { value: string; label: string }[];
      followUp?: FollowUp;
    };

const questions: Question[] = [
  {
    kind: 'text',
    title: 'Biggest challenges',
    heading: "1. What's taking up your time?",
    lede: 'What are the biggest headaches with email, client communication, or appointments?',
    name: 'biggest_challenges',
    placeholder: 'For example: replying to the same questions, scheduling back-and-forth, missing follow-ups...',
  },
  {
    kind: 'text',
    title: 'Your wish list',
    heading: '2. What would you love to have handled for you?',
    lede: 'If you had a personal assistant, what two or three things would you delegate first?',
    name: 'assistant_wishlist',
    placeholder: "I'd love help with...",
  },
  {
    kind: 'multi',
    title: 'Types of emails',
    heading: '3. What kinds of emails do you receive?',
    lede: 'Select all that apply.',
    name: 'email_types',
    options: [
      'Appointment requests',
      'New customer inquiries',
      'Pricing or service questions',
      'Existing client follow-ups',
      'Invoices or billing',
      'Other general messages',
    ],
    followUp: {
      name: 'email_types_other',
      label: 'Anything else?',
      placeholder: 'Optional',
    },
  },
  {
    kind: 'single',
    title: 'Level of autonomy',
    heading: '4. How much freedom should the assistant have?',
    lede: 'Choose what feels most comfortable to start with.',
    name: 'autonomy',
    options: [
      {
        value: 'Routine tasks automatically; ask me about unusual requests',
        label: 'Handle routine tasks automatically, but check with me about unusual requests (recommended)',
      },
      {
        value: 'Draft everything for approval',
        label: 'Prepare everything for my approval before sending or booking',
      },
      {
        value: 'Mostly independent; escalate exceptions',
        label: 'Handle most tasks independently and only involve me when needed',
      },
    ],
  },
  {
    kind: 'text',
    title: 'Scheduling rules',
    heading: '5. How does scheduling work today?',
    lede: 'What appointments do you offer? How long are they, and when are you generally available?',
    name: 'scheduling_rules',
    placeholder: 'Example: 30-minute consultations, Monday–Thursday 9–4, with 15 minutes between appointments.',
  },
  {
    kind: 'single',
    title: 'Booking process',
    heading: '6. What should happen when someone wants an appointment?',
    lede: 'Imagine a client emails asking for an appointment. Which approach would you prefer?',
    name: 'booking_approach',
    options: [
      {
        value: 'Offer times, then book automatically after client confirms',
        label: 'Offer available times and book automatically once the client chooses',
      },
      {
        value: 'Offer times, but ask me to approve booking',
        label: 'Offer times, but ask me to approve the booking',
      },
      {
        value: 'Draft suggested response for me',
        label: 'Suggest a reply and let me handle the booking',
      },
    ],
    followUp: {
      name: 'booking_exceptions',
      label: 'Any special cases or rules?',
      placeholder: 'Optional: important clients, certain services, etc.',
      multiline: true,
    },
  },
  {
    kind: 'single',
    title: 'Communication style',
    heading: '7. How should your assistant sound?',
    lede: 'Pick the style closest to your business.',
    name: 'tone',
    options: [
      { value: 'Warm and friendly', label: 'Warm and friendly' },
      { value: 'Professional and straightforward', label: 'Professional and straightforward' },
      { value: 'Formal and polished', label: 'Formal and polished' },
    ],
    followUp: {
      name: 'tone_notes',
      label: 'Anything else about your style?',
      placeholder: 'Optional: words you like to use, things to avoid...',
      multiline: true,
    },
  },
  {
    kind: 'multi',
    title: 'When to ask you',
    heading: '8. When should the assistant get your attention?',
    lede: "Select the things you'd always prefer a person to handle.",
    name: 'escalation_types',
    options: [
      'Complaints or unhappy customers',
      'Billing or payment issues',
      'Cancellations or rescheduling',
      'Unusual requests',
      'Important clients',
    ],
    followUp: {
      name: 'escalation_other',
      label: 'Anything else?',
      placeholder: 'Optional',
    },
  },
  {
    kind: 'text',
    title: 'Current tools',
    heading: '9. What tools do you use now?',
    lede: 'Are you using Gmail and Google Calendar, or any booking tools, spreadsheets, or customer-management software?',
    name: 'current_tools',
    placeholder: 'Example: one Gmail inbox, Google Calendar, and a booking link...',
  },
  {
    kind: 'text',
    title: 'What success looks like',
    heading: '10. What would make this a success?',
    lede: 'After a month, what would make you say, “This has made my life easier”?',
    name: 'success_definition',
    placeholder: "I'd know it was working if...",
    hint: 'Optional: You can share a few example email conversations separately, with personal or sensitive details removed.',
  },
];

const reviewFields: { key: string; label: string; multi?: boolean }[] = [
  { key: 'name', label: 'Your name' },
  { key: 'business', label: 'Business' },
  { key: 'email', label: 'Email' },
  { key: 'biggest_challenges', label: '1. Biggest challenges' },
  { key: 'assistant_wishlist', label: '2. What to delegate' },
  { key: 'email_types', label: '3. Email types', multi: true },
  { key: 'email_types_other', label: 'Other email types' },
  { key: 'autonomy', label: '4. Assistant autonomy' },
  { key: 'scheduling_rules', label: '5. Scheduling rules' },
  { key: 'booking_approach', label: '6. Booking approach' },
  { key: 'booking_exceptions', label: 'Booking exceptions' },
  { key: 'tone', label: '7. Communication style' },
  { key: 'tone_notes', label: 'Tone notes' },
  { key: 'escalation_types', label: '8. Human escalation', multi: true },
  { key: 'escalation_other', label: 'Other escalation cases' },
  { key: 'current_tools', label: '9. Current tools' },
  { key: 'success_definition', label: '10. Definition of success' },
];

type Draft = {
  step: number;
  text: Record<string, string>;
  selected: Record<string, string[]>;
};

const emptyDraft = (): Draft => ({ step: 0, text: {}, selected: {} });

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function displayValue(draft: Draft, key: string, multi?: boolean) {
  if (multi) {
    const picked = draft.selected[key] ?? [];
    return picked.length ? picked.join(', ') : 'Not answered';
  }
  const value = draft.text[key]?.trim();
  return value || 'Not answered';
}

function messageBody(draft: Draft) {
  return reviewFields
    .map((field) => `${field.label}\n${displayValue(draft, field.key, field.multi)}`)
    .join('\n\n');
}

function choiceClass(active: boolean) {
  return `flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer ${
    active
      ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/40'
      : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
  }`;
}

export default function AiAssistantQuestionnaire() {
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const lastStep = questions.length + 1;
  const question = draft.step >= 1 && draft.step <= questions.length ? questions[draft.step - 1] : null;

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') as Draft | null;
      if (saved && typeof saved.step === 'number' && saved.text && saved.selected) {
        setDraft({
          step: Math.min(Math.max(saved.step, 0), lastStep),
          text: saved.text,
          selected: saved.selected,
        });
      }
    } catch {
      // Ignore a damaged draft and start fresh.
    }
    setReady(true);
  }, [lastStep]);

  useEffect(() => {
    if (!ready || submitted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft, ready, submitted]);

  const setText = (name: string, value: string) => {
    setDraft((current) => ({ ...current, text: { ...current.text, [name]: value } }));
  };

  const toggleSelected = (name: string, value: string) => {
    setDraft((current) => {
      const currentValues = current.selected[name] ?? [];
      const next = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...current, selected: { ...current.selected, [name]: next } };
    });
  };

  const go = (step: number) => {
    setError('');
    setDraft((current) => ({ ...current, step }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const continueForward = async () => {
    if (draft.step === 0) {
      const name = draft.text.name?.trim() ?? '';
      const email = draft.text.email?.trim() ?? '';
      if (!name) {
        setError('Please enter your name.');
        return;
      }
      if (!isEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
    }

    if (draft.step < lastStep) {
      go(draft.step + 1);
      return;
    }

    setIsSubmitting(true);
    setError('');
    try {
      await submitContact({
        name: draft.text.name.trim(),
        email: draft.text.email.trim(),
        subject: SUBJECT,
        message: messageBody(draft),
      });
      localStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
      trackEvent('questionnaire_submit', { status: 'dispatched' });
    } catch (submitError) {
      console.error('Error submitting questionnaire:', submitError);
      trackEvent('questionnaire_submit', { status: 'error' });
      setError('We could not send your answers. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = submitted ? 100 : Math.round((draft.step / lastStep) * 100);
  const stepTitle = submitted
    ? 'Complete'
    : draft.step === 0
      ? 'Welcome'
      : draft.step === lastStep
        ? 'Review'
        : question?.title ?? '';
  const progressText = submitted
    ? 'Submitted'
    : draft.step === 0
      ? 'Getting started'
      : draft.step === lastStep
        ? 'Ready to submit'
        : `Question ${draft.step} of ${questions.length}`;
  const nextLabel =
    draft.step === 0 ? "Let's begin" : draft.step === lastStep ? 'Send my answers' : 'Continue';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          AI Assistant Discovery
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">About 5–10 minutes</p>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sm:p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {stepTitle}
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" aria-hidden="true">
          <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 mb-8 flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{progressText}</span>
          {!submitted && draft.step > 0 && <span>{progress}%</span>}
        </div>

        {submitted ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank you!</h1>
            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-4">
              Your answers were submitted successfully. We&apos;ll be in touch soon.
            </div>
          </>
        ) : (
          <>
            {draft.step === 0 && (
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Let&apos;s make your workday easier.
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We&apos;re exploring an assistant that can help with your business emails and appointment
                  scheduling. A few quick answers will help us make it work the way <em>you</em> do.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  There are no technical questions, and you can skip anything you&apos;re unsure about.
                </p>
                <label htmlFor="clientName" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Your name <span className="text-red-600">*</span>
                </label>
                <input
                  id="clientName"
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Your name"
                  value={draft.text.name ?? ''}
                  onChange={(event) => setText('name', event.target.value)}
                  className={fieldClass}
                />
                <label htmlFor="businessName" className="block text-gray-700 dark:text-gray-300 mb-2 mt-5 font-medium">
                  Business name
                </label>
                <input
                  id="businessName"
                  type="text"
                  maxLength={160}
                  placeholder="Business or organization"
                  value={draft.text.business ?? ''}
                  onChange={(event) => setText('business', event.target.value)}
                  className={fieldClass}
                />
                <label htmlFor="clientEmail" className="block text-gray-700 dark:text-gray-300 mb-2 mt-5 font-medium">
                  Your email <span className="text-red-600">*</span>
                </label>
                <input
                  id="clientEmail"
                  type="email"
                  autoComplete="email"
                  maxLength={200}
                  placeholder="you@business.com"
                  value={draft.text.email ?? ''}
                  onChange={(event) => setText('email', event.target.value)}
                  className={fieldClass}
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Used only to identify your response and follow up with you.
                </p>
              </div>
            )}

            {question?.kind === 'text' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{question.heading}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{question.lede}</p>
                <textarea
                  name={question.name}
                  value={draft.text[question.name] ?? ''}
                  onChange={(event) => setText(question.name, event.target.value)}
                  placeholder={question.placeholder}
                  className={`${fieldClass} min-h-[140px]`}
                />
                {question.hint && (
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{question.hint}</p>
                )}
              </div>
            )}

            {question?.kind === 'multi' && (
              <fieldset>
                <legend className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{question.heading}</legend>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{question.lede}</p>
                <div className="grid gap-3">
                  {question.options.map((option) => {
                    const checked = (draft.selected[question.name] ?? []).includes(option);
                    return (
                      <label key={option} className={choiceClass(checked)}>
                        <input
                          type="checkbox"
                          className="mt-1 accent-blue-600"
                          checked={checked}
                          onChange={() => toggleSelected(question.name, option)}
                        />
                        <span className="text-gray-800 dark:text-gray-200">{option}</span>
                      </label>
                    );
                  })}
                </div>
                <FollowUpField followUp={question.followUp} value={draft.text[question.followUp.name] ?? ''} onChange={setText} />
              </fieldset>
            )}

            {question?.kind === 'single' && (
              <fieldset>
                <legend className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{question.heading}</legend>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{question.lede}</p>
                <div className="grid gap-3">
                  {question.options.map((option) => {
                    const checked = draft.text[question.name] === option.value;
                    return (
                      <label key={option.value} className={choiceClass(checked)}>
                        <input
                          type="radio"
                          name={question.name}
                          className="mt-1 accent-blue-600"
                          checked={checked}
                          onChange={() => setText(question.name, option.value)}
                        />
                        <span className="text-gray-800 dark:text-gray-200">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
                {question.followUp && (
                  <FollowUpField
                    followUp={question.followUp}
                    value={draft.text[question.followUp.name] ?? ''}
                    onChange={setText}
                  />
                )}
              </fieldset>
            )}

            {draft.step === lastStep && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">You&apos;re almost done!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  Review your answers below. You can go back and change anything before sending.
                </p>
                <div className="space-y-3">
                  {reviewFields.map((field) => (
                    <div key={field.key} className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4">
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{field.label}</p>
                      <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                        {displayValue(draft, field.key, field.multi)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Answers are saved on this device as you go.
            </p>
            <div className="mt-4 flex items-center justify-between gap-3">
              {draft.step > 0 ? (
                <button
                  type="button"
                  onClick={() => go(draft.step - 1)}
                  className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={continueForward}
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : nextLabel}
              </button>
            </div>
          </>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        Your answers are sent to the project contact. Please do not include passwords, credentials, or sensitive
        customer information.
      </p>
    </div>
  );
}

function FollowUpField({
  followUp,
  value,
  onChange,
}: {
  followUp: FollowUp;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="mt-5">
      <label htmlFor={followUp.name} className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
        {followUp.label}
      </label>
      {followUp.multiline ? (
        <textarea
          id={followUp.name}
          value={value}
          placeholder={followUp.placeholder}
          onChange={(event) => onChange(followUp.name, event.target.value)}
          className={`${fieldClass} min-h-[90px]`}
        />
      ) : (
        <input
          id={followUp.name}
          type="text"
          value={value}
          placeholder={followUp.placeholder}
          onChange={(event) => onChange(followUp.name, event.target.value)}
          className={fieldClass}
        />
      )}
    </div>
  );
}
