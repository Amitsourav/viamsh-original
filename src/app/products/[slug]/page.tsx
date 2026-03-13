import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ShareButtons from '@/components/shared/ShareButtons';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.seo_title || product.name,
    description: product.seo_description || product.description,
    openGraph: {
      title: product.seo_title || product.name,
      description: product.seo_description || product.description,
      images: product.images[0]
        ? [{ url: product.images[0].image_url, alt: product.images[0].alt_text }]
        : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: product.name },
  ];

  // Related products: same category, different product
  const relatedProducts = products.filter(
    (p) => p.category_id === product.category_id && p.id !== product.id
  );

  return (
    <>
      <section className="bg-brand-green-light py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
