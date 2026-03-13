'use client';

import { useState } from 'react';
import Link from 'next/link';

type LoginTab = 'email' | 'otp';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<LoginTab>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (otpSent && (!otp.trim() || otp.length !== 6)) {
      newErrors.otp = 'Enter a valid 6-digit OTP';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Mock: redirect or show success
  };

  const handleOtpLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateOtp()) return;
    setIsSubmitting(true);

    if (!otpSent) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setOtpSent(true);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Mock: redirect or show success
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-brand-green focus:ring-brand-green'
    }`;

  return (
    <>
      <title>Login | Viamsh FMCG</title>

      <section className="flex min-h-[80vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            {/* Logo / Title */}
            <div className="text-center">
              <h1 className="font-heading text-2xl font-bold text-brand-dark">
                Welcome Back
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Sign in to your Viamsh FMCG account
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => {
                  setActiveTab('email');
                  setErrors({});
                }}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  activeTab === 'email'
                    ? 'bg-white text-brand-dark shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Email & Password
              </button>
              <button
                onClick={() => {
                  setActiveTab('otp');
                  setErrors({});
                  setOtpSent(false);
                }}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
                  activeTab === 'otp'
                    ? 'bg-white text-brand-dark shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Login with OTP
              </button>
            </div>

            {/* Email Login Form */}
            {activeTab === 'email' && (
              <form onSubmit={handleEmailLogin} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => { const n = {...p}; delete n.email; return n; });
                    }}
                    className={inputClasses('email')}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link href="/account/forgot-password" className="text-xs text-brand-green hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((p) => { const n = {...p}; delete n.password; return n; });
                    }}
                    className={inputClasses('password')}
                    placeholder="Your password"
                  />
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-brand-green py-2.5 font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            )}

            {/* OTP Login Form */}
            {activeTab === 'otp' && (
              <form onSubmit={handleOtpLogin} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="login-phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="login-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                      if (errors.phone) setErrors((p) => { const n = {...p}; delete n.phone; return n; });
                    }}
                    className={inputClasses('phone')}
                    placeholder="10-digit phone number"
                    disabled={otpSent}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                {otpSent && (
                  <div>
                    <label htmlFor="login-otp" className="block text-sm font-medium text-gray-700">
                      OTP
                    </label>
                    <input
                      type="text"
                      id="login-otp"
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                        if (errors.otp) setErrors((p) => { const n = {...p}; delete n.otp; return n; });
                      }}
                      className={inputClasses('otp')}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />
                    {errors.otp && <p className="mt-1 text-xs text-red-500">{errors.otp}</p>}
                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setOtp('');
                      }}
                      className="mt-1 text-xs text-brand-green hover:underline"
                    >
                      Change phone number
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-brand-green py-2.5 font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? otpSent
                      ? 'Verifying...'
                      : 'Sending OTP...'
                    : otpSent
                      ? 'Verify & Sign In'
                      : 'Send OTP'}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Login with Google
            </button>

            {/* Register Link */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="/account/register" className="font-medium text-brand-green hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
