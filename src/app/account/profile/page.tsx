'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProfileForm {
  name: string;
  email: string;
  phone: string;
}

interface PasswordForm {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn] = useState(false); // Placeholder - no auth yet

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileForm>({
    name: '',
    email: '',
    phone: '',
  });
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({});
  const [profileSaved, setProfileSaved] = useState(false);

  const [passwordForm, setPasswordForm] = useState<PasswordForm>({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});
  const [passwordSaved, setPasswordSaved] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = 'My Profile | Viamsh FMCG';
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    if (profileErrors[name]) {
      setProfileErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
    if (passwordErrors[name]) {
      setPasswordErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateProfile = (): boolean => {
    const errors: Record<string, string> = {};
    if (!profile.name.trim()) errors.name = 'Name is required';
    if (!profile.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      errors.email = 'Enter a valid email';
    }
    if (profile.phone && !/^[6-9]\d{9}$/.test(profile.phone)) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }
    setProfileErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePassword = (): boolean => {
    const errors: Record<string, string> = {};
    if (!passwordForm.current_password) errors.current_password = 'Current password is required';
    if (!passwordForm.new_password) {
      errors.new_password = 'New password is required';
    } else if (passwordForm.new_password.length < 8) {
      errors.new_password = 'Password must be at least 8 characters';
    }
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }
    setPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProfileSave = () => {
    if (!validateProfile()) return;
    setIsEditing(false);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword()) return;
    setPasswordForm({ current_password: '', new_password: '', confirm_password: '' });
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const inputClasses = (field: string, errors: Record<string, string>) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-brand-green focus:ring-brand-green'
    }`;

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  // Not logged in
  if (!isLoggedIn) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light">
            <svg className="h-10 w-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold text-brand-dark">
            Please Login to View Your Profile
          </h1>
          <p className="mt-2 text-gray-500">
            You need to be logged in to access your profile information, addresses, and account settings.
          </p>
          <Link
            href="/account/login"
            className="mt-6 inline-block rounded-lg bg-brand-green px-8 py-3 font-semibold text-white transition-colors hover:bg-green-800"
          >
            Login to Your Account
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/account/register" className="text-brand-green hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-brand-green-light py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-brand-dark">My Profile</h1>
          <p className="mt-1 text-gray-600">Manage your account information and preferences</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Profile Information */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-brand-dark">
                Profile Information
              </h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm font-medium text-brand-green hover:underline"
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              )}
            </div>

            {profileSaved && (
              <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                Profile updated successfully!
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  disabled={!isEditing}
                  className={`${inputClasses('name', profileErrors)} disabled:bg-gray-50 disabled:text-gray-500`}
                />
                {profileErrors.name && (
                  <p className="mt-1 text-xs text-red-500">{profileErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  disabled={!isEditing}
                  className={`${inputClasses('email', profileErrors)} disabled:bg-gray-50 disabled:text-gray-500`}
                />
                {profileErrors.email && (
                  <p className="mt-1 text-xs text-red-500">{profileErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  disabled={!isEditing}
                  className={`${inputClasses('phone', profileErrors)} disabled:bg-gray-50 disabled:text-gray-500`}
                  placeholder="10-digit mobile number"
                />
                {profileErrors.phone && (
                  <p className="mt-1 text-xs text-red-500">{profileErrors.phone}</p>
                )}
              </div>

              {isEditing && (
                <div className="pt-2">
                  <button
                    onClick={handleProfileSave}
                    className="rounded-lg bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Saved Addresses */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-brand-dark">
                Saved Addresses
              </h2>
              <button className="text-sm font-medium text-brand-green hover:underline">
                Add New
              </button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="mt-3 font-medium text-gray-500">No addresses saved yet</p>
              <p className="mt-1 text-sm text-gray-400">
                Add a shipping address for faster checkout.
              </p>
            </div>
          </div>

          {/* Change Password */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-heading text-xl font-semibold text-brand-dark">
              Change Password
            </h2>

            {passwordSaved && (
              <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                Password changed successfully!
              </div>
            )}

            <form onSubmit={handlePasswordSave} className="mt-6 space-y-4">
              <div>
                <label htmlFor="current_password" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current_password"
                  name="current_password"
                  value={passwordForm.current_password}
                  onChange={handlePasswordChange}
                  className={inputClasses('current_password', passwordErrors)}
                />
                {passwordErrors.current_password && (
                  <p className="mt-1 text-xs text-red-500">{passwordErrors.current_password}</p>
                )}
              </div>

              <div>
                <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="new_password"
                  name="new_password"
                  value={passwordForm.new_password}
                  onChange={handlePasswordChange}
                  className={inputClasses('new_password', passwordErrors)}
                />
                {passwordErrors.new_password && (
                  <p className="mt-1 text-xs text-red-500">{passwordErrors.new_password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={passwordForm.confirm_password}
                  onChange={handlePasswordChange}
                  className={inputClasses('confirm_password', passwordErrors)}
                />
                {passwordErrors.confirm_password && (
                  <p className="mt-1 text-xs text-red-500">{passwordErrors.confirm_password}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-lg bg-brand-dark px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
