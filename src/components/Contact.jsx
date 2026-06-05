import React, { useState } from "react";
import { Send, Copy, Check, Mail, Clock, ShieldAlert, Sparkles, ExternalLink } from "lucide-react";
import { portfolioData } from "../portfolioData";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState({ show: false, type: null, message: "" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: null, text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // SVG Brand Icons
  const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const LinkedinIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  // Trigger Toast Notification
  let toastTimer;
  const triggerToast = (type, message) => {
    clearTimeout(toastTimer);
    setToast({ show: true, type, message });
    toastTimer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Copy Email Function
  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personalInfo.email);
    setCopied(true);
    triggerToast("success", "Email copied successfully.");
    
    const copyTimeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(copyTimeout);
  };

  // Helper to validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Helper to sanitize inputs (XSS prevention)
  const sanitizeInput = (val) => {
    if (typeof val !== "string") return "";
    return val.replace(/<[^>]*>/g, "").trim();
  };

  // Form Submit Handler (EmailJS Direct SDK)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    // 1. Basic Rate Limiting (60-second cooldown on frontend)
    const lastSubmission = localStorage.getItem("last_contact_submission_time");
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission, 10);
      const waitTime = 60000 - timePassed;
      if (waitTime > 0) {
        const secondsLeft = Math.ceil(waitTime / 1000);
        triggerToast("error", `Anti-Spam active. Please wait ${secondsLeft}s before sending another message.`);
        return;
      }
    }

    // 2. Strict Input Sanitization
    const name = sanitizeInput(formState.name);
    const email = sanitizeInput(formState.email);
    const message = sanitizeInput(formState.message);

    // 3. Rigid Front-End Validation
    if (!name || !email || !message) {
      triggerToast("error", "All fields are required.");
      return;
    }
    if (name.length < 2) {
      triggerToast("error", "Name must be at least 2 characters long.");
      return;
    }
    if (!validateEmail(email)) {
      triggerToast("error", "Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      triggerToast("error", "Message must be at least 10 characters long.");
      return;
    }

    // Prevent duplicate submissions and trigger loading state
    setIsSubmitting(true);
    setFormStatus({ type: "info", text: "Sending Message..." });

    try {
      const maskKey = (key) => {
        if (!key) return "Missing";
        const trimmed = key.trim();
        if (trimmed.length <= 10) return `${trimmed.substring(0, 3)}***`;
        return `${trimmed.substring(0, 10)}***`;
      };
      console.log("Service ID:", maskKey(import.meta.env.VITE_EMAILJS_SERVICE_ID));
      console.log("Template ID:", maskKey(import.meta.env.VITE_EMAILJS_TEMPLATE_ID));
      console.log("Public Key:", maskKey(import.meta.env.VITE_EMAILJS_PUBLIC_KEY));

      const templateParams = {
        name,
        email,
        message,
        from_name: name,
        from_email: email,
        reply_to: email
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()
      );

      if (response.status === 200 || response.text === "OK") {
        setIsSubmitting(false);
        setFormStatus({
          type: "success",
          text: "Message sent successfully. I will get back to you soon."
        });
        
        // Success Toast Notification
        triggerToast("success", "Message sent successfully. I will get back to you soon.");
        
        localStorage.setItem("last_contact_submission_time", Date.now().toString());
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus({ type: null, text: "" }), 6000);
      } else {
        throw new Error("EmailJS response status was not 200 OK");
      }
    } catch (err) {
      console.log("EmailJS Error:", err);
      console.log("Status:", err ? err.status : "undefined");
      console.log("Text:", err ? err.text : "undefined");
      setIsSubmitting(false);
      setFormStatus({
        type: "error",
        text: "Failed to send message. Please try again later."
      });
      
      // Connection Error Toast
      triggerToast("error", "Failed to send message. Please try again later.");
      console.error("EmailJS Transmission Failure:", err);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-900 scroll-mt-16 relative" aria-label="Contact Section">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <div className="font-mono text-xs text-cyber-blue tracking-widest uppercase flex items-center gap-1.5 select-none">
            <Send className="w-4 h-4" /> [SECTION: CONTACT]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-orbitron text-white tracking-tight">LET'S CONNECT</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-blue to-transparent" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Availability Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-5">
            <div className="space-y-5 relative">
              
              {/* Email Direct Contact Card */}
              <div className="glass-panel p-5 rounded border border-cyber-blue/15 bg-slate-950/20 space-y-3 cyber-corners relative">
                <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-widest select-none">// Direct Email</span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-cyber-blue shadow-[inset_0_1px_3px_rgba(0,240,255,0.02)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="text-sm font-bold text-white hover:text-cyber-blue transition-colors font-mono block truncate select-all"
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyber-blue hover:text-cyber-blue hover:scale-105 active:scale-95 rounded transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyber-blue/30"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email address to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400 animate-pulse" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Availability Card */}
              <div className="glass-panel p-5 rounded border border-cyber-blue/15 bg-slate-950/20 text-left space-y-4 cyber-corners">
                <h4 className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2 select-none">
                  <Clock className="w-4 h-4 text-cyber-blue" /> Availability
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-1">Open To</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Internships", "Freelance Projects", "Full-Time Opportunities"].map((opt) => (
                        <span key={opt} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-slate-300 font-sans text-[11px] cursor-default">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-0.5">Response Time</span>
                    <span className="text-emerald-400 font-bold font-orbitron tracking-tight">Usually within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Channels buttons */}
              <div className="space-y-3 font-mono text-xs">
                <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-widest pl-1 select-none">// Social Channels</span>
                
                {/* LinkedIn */}
                <a
                  href={portfolioData.personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded border border-slate-900 hover:border-cyber-blue/45 bg-slate-950/50 hover:bg-cyber-blue/5 hover:scale-[1.01] active:scale-[0.99] transition-all group focus:ring-1 focus:ring-cyber-blue/30"
                  aria-label="Open LinkedIn Profile"
                >
                  <span className="flex items-center gap-2.5 text-slate-300 group-hover:text-white font-sans text-xs font-semibold">
                    <LinkedinIcon className="w-4.5 h-4.5 text-cyber-blue" />
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-slate-600 group-hover:text-cyber-blue font-bold flex items-center gap-1">
                    CONNECT <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyber-blue" />
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded border border-slate-900 hover:border-cyber-blue/45 bg-slate-950/50 hover:bg-cyber-blue/5 hover:scale-[1.01] active:scale-[0.99] transition-all group focus:ring-1 focus:ring-cyber-blue/30"
                  aria-label="Open GitHub Developer Profile"
                >
                  <span className="flex items-center gap-2.5 text-slate-300 group-hover:text-white font-sans text-xs font-semibold">
                    <GithubIcon className="w-4.5 h-4.5 text-slate-200" />
                    GitHub
                  </span>
                  <span className="text-[10px] text-slate-600 group-hover:text-cyber-blue font-bold flex items-center gap-1">
                    EXPLORE <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyber-blue" />
                  </span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 rounded-lg border border-cyber-blue/15 bg-slate-950/20 text-left relative cyber-corners shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-5 font-mono text-xs select-none">
                <span className="text-cyber-blue font-bold tracking-wider uppercase">Send Me a Message</span>
                <span className="text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1"><Sparkles className="w-3 h-3 text-cyan-400" /> DIRECT_INBOX</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest select-none">Name</label>
                    <input
                      id="form-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      disabled={isSubmitting}
                      placeholder="Your Name"
                      required
                      className="w-full bg-slate-950/80 border border-slate-900 focus:border-cyber-blue/60 focus:ring-1 focus:ring-cyber-blue/30 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none hover:border-slate-800 transition-all font-mono"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="form-email" className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest select-none">Email</label>
                    <input
                      id="form-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      disabled={isSubmitting}
                      placeholder="your.email@example.com"
                      required
                      className="w-full bg-slate-950/80 border border-slate-900 focus:border-cyber-blue/60 focus:ring-1 focus:ring-cyber-blue/30 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none hover:border-slate-800 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label htmlFor="form-message" className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest select-none">Message</label>
                  <textarea
                    id="form-message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="Tell me about your project, opportunity, or collaboration idea..."
                    required
                    rows={4}
                    className="w-full bg-slate-950/80 border border-slate-900 focus:border-cyber-blue/60 focus:ring-1 focus:ring-cyber-blue/30 rounded p-3 text-xs text-white placeholder-slate-600 focus:outline-none hover:border-slate-800 transition-all font-mono resize-none"
                  />
                </div>

                {/* Status feedback block */}
                {formStatus.text && (
                  <div
                    className={`p-3.5 rounded border text-[10px] font-mono flex items-center gap-2 ${
                      formStatus.type === "success"
                        ? "bg-emerald-950/30 border-emerald-900/40 text-emerald-400 shadow-[inset_0_1px_3px_rgba(16,185,129,0.03)] animate-pulse"
                        : formStatus.type === "error"
                        ? "bg-rose-950/30 border-rose-900/40 text-rose-400 shadow-[inset_0_1px_3px_rgba(244,63,94,0.03)]"
                        : "bg-slate-900/50 border-slate-800 text-cyan-400"
                    }`}
                    role="alert"
                  >
                    {formStatus.type === "error" ? (
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : formStatus.type === "success" ? (
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse shrink-0" />
                    )}
                    <span>{formStatus.text}</span>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-cyber-blue hover:bg-white text-cyber-dark hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.005] active:scale-[0.99] rounded font-mono text-xs tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cyber-dark border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Success or Error Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-950 border text-xs font-mono px-4 py-3 rounded shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 cyber-corners ${
          toast.type === "success" 
            ? "border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]" 
            : "border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
        }`}>
          {toast.type === "success" ? (
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  );
}
