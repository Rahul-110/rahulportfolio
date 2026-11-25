import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHO_OPTIONS = [
  'Recruiter / Hiring Manager',
  'Company',
  'Startup / Founder',
  'Client',
  'Other'
];

const DISCUSS_OPTIONS = [
  'UI/UX Designer opportunity',
  'Product Design opportunity',
  'Freelance design project',
  'Product collaboration',
  'Something else'
];

export default function ContactStudio() {
  const [copied, setCopied] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whoAreYou, setWhoAreYou] = useState('');
  const [discussTopic, setDiscussTopic] = useState('UI/UX Designer opportunity');
  const [message, setMessage] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [gotcha, setGotcha] = useState('');

  // UI status state
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Copy email handler
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('rahul17106111@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gotcha) {
      setStatus('success');
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('whoAreYou', whoAreYou || 'Not specified');
      formData.append('topicToDiscuss', discussTopic);
      formData.append('companyOrProject', companyName || 'Not specified');
      formData.append('message', message);

      const response = await fetch('https://formspree.io/f/mwvgpkyr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to send message right now. Please try emailing directly.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error occurred. Please try emailing directly to rahul17106111@gmail.com');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setWhoAreYou('');
    setDiscussTopic('UI/UX Designer opportunity');
    setMessage('');
    setCompanyName('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-[--color-text]">

      {/* LEFT COLUMN: HERO & DIRECT CONTACT OPTIONS (5 Cols) */}
      <div className="lg:col-span-5 space-y-8">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[--color-surface] border border-[--color-border] px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[--color-text] uppercase">
            Open to UI/UX & Product Designer opportunities
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-4">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-medium tracking-tight leading-[1.02] text-[--color-text]">
            Something on <br />
            your <span className="italic font-serif text-[--color-accent]">mind?</span>
          </h2>
          <p className="text-base sm:text-lg text-[--color-text-secondary] font-normal leading-relaxed max-w-md pt-2">
            Have an opportunity, product idea or design challenge? Let's start a conversation.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="bg-[--color-surface] border border-[--color-border] p-6 sm:p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[--color-accent]">
              Prefer a direct conversation?
            </span>
            <p className="font-mono text-sm sm:text-base text-[--color-text] font-bold select-all break-all">
              rahul17106111@gmail.com
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:rahul17106111@gmail.com"
              className="group inline-flex items-center gap-2 bg-[--color-text] text-[--color-background] text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 rounded-full hover:bg-[--color-accent] hover:text-[--color-background] transition-all duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]"
            >
              <span>Email me</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-transparent border border-[--color-border] hover:border-[--color-text] text-[--color-text] text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]"
              aria-live="polite"
            >
              <span>{copied ? 'Copied! ✓' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Direct Links Strip */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[--color-text-secondary] block">
            Verified Links & Profiles
          </span>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://www.linkedin.com/in/rahul-k-54b92b1aa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[--color-surface] border border-[--color-border] hover:border-[--color-accent] px-4 py-2 rounded-full text-xs font-mono text-[--color-text] transition-all"
            >
              <span>LinkedIn</span>
              <span className="text-[--color-accent] text-[10px]">↗</span>
            </a>

            <a
              href="https://www.behance.net/rahulk111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[--color-surface] border border-[--color-border] hover:border-[--color-accent] px-4 py-2 rounded-full text-xs font-mono text-[--color-text] transition-all"
            >
              <span>Behance</span>
              <span className="text-[--color-accent] text-[10px]">↗</span>
            </a>

            <a
              href="https://www.figma.com/@rahul2205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[--color-surface] border border-[--color-border] hover:border-[--color-accent] px-4 py-2 rounded-full text-xs font-mono text-[--color-text] transition-all"
            >
              <span>Figma</span>
              <span className="text-[--color-accent] text-[10px]">↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[--color-surface] border border-[--color-border] hover:border-[--color-accent] px-4 py-2 rounded-full text-xs font-mono text-[--color-text] transition-all"
            >
              <span>Résumé</span>
              <span className="text-[--color-accent] text-[10px]">↓</span>
            </a>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: CREATIVE PROJECT INQUIRY FORM (7 Cols) */}
      <div className="lg:col-span-7">
        <div className="bg-[--color-surface] text-[--color-text] p-8 sm:p-12 rounded-[2.5rem] border border-[--color-border] shadow-lg relative overflow-hidden">

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              /* SUCCESS STATE PANEL */
              <motion.div
                key="success-panel"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-[--color-accent]/10 border-2 border-[--color-accent] flex items-center justify-center text-[--color-accent]">
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-10 h-10 stroke-current fill-none stroke-[3]"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>

                <div className="space-y-3 max-w-md">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-[--color-text] tracking-tight">
                    Your message is on its way.
                  </h3>
                  <p className="text-sm sm:text-base text-[--color-text-secondary] leading-relaxed">
                    Thanks for reaching out! I appreciate you taking the time to connect. I'll review your details and get back to you as soon as I can.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 bg-[--color-text] text-[--color-background] px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-[--color-accent] transition-colors cursor-pointer"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ACTIVE FORM PANEL */
              <motion.form
                key="active-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
              >
                {/* Form Header */}
                <div className="space-y-2 pb-2 border-b border-[--color-border]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[--color-accent]">
                    PROJECT & OPPORTUNITY INQUIRY
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[--color-text]">
                    Tell me what you're thinking.
                  </h3>
                  <p className="text-xs sm:text-sm text-[--color-text-secondary]">
                    A few details will help me understand how we can work together.
                  </p>
                </div>

                {/* Honeypot Anti-Spam Field */}
                <input
                  type="text"
                  name="_gotcha"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />

                {/* Error Banner */}
                {status === 'error' && errorMessage && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-3">
                    <span className="text-base">⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field 01 & 02: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 01 — YOUR NAME */}
                  <div className="space-y-2">
                    <label htmlFor="input-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[--color-text]">
                      01 — YOUR NAME <span className="text-[--color-accent]">*</span>
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="What should I call you?"
                      className="w-full bg-[--color-background] border border-[--color-border] rounded-2xl px-5 py-3.5 text-sm text-[--color-text] placeholder:text-[--color-text-secondary]/50 focus:outline-none focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 transition-all"
                    />
                  </div>

                  {/* 02 — YOUR EMAIL */}
                  <div className="space-y-2">
                    <label htmlFor="input-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[--color-text]">
                      02 — YOUR EMAIL <span className="text-[--color-accent]">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-[--color-background] border border-[--color-border] rounded-2xl px-5 py-3.5 text-sm text-[--color-text] placeholder:text-[--color-text-secondary]/50 focus:outline-none focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 transition-all"
                    />
                  </div>
                </div>

                {/* 03 — WHO ARE YOU? (Pills) */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[--color-text]">
                    03 — WHO ARE YOU? <span className="text-xs font-normal text-[--color-text-secondary] lowercase">(optional)</span>
                  </label>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Who are you?">
                    {WHO_OPTIONS.map((opt) => {
                      const isSelected = whoAreYou === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setWhoAreYou(isSelected ? '' : opt)}
                          className={`text-xs font-mono px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[--color-text] text-[--color-background] border-[--color-text] shadow-sm'
                              : 'bg-[--color-background] text-[--color-text-secondary] border-[--color-border] hover:border-[--color-accent] hover:text-[--color-text]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 04 — WHAT WOULD YOU LIKE TO DISCUSS? (Pills) */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[--color-text]">
                    04 — WHAT WOULD YOU LIKE TO DISCUSS? <span className="text-[--color-accent]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="What would you like to discuss?">
                    {DISCUSS_OPTIONS.map((opt) => {
                      const isSelected = discussTopic === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setDiscussTopic(opt)}
                          className={`text-xs font-mono px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[--color-accent] text-[--color-background] border-[--color-accent] shadow-sm font-bold'
                              : 'bg-[--color-background] text-[--color-text-secondary] border-[--color-border] hover:border-[--color-accent] hover:text-[--color-text]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 05 — TELL ME A LITTLE MORE */}
                <div className="space-y-2">
                  <label htmlFor="input-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[--color-text]">
                    05 — TELL ME A LITTLE MORE <span className="text-[--color-accent]">*</span>
                  </label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a few details about the opportunity, product or idea..."
                    className="w-full bg-[--color-background] border border-[--color-border] rounded-2xl px-5 py-3.5 text-sm text-[--color-text] placeholder:text-[--color-text-secondary]/50 focus:outline-none focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent]/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full group inline-flex items-center justify-center gap-3 bg-[--color-text] hover:bg-[--color-accent] text-[--color-background] py-4 px-8 rounded-full text-xs font-mono font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[--color-background]/30 border-t-[--color-background] rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </div>

    </div>
  );
}
