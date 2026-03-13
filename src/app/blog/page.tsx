'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Clock, ArrowRight, TrendingUp, ChevronRight, BookOpen, Sparkles, Mail } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

/* ─── Types ─── */

type BlogCategory = 'All' | 'Cleaning Tips' | 'Product Guides' | 'Home Care' | 'Sustainability' | 'Company News';

interface Author {
  name: string;
  role: string;
  avatar: string; // initials for now
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: Exclude<BlogCategory, 'All'>;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  coverGradient: [string, string]; // from, to colors for placeholder
}

/* ─── Data ─── */

const authors: Record<string, Author> = {
  priya: { name: 'Priya Sharma', role: 'Home Care Expert', avatar: 'PS' },
  rahul: { name: 'Rahul Verma', role: 'Product Specialist', avatar: 'RV' },
  anita: { name: 'Anita Das', role: 'Sustainability Lead', avatar: 'AD' },
  viamsh: { name: 'Viamsh Team', role: 'Company Updates', avatar: 'VT' },
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tips for Removing Tough Stains from White Clothes',
    slug: '5-tips-removing-tough-stains',
    excerpt:
      'Discover proven methods to tackle stubborn stains on white fabrics using Orma Detergent Powder and simple household ingredients. From turmeric to grease — we cover them all.',
    category: 'Cleaning Tips',
    date: '2026-03-10',
    readTime: '4 min',
    author: authors.priya,
    tags: ['stain removal', 'white clothes', 'laundry'],
    featured: true,
    coverGradient: ['#6366F1', '#8B5CF6'],
  },
  {
    id: '2',
    title: 'How to Choose the Right Detergent for Your Washing Machine',
    slug: 'choose-right-detergent-washing-machine',
    excerpt:
      'Not all detergents are created equal. Learn how to pick the best detergent for front-load and top-load washing machines for optimal cleaning results.',
    category: 'Product Guides',
    date: '2026-03-05',
    readTime: '5 min',
    author: authors.rahul,
    tags: ['washing machine', 'detergent', 'guide'],
    trending: true,
    coverGradient: ['#059669', '#34D399'],
  },
  {
    id: '3',
    title: 'The Complete Guide to Eco-Friendly Cleaning in 2026',
    slug: 'eco-friendly-cleaning-guide-2026',
    excerpt:
      'Small changes in your cleaning routine can make a big difference. Here are practical, science-backed tips for environmentally conscious cleaning without compromising on results.',
    category: 'Sustainability',
    date: '2026-02-28',
    readTime: '7 min',
    author: authors.anita,
    tags: ['eco-friendly', 'green cleaning', 'sustainability'],
    trending: true,
    coverGradient: ['#16A34A', '#86EFAC'],
  },
  {
    id: '4',
    title: 'Viamsh FMCG Expands Distribution to 5 New States',
    slug: 'viamsh-expands-5-new-states',
    excerpt:
      'We are thrilled to announce the expansion of our distribution network to Maharashtra, Gujarat, Madhya Pradesh, Uttar Pradesh, and West Bengal.',
    category: 'Company News',
    date: '2026-02-20',
    readTime: '3 min',
    author: authors.viamsh,
    tags: ['expansion', 'distribution', 'growth'],
    coverGradient: ['#F59E0B', '#FCD34D'],
  },
  {
    id: '5',
    title: 'The Science Behind Orma Detergent: How It Keeps Clothes Brighter',
    slug: 'science-behind-orma-detergent',
    excerpt:
      'A deep dive into the optical brighteners and surfactants that make Orma Detergent Powder so effective at keeping fabrics looking new, wash after wash.',
    category: 'Product Guides',
    date: '2026-02-15',
    readTime: '6 min',
    author: authors.rahul,
    tags: ['orma', 'science', 'brighteners'],
    coverGradient: ['#7C3AED', '#A78BFA'],
  },
  {
    id: '6',
    title: '10 Common Laundry Mistakes You\'re Probably Making',
    slug: '10-common-laundry-mistakes',
    excerpt:
      'From overloading the machine to using too much detergent — these everyday mistakes could be damaging your clothes. Here\'s how to fix them.',
    category: 'Cleaning Tips',
    date: '2026-02-10',
    readTime: '5 min',
    author: authors.priya,
    tags: ['laundry', 'mistakes', 'tips'],
    trending: true,
    coverGradient: ['#DC2626', '#FCA5A5'],
  },
  {
    id: '7',
    title: 'How to Keep Your Bathroom Sparkling Clean with Less Effort',
    slug: 'bathroom-cleaning-less-effort',
    excerpt:
      'A step-by-step routine that takes just 15 minutes a day to maintain a spotless bathroom. Plus, the best products for different surfaces.',
    category: 'Home Care',
    date: '2026-02-05',
    readTime: '4 min',
    author: authors.priya,
    tags: ['bathroom', 'cleaning routine', 'home care'],
    coverGradient: ['#0EA5E9', '#7DD3FC'],
  },
  {
    id: '8',
    title: 'Viamsh FMCG Receives ISO 9001:2015 Certification',
    slug: 'viamsh-iso-certification',
    excerpt:
      'Our commitment to quality has been recognized with the prestigious ISO 9001:2015 certification for our manufacturing processes in Ranchi.',
    category: 'Company News',
    date: '2026-01-28',
    readTime: '3 min',
    author: authors.viamsh,
    tags: ['certification', 'quality', 'ISO'],
    coverGradient: ['#0F172A', '#475569'],
  },
  {
    id: '9',
    title: 'Understanding Fabric Types: Which Detergent Works Best?',
    slug: 'fabric-types-detergent-guide',
    excerpt:
      'Cotton, silk, polyester, wool — each fabric has different needs. Learn which detergent type and wash settings work best for every material.',
    category: 'Product Guides',
    date: '2026-01-20',
    readTime: '6 min',
    author: authors.rahul,
    tags: ['fabric', 'detergent', 'guide'],
    coverGradient: ['#D946EF', '#F0ABFC'],
  },
  {
    id: '10',
    title: 'Monsoon Cleaning Guide: Keeping Your Home Fresh & Dry',
    slug: 'monsoon-cleaning-guide',
    excerpt:
      'The rainy season brings unique cleaning challenges — musty smells, damp clothes, mold growth. Here\'s your complete monsoon cleaning checklist.',
    category: 'Home Care',
    date: '2026-01-15',
    readTime: '5 min',
    author: authors.priya,
    tags: ['monsoon', 'home care', 'mold'],
    coverGradient: ['#2563EB', '#93C5FD'],
  },
  {
    id: '11',
    title: 'Why We Chose Biodegradable Packaging — And What\'s Next',
    slug: 'biodegradable-packaging-journey',
    excerpt:
      'Our journey towards 100% sustainable packaging by 2027. From the challenges we faced to the innovations driving us forward.',
    category: 'Sustainability',
    date: '2026-01-08',
    readTime: '5 min',
    author: authors.anita,
    tags: ['packaging', 'sustainability', 'innovation'],
    coverGradient: ['#059669', '#6EE7B7'],
  },
  {
    id: '12',
    title: 'Kitchen Deep Clean: A Weekend Warrior\'s Guide',
    slug: 'kitchen-deep-clean-guide',
    excerpt:
      'Transform your kitchen in one weekend with this room-by-room deep cleaning guide. Covers countertops, appliances, floors, and more.',
    category: 'Home Care',
    date: '2026-01-02',
    readTime: '8 min',
    author: authors.priya,
    tags: ['kitchen', 'deep clean', 'weekend'],
    coverGradient: ['#EA580C', '#FDBA74'],
  },
];

