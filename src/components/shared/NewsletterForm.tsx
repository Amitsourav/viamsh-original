'use client';

import { useState, type FormEvent } from 'react';

interface NewsletterFormProps {
  className?: string;
  onSubmit?: (email: string) => Promise<void>;
}

export default function NewsletterForm({ className = '', onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle' && status !== 'loading') {
              setStatus('idle');
              setMessage('');
            }
          }}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1A1A2E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/40 focus:border-[#2E7D32] transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-lg bg-[#2E7D32] text-white font-semibold hover:bg-[#256B29] disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${
            status === 'success' ? 'text-[#2E7D32]' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
