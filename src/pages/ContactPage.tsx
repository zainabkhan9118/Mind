import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      const data = new FormData();
      data.append("firstName", form.firstName);
      data.append("lastName", form.lastName);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("topic", form.topic);
      data.append("message", form.message);
      if (form.attachment) data.append("attachment", form.attachment);

      const res = await fetch("https://formspree.io/f/xdabgvyk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-2 py-12 lg:pt-6 xl:pt-4 2xl:pt-2"
      style={{ minHeight: '100vh', width: '100%' }}
    >
      <div
        className="w-full max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto flex flex-col items-center mt-0 lg:mt-8 xl:mt-6 2xl:mt-4"
        style={{ gap: 0, opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-center mb-3 2xl:mb-4 3xl:mb-5 mt-4 lg:mt-2 text-white">Contact Us</h1>
        <p className="text-center text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mb-8 2xl:mb-8 3xl:mb-10">Have a question, feedback, or partnership idea? We'd love to to hear from you.</p>
        <form
          className="flex flex-col items-center w-full gap-6 2xl:gap-8 3xl:gap-10"
          onSubmit={handleSubmit}
          noValidate
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl"
          >
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="firstName" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">First name (required)</Label>
              <Input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                placeholder=""
                aria-invalid={!!errors.firstName}
                className="w-full h-12 2xl:h-14 3xl:h-16 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-mind-violet focus:ring-mind-violet/30"
              />
              {errors.firstName && <p className="text-xs 2xl:text-sm text-red-400">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="lastName" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Last name (optional)</Label>
              <Input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                placeholder=""
                className="w-full h-12 2xl:h-14 3xl:h-16 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-mind-violet focus:ring-mind-violet/30"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="email" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Email (required)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder=""
                aria-invalid={!!errors.email}
                className="w-full h-12 2xl:h-14 3xl:h-16 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-mind-violet focus:ring-mind-violet/30"
              />
              {errors.email && <p className="text-xs 2xl:text-sm text-red-400">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="phone" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Phone number (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                placeholder=""
                className="w-full h-12 2xl:h-14 3xl:h-16 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-mind-violet focus:ring-mind-violet/30"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <Label htmlFor="topic" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Choose a topic (required)</Label>
            <select
              id="topic"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className={`mt-1 w-full border border-white/10 px-3 py-2 text-base 2xl:text-lg 3xl:text-xl focus:border-mind-violet focus:ring-2 focus:ring-mind-violet/30 outline-none rounded-xl bg-white/5 h-12 2xl:h-14 3xl:h-16 ${form.topic ? 'text-white' : 'text-gray-400'}`}
              aria-invalid={!!errors.topic}
            >
              <option value="">Select one...</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.topic && <p className="text-xs 2xl:text-sm text-red-400 mt-1">{errors.topic}</p>}
          </div>
          <div className="flex flex-col gap-2 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <Label htmlFor="attachment" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Attachment (optional)</Label>
            <div className="relative w-full">
              <input
                id="attachment"
                name="attachment"
                type="file"
                onChange={handleChange}
                className="sr-only"
              />
              <label
                htmlFor="attachment"
                className="flex items-center w-full h-24 2xl:h-28 3xl:h-32 bg-white/5 rounded-xl px-5 cursor-pointer border border-white/10 font-normal text-lg 2xl:text-xl 3xl:text-2xl text-gray-500 relative hover:bg-white/8 transition-colors"
              >
                <span className="flex-1 text-left text-gray-500">
                  {form.attachment ? form.attachment.name : 'Upload your file here...'}
                </span>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-6 top-1/2 -translate-y-1/2">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#6D5FF7"/>
                  <path d="M12 8v6m0 0l-2-2m2 2l2-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <Label htmlFor="message" className="block text-sm 2xl:text-base 3xl:text-lg font-medium text-gray-300">Message (required)</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message..."
              aria-invalid={!!errors.message}
              className="mt-1 w-full rounded-xl bg-white/5 border-white/10 p-3 text-base 2xl:text-lg 3xl:text-xl text-white placeholder:text-gray-500 focus:border-mind-violet focus:ring-mind-violet/30"
              style={{ minHeight: 120 }}
            />
            {errors.message && <p className="text-xs 2xl:text-sm text-red-400 mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center gap-2 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="accent-mind-violet w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 rounded border border-white/20"
            />
            <Label htmlFor="agree" className="text-xs 2xl:text-sm 3xl:text-base text-gray-400">I agree to the processing of my data for the purpose of this request.</Label>
          </div>
          {errors.agree && <p className="text-xs 2xl:text-sm text-red-400 mt-1 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">{errors.agree}</p>}
          <div className="flex flex-col items-center gap-2 pt-2 2xl:pt-4 w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <button
              type="submit"
              className="text-white px-8 py-3 2xl:px-10 2xl:py-4 3xl:px-12 3xl:py-5 rounded-full font-semibold text-base 2xl:text-lg 3xl:text-xl transition-all duration-200 w-full sm:w-auto disabled:opacity-60"
              style={{
                background: 'transparent',
                border: '1px solid rgba(109, 95, 247, 0.8)',
                boxShadow: '0 0 14px rgba(109, 95, 247, 0.6), inset 0 0 12px rgba(109, 95, 247, 0.1)',
              }}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
            {submitError && <p className="text-xs 2xl:text-sm text-red-400">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass-card-strong rounded-2xl shadow-xl px-8 py-10 max-w-md 2xl:max-w-lg 3xl:max-w-xl w-full text-center">
            <h2 className="text-xl 2xl:text-2xl 3xl:text-3xl font-bold mb-2 text-white">Thanks for Reaching Out!</h2>
            <p className="mb-6 text-gray-400 text-base 2xl:text-lg 3xl:text-xl">Your query has been submitted. We'll get back to you within 2 business days.</p>
            <button
              className="bg-mind-violet hover:bg-mind-violet-light text-white px-8 py-3 2xl:px-10 2xl:py-4 3xl:px-12 3xl:py-5 rounded-full font-semibold text-base 2xl:text-lg 3xl:text-xl shadow-md transition-colors duration-200"
              onClick={() => setSuccess(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
