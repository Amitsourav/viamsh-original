'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, User, Building2, BarChart3 } from 'lucide-react';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

interface FormData {
  // Step 1 — Lead capture
  contact_person: string;
  phone: string;
  state: string;
  // Step 2 — Business details
  business_name: string;
  email: string;
  gst_number: string;
  business_address: string;
  current_portfolio: string;
  // Step 3 — Capacity & preferences
  warehouse_capacity: string;
  expected_monthly_volume: string;
  investment_capacity: string;
  notes: string;
}

const initialFormData: FormData = {
  contact_person: '',
  phone: '',
  state: '',
  business_name: '',
  email: '',
  gst_number: '',
  business_address: '',
  current_portfolio: '',
  warehouse_capacity: '',
  expected_monthly_volume: '',
  investment_capacity: '',
  notes: '',
};

interface FormErrors {
  [key: string]: string;
}

const steps = [
  { number: 1, title: 'Contact', desc: 'Name & phone', icon: User },
  { number: 2, title: 'Business', desc: 'Company info', icon: Building2 },
  { number: 3, title: 'Capacity', desc: 'Scale & budget', icon: BarChart3 },
];

export default function DistributorForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      if (!formData.contact_person.trim()) newErrors.contact_person = 'Your name is required';
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = 'Enter a valid 10-digit Indian phone number';
      }
      if (!formData.state) newErrors.state = 'State is required';
    }

    if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email address';
      }
      if (formData.gst_number && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gst_number)) {
        newErrors.gst_number = 'Enter a valid GST number';
      }
    }

    // Step 3 has no required fields

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const captureLeadData = async () => {
    // Send step 1 data immediately to capture the lead
    // Replace with actual API call (e.g., Supabase, webhook, etc.)
    console.log('Lead captured:', {
      contact_person: formData.contact_person,
      phone: formData.phone,
      state: formData.state,
      captured_at: new Date().toISOString(),
    });
    setLeadCaptured(true);
  };

  const handleNext = async () => {
    if (!validateStep(step)) return;

    // Capture lead on step 1 completion
    if (step === 1 && !leadCaptured) {
      await captureLeadData();
    }

    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);

    // Submit full form data
    // Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
    setStep(1);
    setLeadCaptured(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-8 sm:p-10 text-center shadow-lg border border-[#E5E7EB]">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFDF5]">
          <CheckCircle2 className="h-8 w-8 text-[#059669]" />
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A1A]">
          Application Submitted!
        </h3>
        <p className="mt-3 text-[#6B7280] max-w-md mx-auto">
          Thank you for your interest in partnering with Viamsh FMCG. Our distribution
          team will review your application and contact you within <span className="font-semibold text-[#6366F1]">48 hours</span>.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-xl bg-[#6366F1] px-6 py-2.5 font-semibold text-white hover:bg-[#4F46E5] transition-colors cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  const inputClasses = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
        : 'border-[#E5E7EB] bg-[#FAFAFA] focus:border-[#6366F1] focus:ring-[#6366F1] focus:bg-white'
    }`;

  return (
    <div className="rounded-2xl bg-white shadow-lg border border-[#E5E7EB] overflow-hidden">
      {/* Step indicator */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-0">
        {/* Step progress bar */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, idx) => (
            <div key={s.number} className="flex items-center gap-2 flex-1">
              <button
                type="button"
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  step === s.number
                    ? 'bg-[#EEF2FF] ring-1 ring-[#6366F1]/20'
                    : step > s.number
                      ? 'bg-[#ECFDF5]'
                      : 'bg-[#F9FAFB]'
                }`}
                onClick={() => {
                  if (s.number < step) setStep(s.number);
                }}
                disabled={s.number > step}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-300 ${
                    step > s.number
                      ? 'bg-[#059669] text-white'
                      : step === s.number
                        ? 'bg-[#6366F1] text-white'
                        : 'bg-[#E5E7EB] text-[#9CA3AF]'
                  }`}
                >
                  {step > s.number ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    s.number
                  )}
                </div>
                <div className="hidden md:block text-left">
                  <p className={`text-xs font-bold leading-tight ${
                    step >= s.number ? 'text-[#1A1A1A]' : 'text-[#9CA3AF]'
                  }`}>
                    {s.title}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] leading-tight">{s.desc}</p>
                </div>
              </button>
              {idx < steps.length - 1 && (
                <div className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                  step > s.number ? 'bg-[#059669]' : 'bg-[#E5E7EB]'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile step label */}
        <div className="md:hidden text-center mb-4">
          <p className="text-sm font-bold text-[#1A1A1A]">
            Step {step} of 3: {steps[step - 1].title}
          </p>
        </div>
      </div>

      {/* Form content */}
      <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-6 sm:pb-8">
        {/* ─── Step 1: Lead Capture ─── */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="bg-[#EEF2FF] rounded-xl p-4 mb-6">
              <p className="text-sm text-[#6366F1] font-medium">
                Just 3 fields to get started. We&apos;ll contact you within 48 hours.
              </p>
            </div>

            <div>
              <label htmlFor="contact_person" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact_person"
                name="contact_person"
                value={formData.contact_person}
                onChange={handleChange}
                className={inputClasses('contact_person')}
                placeholder="Enter your full name"
                autoFocus
              />
              {errors.contact_person && <p className="mt-1 text-xs text-red-500">{errors.contact_person}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] font-medium">+91</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClasses('phone')} pl-12`}
                  placeholder="9296290854"
                  maxLength={10}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Location (State) <span className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={inputClasses('state')}
              >
                <option value="">Select your state</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
            </div>
          </div>
        )}

        {/* ─── Step 2: Business Details ─── */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="bg-[#ECFDF5] rounded-xl p-4 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
              <p className="text-sm text-[#059669] font-medium">
                Great! Your details are saved. Now tell us about your business.
              </p>
            </div>

            <div>
              <label htmlFor="business_name" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Business / Company Name
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className={inputClasses('business_name')}
                placeholder="Your business or company name"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses('email')}
                  placeholder="you@business.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="gst_number" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  GST Number <span className="text-xs text-[#9CA3AF] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="gst_number"
                  name="gst_number"
                  value={formData.gst_number}
                  onChange={handleChange}
                  className={inputClasses('gst_number')}
                  placeholder="22AAAAA0000A1Z5"
                />
                {errors.gst_number && <p className="mt-1 text-xs text-red-500">{errors.gst_number}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="business_address" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Business Address <span className="text-xs text-[#9CA3AF] font-normal">(optional)</span>
              </label>
              <textarea
                id="business_address"
                name="business_address"
                value={formData.business_address}
                onChange={handleChange}
                rows={2}
                className={inputClasses('business_address')}
                placeholder="Full business address"
              />
            </div>

            <div>
              <label htmlFor="current_portfolio" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Current Product Portfolio <span className="text-xs text-[#9CA3AF] font-normal">(optional)</span>
              </label>
              <textarea
                id="current_portfolio"
                name="current_portfolio"
                value={formData.current_portfolio}
                onChange={handleChange}
                rows={2}
                className={inputClasses('current_portfolio')}
                placeholder="Brands/products you currently distribute (if any)"
              />
            </div>
          </div>
        )}

        {/* ─── Step 3: Capacity & Preferences ─── */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="bg-[#EEF2FF] rounded-xl p-4 mb-6">
              <p className="text-sm text-[#6366F1] font-medium">
                Almost done! This helps us match the right plan for you. All fields are optional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="warehouse_capacity" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Warehouse / Storage Space
                </label>
                <select
                  id="warehouse_capacity"
                  name="warehouse_capacity"
                  value={formData.warehouse_capacity}
                  onChange={handleChange}
                  className={inputClasses('warehouse_capacity')}
                >
                  <option value="">Select</option>
                  <option value="below-300">Below 300 sq ft</option>
                  <option value="300-500">300 - 500 sq ft</option>
                  <option value="500-1000">500 - 1,000 sq ft</option>
                  <option value="1000-2500">1,000 - 2,500 sq ft</option>
                  <option value="above-2500">Above 2,500 sq ft</option>
                </select>
              </div>

              <div>
                <label htmlFor="investment_capacity" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Investment Capacity
                </label>
                <select
                  id="investment_capacity"
                  name="investment_capacity"
                  value={formData.investment_capacity}
                  onChange={handleChange}
                  className={inputClasses('investment_capacity')}
                >
                  <option value="">Select</option>
                  <option value="below-50k">Below ₹50,000</option>
                  <option value="50k-1lakh">₹50,000 - ₹1 Lakh</option>
                  <option value="1-3lakh">₹1 - 3 Lakhs</option>
                  <option value="3-5lakh">₹3 - 5 Lakhs</option>
                  <option value="above-5lakh">Above ₹5 Lakhs</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="expected_monthly_volume" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Expected Monthly Sales Volume
              </label>
              <select
                id="expected_monthly_volume"
                name="expected_monthly_volume"
                value={formData.expected_monthly_volume}
                onChange={handleChange}
                className={inputClasses('expected_monthly_volume')}
              >
                <option value="">Select</option>
                <option value="below-1lakh">Below ₹1 Lakh</option>
                <option value="1-3lakh">₹1 - 3 Lakhs</option>
                <option value="3-5lakh">₹3 - 5 Lakhs</option>
                <option value="5-10lakh">₹5 - 10 Lakhs</option>
                <option value="above-10lakh">Above ₹10 Lakhs</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-[#374151] mb-1.5">
                Anything else you&apos;d like us to know?
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className={inputClasses('notes')}
                placeholder="Questions, existing retail network size, preferred product categories, etc."
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className={`mt-8 flex items-center ${step > 1 ? 'justify-between' : 'justify-end'}`}>
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#6B7280] hover:text-[#374151] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4F46E5] transition-colors cursor-pointer shadow-sm shadow-[#6366F1]/20"
            >
              {step === 1 ? 'Continue' : 'Next Step'}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#059669] text-white text-sm font-semibold hover:bg-[#047857] transition-colors disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer shadow-sm shadow-[#059669]/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Step 1 skip note */}
        {step === 1 && (
          <p className="mt-4 text-center text-xs text-[#9CA3AF]">
            Takes less than 2 minutes. No fees, no obligations.
          </p>
        )}

        {/* Step 2/3 skip option */}
        {step > 1 && (
          <p className="mt-4 text-center text-xs text-[#9CA3AF]">
            {step === 2 ? 'You can also ' : 'Want to skip? '}
            <button
              type="submit"
              className="text-[#6366F1] font-medium hover:underline cursor-pointer"
              onClick={() => {
                // Clear step-specific errors since they're skipping
                setErrors({});
              }}
            >
              submit now
            </button>
            {' '}and we&apos;ll collect the rest on call.
          </p>
        )}
      </form>
    </div>
  );
}
