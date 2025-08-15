import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  attachment: File | null;
  message: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  attachment: null,
  message: "",
  agree: false,
};

const topics = [
  "General Inquiry",
  "Feedback",
  "Partnership",
  "Support",
  "Other"
];

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [submitting] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.topic) errs.topic = "Please select a topic.";
    if (!form.message.trim()) errs.message = "Message is required.";
    if (!form.agree) errs.agree = "You must agree to the processing of your data.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let fieldValue: any = value;
    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    } else if (type === "file") {
      fieldValue = (e.target as HTMLInputElement).files?.[0] ?? null;
    }
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // Construct mailto link
    const subject = encodeURIComponent(`Contact Form: ${form.topic || 'No Topic'}`);
    const body = encodeURIComponent(
      `First Name: ${form.firstName}\n` +
      `Last Name: ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Topic: ${form.topic}\n` +
      `Message: ${form.message}\n` +
      `Agreed to data processing: ${form.agree ? 'Yes' : 'No'}`
    );
    window.location.href = `mailto:hello@mindplayer.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#fcfaff] px-2 py-12"
      style={{ minHeight: '100vh', width: '100%' }}
    >
      <div
        className="w-full max-w-4xl mx-auto flex flex-col items-center"
        style={{ gap: 0, opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3" style={{ color: '#181028' }}>Contact Us</h1>
        <p className="text-center text-base text-[#222] opacity-80 mb-8">Have a question, feedback, or partnership idea? We’d love to to hear from you.</p>
        <form
          className="flex flex-col items-center w-full gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            style={{ width: 768, opacity: 1 }}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName" className="block text-sm font-medium text-[#222]">First name (required)</Label>
              <Input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                placeholder=""
                aria-invalid={!!errors.firstName}
                style={{ width: 372, height: 48, borderRadius: 12, background: '#0D0A090D', opacity: 1 }}
              />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName" className="block text-sm font-medium text-[#222]">Last name (optional)</Label>
              <Input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                placeholder=""
                style={{ width: 372, height: 48, borderRadius: 12, background: '#0D0A090D', opacity: 1 }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="block text-sm font-medium text-[#222]">Email (required)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder=""
                aria-invalid={!!errors.email}
                style={{ width: 372, height: 48, borderRadius: 12, background: '#0D0A090D', opacity: 1 }}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="block text-sm font-medium text-[#222]">Phone number (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                placeholder=""
                style={{ width: 372, height: 48, borderRadius: 12, background: '#0D0A090D', opacity: 1 }}
              />
            </div>
          </div>
          <div style={{ width: 768, margin: '0 auto' }} className="flex flex-col gap-2">
            <Label htmlFor="topic">Choose a topic (required)</Label>
            <select
              id="topic"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="mt-1 w-full border border-[#e5e5e5] px-3 py-2 text-base text-[#222] focus:border-[#DB91EF] focus:ring-2 focus:ring-[#DB91EF]/30 outline-none"
              style={{ borderRadius: 12, background: '#0D0A090D', height: 48, opacity: 1 }}
              aria-invalid={!!errors.topic}
            >
              <option value="">Select one...</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.topic && <p className="text-xs text-red-500 mt-1">{errors.topic}</p>}
          </div>
          <div style={{ width: 768, margin: '0 auto' }} className="flex flex-col gap-2">
            <Label htmlFor="attachment">Attachment (optional)</Label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                id="attachment"
                name="attachment"
                type="file"
                onChange={handleChange}
                className="sr-only"
              />
              <label
                htmlFor="attachment"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  height: 96,
                  background: '#0D0A090D',
                  borderRadius: 12,
                  padding: '18px 20px',
                  cursor: 'pointer',
                  border: 'none',
                  fontWeight: 400,
                  fontSize: 20,
                  color: '#888',
                  position: 'relative',
                }}
              >
                <span style={{ flex: 1, textAlign: 'left', color: '#888' }}>
                  {form.attachment ? form.attachment.name : 'Upload your file here...'}
                </span>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)' }}>
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#bdbdbd"/>
                  <path d="M12 8v6m0 0l-2-2m2 2l2-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </label>
            </div>
          </div>
          <div style={{ width: 768, margin: '0 auto' }} className="flex flex-col gap-2">
            <Label htmlFor="message">Message (required)</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message..."
              aria-invalid={!!errors.message}
              className="mt-1"
              style={{ width: 768, height: 180, borderRadius: 12, background: '#0D0A090D', opacity: 1, padding: 12 }}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center gap-2" style={{ width: 768, margin: '0 auto' }}>
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="accent-[#DB91EF] w-4 h-4 rounded border border-[#e5e5e5]"
            />
            <Label htmlFor="agree" className="text-xs text-[#222] opacity-80">I agree to the processing of my data for the purpose of this request.</Label>
          </div>
          {errors.agree && <p className="text-xs text-red-500 mt-1">{errors.agree}</p>}
          <div className="flex justify-center pt-2" style={{ width: 768, margin: '0 auto' }}>
            <Button
              type="submit"
              className="bg-[#DCD3F7] hover:bg-[#DCD3F7] text-black px-8 py-3 rounded-full font-semibold text-base shadow-md transition-colors duration-200"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-10 max-w-md w-full text-center">
            <h2 className="text-xl font-bold mb-2 text-[#181028]">Thanks for Reaching Out!</h2>
            <p className="mb-6 text-[#222] opacity-90">Your query has been submitted. We’ll get back to you within 2 business days.</p>
            <Button
              className="bg-[#DCD3F7] hover:bg-[#DCD3F7] text-black px-8 py-3 rounded-full font-semibold text-base shadow-md transition-colors duration-200"
              onClick={() => setSuccess(false)}
            >
              Go Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
