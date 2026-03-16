'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Link2, Mail, Share2, ChevronRight, Phone, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { blogPosts, categoryConfig } from '@/data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reading progress bar + floating CTAs
  const handleScroll = useCallback(() => {
    setShowCta(window.scrollY > 300);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setReadProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Article Not Found</h1>
        <p className="mt-2 text-[#6B7280]">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4F46E5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related: same category first, then fill with other posts
  const sameCategoryPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id);
  const otherPosts = blogPosts.filter((p) => p.category !== post.category && p.id !== post.id);
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 4);

  // Previous / Next post
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const catConfig = categoryConfig[post.category];

  return (
    <>
      <title>{`${post.title} | Viamsh FMCG Blog`}</title>
      <meta name="description" content={post.excerpt} />

      {/* ═══ READING PROGRESS BAR ═══ */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ═══ FLOATING CTA BUTTONS — WhatsApp + Call ═══ */}
      <AnimatePresence>
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919296290854?text=Hi%20Viamsh%2C%20I%20have%20a%20query%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1A1A2E] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us
              </span>
            </a>

            {/* Call */}
            <a
              href="tel:+919296290854"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/30 hover:scale-110 transition-transform"
              aria-label="Call us"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1A1A2E] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Call now
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ HEADER — Breadcrumb + Title + Meta ═══ */}
      <section className="pt-8 pb-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/blog" className="text-[#9CA3AF] hover:text-[#6366F1] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#D1D5DB]" />
              <span className={`${catConfig.color} font-medium`}>{post.category}</span>
            </nav>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={0.05}>
            <h1
              className="mt-8 text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight max-w-4xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              {post.title}
            </h1>
          </AnimatedSection>

          {/* Excerpt */}
          <AnimatedSection delay={0.1}>
            <p className="mt-5 text-lg text-[#64748B] leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </AnimatedSection>

          {/* Author + Meta */}
          <AnimatedSection delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-bold ring-2 ring-white shadow-sm">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{post.author.name}</p>
                  <p className="text-xs text-[#94A3B8]">{post.author.role}</p>
                </div>
              </div>
              <span className="hidden sm:block text-[#E2E8F0]">&middot;</span>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <span>
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} read
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Divider */}
          <div className="mt-8 h-px bg-[#F1F5F9]" />
        </div>
      </section>

      {/* ═══ COVER GRADIENT ═══ */}
      <section className="pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div
              className="w-full aspect-[2.4/1] rounded-2xl overflow-hidden relative"
              style={{
                background: `linear-gradient(135deg, ${post.coverGradient[0]}, ${post.coverGradient[1]})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-32 h-20 opacity-15">
                  <rect x="20" y="15" width="160" height="90" rx="12" fill="white" />
                  <rect x="35" y="35" width="90" height="8" rx="4" fill="white" fillOpacity="0.5" />
                  <rect x="35" y="50" width="60" height="8" rx="4" fill="white" fillOpacity="0.3" />
                  <rect x="35" y="65" width="75" height="8" rx="4" fill="white" fillOpacity="0.3" />
                  <rect x="35" y="80" width="45" height="8" rx="4" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ ARTICLE CONTENT — 2-column: content + sidebar ═══ */}
      <section className="pt-12 pb-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <AnimatedSection delay={0.1}>
              <article
                className="
                  [&>p]:text-[#374151] [&>p]:text-[17px] [&>p]:leading-[1.8] [&>p]:mb-6

                  [&>h2]:text-[24px] [&>h2]:sm:text-[28px] [&>h2]:font-extrabold [&>h2]:text-[#0F172A] [&>h2]:leading-[1.2] [&>h2]:mt-14 [&>h2]:mb-5 [&>h2]:tracking-tight

                  [&>h3]:text-[20px] [&>h3]:font-bold [&>h3]:text-[#1E293B] [&>h3]:leading-[1.3] [&>h3]:mt-10 [&>h3]:mb-4

                  [&_strong]:text-[#0F172A] [&_strong]:font-semibold

                  [&>ul]:my-6 [&>ul]:space-y-3
                  [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li]:text-[17px] [&>ul>li]:leading-[1.7] [&>ul>li]:text-[#374151]
                  [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[11px] [&>ul>li]:before:w-[6px] [&>ul>li]:before:h-[6px] [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-[#6366F1]

                  [&_a]:text-[#6366F1] [&_a]:underline [&_a]:decoration-[#6366F1]/30 [&_a]:underline-offset-[3px] [&_a]:decoration-[1.5px] hover:[&_a]:decoration-[#6366F1]
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Inline Newsletter CTA */}
              <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#E0E7FF]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6366F1] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">Enjoyed this article?</h3>
                    <p className="mt-1 text-sm text-[#64748B] leading-relaxed">
                      Get more cleaning tips, product guides, and home care insights. Join 2,000+ readers.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-2">
                      <Link
                        href="/shop"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4F46E5] transition-colors"
                      >
                        Explore Our Products
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="https://wa.me/919296290854?text=Hi%20Viamsh%2C%20I%20read%20your%20blog%20and%20want%20to%20know%20more"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#E0E7FF] text-sm font-semibold text-[#374151] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors"
                      >
                        <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Sidebar — sticky */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {/* Share */}
                <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFC] p-5">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Share this article</p>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-[#374151] bg-white border border-[#E5E7EB] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors cursor-pointer"
                  >
                    <Link2 className="w-4 h-4" />
                    {copied ? 'Link Copied!' : 'Copy Link'}
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ')}${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full mt-2 px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Share on WhatsApp
                  </a>
                </div>

                {/* Tags */}
                <div className="rounded-xl border border-[#F1F5F9] bg-[#FAFBFC] p-5">
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-[#64748B]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-5 text-white">
                  <h3 className="text-sm font-bold">Need Cleaning Products?</h3>
                  <p className="mt-1.5 text-xs text-white/70 leading-relaxed">
                    Get Orma Detergent and premium cleaning products delivered to your doorstep.
                  </p>
                  <Link
                    href="/shop"
                    className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white text-[#6366F1] text-sm font-bold hover:bg-[#EEF2FF] transition-colors"
                  >
                    Shop Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ TAGS — mobile only ═══ */}
      <section className="pt-8 pb-0 bg-white lg:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-[#F1F5F9] mb-6" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F1F5F9] text-xs font-medium text-[#64748B]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUTHOR BOX ═══ */}
      <section className="pt-10 pb-0 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FAFBFC] border border-[#F1F5F9] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-lg font-bold shrink-0 shadow-lg shadow-[#6366F1]/20">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Written by</p>
                  <p className="mt-0.5 text-lg font-bold text-[#0F172A]">{post.author.name}</p>
                  <p className="text-sm text-[#64748B]">{post.author.role} at Viamsh FMCG</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ BOTTOM CTAs ═══ */}
      <section className="pt-14 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-[#F1F5F9] mb-14" />

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0}>
              <div>
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-[#6366F1]" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">Stay Updated</h3>
                <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  Get cleaning tips & product updates in your inbox.
                </p>
                <Link href="/blog" className="mt-3 inline-block text-xs font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors">
                  Subscribe
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#F0FDF4] flex items-center justify-center mb-3">
                  <Share2 className="w-5 h-5 text-[#059669]" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">Partner With Us</h3>
                <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  Become a Viamsh distributor and grow your business.
                </p>
                <Link href="/distributors" className="mt-3 inline-block text-xs font-semibold text-[#059669] hover:text-[#047857] transition-colors">
                  Learn more
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFFBEB] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-[#D97706]" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">Have Questions?</h3>
                <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  Reach out to our team — we&apos;re happy to help.
                </p>
                <Link href="/contact" className="mt-3 inline-block text-xs font-semibold text-[#D97706] hover:text-[#B45309] transition-colors">
                  Contact us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ PREVIOUS / NEXT ARTICLE ═══ */}
      {(prevPost || nextPost) && (
        <section className="py-0 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Previous */}
              {prevPost ? (
                <AnimatedSection>
                  <Link href={`/blog/${prevPost.slug}`} className="group flex items-center gap-4 p-5 rounded-2xl border border-[#F1F5F9] hover:border-[#C7D2FE] hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 group-hover:bg-[#EEF2FF] transition-colors">
                      <ArrowLeft className="w-4 h-4 text-[#94A3B8] group-hover:text-[#6366F1] transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">Previous</p>
                      <p className="mt-0.5 text-sm font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors line-clamp-1">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ) : (
                <div />
              )}

              {/* Next */}
              {nextPost ? (
                <AnimatedSection delay={0.1}>
                  <Link href={`/blog/${nextPost.slug}`} className="group flex items-center gap-4 p-5 rounded-2xl border border-[#F1F5F9] hover:border-[#C7D2FE] hover:shadow-md transition-all sm:flex-row-reverse sm:text-right">
                    <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 group-hover:bg-[#EEF2FF] transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#6366F1] transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">Next</p>
                      <p className="mt-0.5 text-sm font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors line-clamp-1">
                        {nextPost.title}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══ RELATED ARTICLES ═══ */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t border-[#F1F5F9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold text-[#6366F1] uppercase tracking-wider">Continue Reading</p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Related Articles</h2>
                  <p className="mt-2 text-sm text-[#94A3B8]">Discover more tips, guides, and insights from our experts.</p>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border-2 border-[#6366F1] text-sm font-semibold text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors"
                >
                  All Articles
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related, idx) => {
                const relCatConfig = categoryConfig[related.category];
                return (
                  <AnimatedSection key={related.id} delay={idx * 0.08}>
                    <Link href={`/blog/${related.slug}`} className="group block h-full">
                      <article className="h-full rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden hover:shadow-xl hover:border-[#C7D2FE] transition-all duration-300">
                        {/* Cover */}
                        <div
                          className="h-40 sm:h-44 relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${related.coverGradient[0]}, ${related.coverGradient[1]})`,
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <svg viewBox="0 0 80 80" className="w-16 h-16">
                              <rect x="8" y="14" width="64" height="52" rx="6" fill="white" />
                              <rect x="16" y="26" width="36" height="4" rx="2" fill="white" fillOpacity="0.5" />
                              <rect x="16" y="34" width="24" height="4" rx="2" fill="white" fillOpacity="0.3" />
                            </svg>
                          </div>
                          <div className="absolute bottom-3 left-3">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm ${relCatConfig.bg} ${relCatConfig.color}`}>
                              {related.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6">
                          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#6366F1] transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="mt-2 text-sm text-[#64748B] leading-relaxed line-clamp-2">{related.excerpt}</p>

                          {/* Author + Meta */}
                          <div className="mt-4 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] text-[10px] font-bold">
                                {related.author.avatar}
                              </div>
                              <span className="text-xs font-medium text-[#374151]">{related.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-[#94A3B8]">
                              <span>{related.readTime} read</span>
                              <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                              <span>
                                {new Date(related.date).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Mobile "View All" button */}
            <AnimatedSection>
              <div className="mt-8 text-center sm:hidden">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl border-2 border-[#6366F1] text-sm font-semibold text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-colors"
                >
                  View All Articles
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