const categoryConfig: Record<Exclude<BlogCategory, 'All'>, { color: string; bg: string }> = {
  'Cleaning Tips': { color: 'text-[#2563EB]', bg: 'bg-[#EFF6FF]' },
  'Product Guides': { color: 'text-[#6366F1]', bg: 'bg-[#EEF2FF]' },
  'Home Care': { color: 'text-[#059669]', bg: 'bg-[#ECFDF5]' },
  'Sustainability': { color: 'text-[#16A34A]', bg: 'bg-[#F0FDF4]' },
  'Company News': { color: 'text-[#D97706]', bg: 'bg-[#FFFBEB]' },
};

const categories: BlogCategory[] = ['All', 'Cleaning Tips', 'Product Guides', 'Home Care', 'Sustainability', 'Company News'];

/* ─── Component ─── */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  const featuredPost = blogPosts.find((p) => p.featured)!;
  const trendingPosts = blogPosts.filter((p) => p.trending);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter((p) => !p.featured);

    if (activeCategory !== 'All') {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const getCategoryCount = (cat: BlogCategory) => {
    if (cat === 'All') return blogPosts.length;
    return blogPosts.filter((p) => p.category === cat).length;
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 4000);
    }
  };

  return (
    <>
      <title>Blog & Insights | Viamsh FMCG</title>
      <meta
        name="description"
        content="Expert cleaning tips, product guides, home care advice, and sustainability insights from Viamsh FMCG. Your go-to resource for a cleaner home."
      />

      {/* ═══ HERO — Featured Post ═══ */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-5 h-5 text-[#FDE68A]" />
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Blog & Insights</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Featured Image */}
                <div
                  className="aspect-[16/10] rounded-2xl overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, ${featuredPost.coverGradient[0]}, ${featuredPost.coverGradient[1]})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-20">
                      <rect x="10" y="20" width="100" height="80" rx="8" fill="white" />
                      <rect x="20" y="35" width="60" height="6" rx="3" fill="white" fillOpacity="0.5" />
                      <rect x="20" y="48" width="40" height="6" rx="3" fill="white" fillOpacity="0.3" />
                      <rect x="20" y="61" width="50" height="6" rx="3" fill="white" fillOpacity="0.3" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryConfig[featuredPost.category].bg} ${categoryConfig[featuredPost.category].color}`}>
                    {featuredPost.category}
                  </span>
                  <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-[#FDE68A] transition-colors">
                    {featuredPost.title}
                  </h1>
                  <p className="mt-4 text-white/60 text-base lg:text-lg leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-xs font-bold">
                        {featuredPost.author.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{featuredPost.author.name}</p>
                        <p className="text-xs text-white/40">{featuredPost.author.role}</p>
                      </div>
                    </div>
                    <div className="h-5 w-px bg-white/20" />
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime} read
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-[#FDE68A] text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ MAIN CONTENT ═══ */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Left — Posts */}
            <div>
              {/* Search & Category Filters */}
              <AnimatedSection>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                          activeCategory === cat
                            ? 'bg-[#6366F1] text-white shadow-sm'
                            : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#6366F1] hover:text-[#6366F1]'
                        }`}
                      >
                        {cat}
                        <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-white/70' : 'text-[#9CA3AF]'}`}>
                          {getCategoryCount(cat)}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full rounded-xl border border-[#E5E7EB] bg-white py-2.5 pl-10 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] transition-all"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Posts Grid */}
              {filteredPosts.length === 0 ? (
                <AnimatedSection>
                  <div className="mt-12 rounded-2xl bg-white border border-[#E5E7EB] py-20 text-center">
                    <Search className="w-10 h-10 text-[#D1D5DB] mx-auto" />
                    <p className="mt-4 text-lg font-semibold text-[#374151]">No articles found</p>
                    <p className="mt-1 text-sm text-[#9CA3AF]">Try adjusting your search or filter to find what you&apos;re looking for.</p>
                    <button
                      type="button"
                      onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                      className="mt-4 text-sm font-medium text-[#6366F1] hover:underline cursor-pointer"
                    >
                      Clear all filters
                    </button>
                  </div>
                </AnimatedSection>
              ) : (
                <>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {visiblePosts.map((post, idx) => (
                      <AnimatedSection key={post.id} delay={idx * 0.05}>
                        <article className="group h-full rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden hover:shadow-lg hover:border-[#C7D2FE] transition-all duration-300">
                          <Link href={`/blog/${post.slug}`} className="block h-full">
                            {/* Cover */}
                            <div
                              className="h-44 relative overflow-hidden"
                              style={{
                                background: `linear-gradient(135deg, ${post.coverGradient[0]}, ${post.coverGradient[1]})`,
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                                <svg viewBox="0 0 80 80" className="w-16 h-16">
                                  <rect x="8" y="14" width="64" height="52" rx="6" fill="white" />
                                  <rect x="16" y="26" width="36" height="4" rx="2" fill="white" fillOpacity="0.5" />
                                  <rect x="16" y="34" width="24" height="4" rx="2" fill="white" fillOpacity="0.3" />
                                </svg>
                              </div>
                              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold backdrop-blur-sm ${categoryConfig[post.category].bg} ${categoryConfig[post.category].color}`}>
                                  {post.category}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                              <h2 className="text-base font-bold text-[#1A1A1A] leading-snug group-hover:text-[#6366F1] transition-colors line-clamp-2">
                                {post.title}
                              </h2>
                              <p className="mt-2 text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>

                              {/* Tags */}
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span key={tag} className="text-[11px] text-[#9CA3AF] bg-[#F3F4F6] px-2 py-0.5 rounded-full">
                                    #{tag}
                                  </span>
                                ))}
                              </div>

                              {/* Author & Meta */}
                              <div className="mt-4 pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] text-[10px] font-bold">
                                    {post.author.avatar}
                                  </div>
                                  <span className="text-xs font-medium text-[#374151]">{post.author.name}</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-[11px] text-[#9CA3AF]">
                                  <span>
                                    {new Date(post.date).toLocaleDateString('en-IN', {
                                      day: 'numeric',
                                      month: 'short',
                                    })}
                                  </span>
                                  <span className="flex items-center gap-0.5">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Load More */}
                  {hasMore && (
                    <AnimatedSection>
                      <div className="mt-10 text-center">
                        <button
                          type="button"
                          onClick={() => setVisibleCount((prev) => prev + 6)}
                          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-[#6366F1] text-[#6366F1] text-sm font-semibold hover:bg-[#6366F1] hover:text-white transition-colors cursor-pointer"
                        >
                          Load More Articles
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </AnimatedSection>
                  )}
                </>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-8">
              {/* Newsletter CTA */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-6 text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">Get Cleaning Tips in Your Inbox</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Weekly tips, product updates, and home care advice. No spam, unsubscribe anytime.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-3">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-white text-[#6366F1] text-sm font-bold hover:bg-[#EEF2FF] transition-colors cursor-pointer"
                    >
                      {newsletterStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
                    </button>
                  </form>
                  {newsletterStatus === 'success' && (
                    <p className="mt-2 text-xs text-white/80">Thank you! Check your inbox to confirm.</p>
                  )}
                </div>
              </AnimatedSection>

              {/* Trending Posts */}
              <AnimatedSection delay={0.15}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="w-4 h-4 text-[#6366F1]" />
                    <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Trending</h3>
                  </div>
                  <div className="space-y-4">
                    {trendingPosts.map((post, idx) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-3">
                        <span className="text-2xl font-extrabold text-[#E5E7EB] group-hover:text-[#6366F1] transition-colors leading-none mt-0.5">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#374151] group-hover:text-[#6366F1] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2 text-[11px] text-[#9CA3AF]">
                            <span>{post.readTime} read</span>
                            <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                            <span className={`${categoryConfig[post.category].color}`}>{post.category}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Categories List */}
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Categories</h3>
                  <div className="space-y-1">
                    {categories.filter((c) => c !== 'All').map((cat) => {
                      const catKey = cat as Exclude<BlogCategory, 'All'>;
                      const count = getCategoryCount(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                            activeCategory === cat
                              ? 'bg-[#EEF2FF] text-[#6366F1] font-semibold'
                              : 'text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#374151]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${categoryConfig[catKey].bg} border ${activeCategory === cat ? 'border-[#6366F1]' : 'border-transparent'}`} />
                            {cat}
                          </div>
                          <span className="text-xs text-[#9CA3AF]">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>

              {/* Tags Cloud */}
              <AnimatedSection delay={0.25}>
                <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6">
                  <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['laundry', 'stain removal', 'eco-friendly', 'detergent', 'home care', 'guide', 'cleaning routine', 'sustainability', 'monsoon', 'kitchen'].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1.5 rounded-full bg-[#F3F4F6] text-xs text-[#6B7280] font-medium hover:bg-[#EEF2FF] hover:text-[#6366F1] transition-colors cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM NEWSLETTER CTA ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] border border-[#E0E7FF]">
              <span className="text-[#6366F1] text-sm font-bold uppercase tracking-wider">Stay Updated</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                Never Miss a Cleaning Hack
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-lg mx-auto">
                Join 2,000+ readers who get our weekly newsletter packed with home care tips, product updates, and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-[#D1D5DB] bg-white text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-bold hover:bg-[#4F46E5] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {newsletterStatus === 'success' ? 'Subscribed!' : 'Subscribe Free'}
                </button>
              </form>
              <p className="mt-3 text-xs text-[#9CA3AF]">No spam, ever. Unsubscribe with one click.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
