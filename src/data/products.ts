import type { Product, Category } from '@/types';

// --- Categories ---

export const categories: Category[] = [
  {
    id: 'cat-detergent',
    name: 'Detergent',
    slug: 'detergent',
    description: 'High-quality detergent powders for sparkling clean clothes.',
    image_url: '/images/categories/detergent.jpg',
    is_active: true,
    sort_order: 1,
  },
  {
    id: 'cat-tea',
    name: 'Tea',
    slug: 'tea',
    description: 'Premium tea blends crafted for the perfect cup.',
    image_url: '/images/categories/tea.jpg',
    is_active: true,
    sort_order: 2,
  },
  {
    id: 'cat-cleaning',
    name: 'Cleaning',
    slug: 'cleaning',
    description: 'Powerful cleaning solutions for your home.',
    image_url: '/images/categories/cleaning.jpg',
    is_active: true,
    sort_order: 3,
  },
];

// --- Products ---

export const products: Product[] = [
  // ---- Orma Detergent Powder ----
  {
    id: 'prod-orma-detergent',
    name: 'Orma Detergent Powder',
    slug: 'orma-detergent-powder',
    description:
      'Orma Detergent Powder delivers powerful stain removal with a refreshing fragrance. Formulated for both hand wash and machine wash, it keeps your clothes bright and fresh wash after wash.',
    ingredients:
      'Linear Alkyl Benzene Sulphonate, Sodium Carbonate, Sodium Tripolyphosphate, Optical Brightener, Fragrance.',
    usage_instructions:
      'Dissolve the recommended amount in water before adding clothes. For hand wash: 1 scoop per bucket. For machine wash: 2 scoops per load.',
    model_3d_url: null,
    category_id: 'cat-detergent',
    is_active: true,
    is_featured: true,
    seo_title: 'Orma Detergent Powder - Powerful Stain Removal | Viamsh',
    seo_description:
      'Buy Orma Detergent Powder online. Powerful stain removal, refreshing fragrance, available in Economy, Regular, and Value Pack sizes.',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
    variants: [
      {
        id: 'var-orma-80g',
        product_id: 'prod-orma-detergent',
        name: 'Economy',
        size: '80gm',
        sku: 'ORMA-DET-80G',
        price: 10,
        mrp: 10,
        stock_quantity: 500,
        is_active: true,
        sort_order: 1,
      },
      {
        id: 'var-orma-500g',
        product_id: 'prod-orma-detergent',
        name: 'Regular',
        size: '500gm',
        sku: 'ORMA-DET-500G',
        price: 50,
        mrp: 55,
        stock_quantity: 300,
        is_active: true,
        sort_order: 2,
      },
      {
        id: 'var-orma-1kg',
        product_id: 'prod-orma-detergent',
        name: 'Value Pack',
        size: '1Kg',
        sku: 'ORMA-DET-1KG',
        price: 100,
        mrp: 110,
        stock_quantity: 200,
        is_active: true,
        sort_order: 3,
      },
    ],
    images: [
      {
        id: 'img-orma-1',
        product_id: 'prod-orma-detergent',
        variant_id: null,
        image_url: '/images/products/orma-detergent-front.jpg',
        alt_text: 'Orma Detergent Powder - Front packaging',
        is_primary: true,
        sort_order: 1,
      },
      {
        id: 'img-orma-2',
        product_id: 'prod-orma-detergent',
        variant_id: null,
        image_url: '/images/products/orma-detergent-back.jpg',
        alt_text: 'Orma Detergent Powder - Back packaging with ingredients',
        is_primary: false,
        sort_order: 2,
      },
      {
        id: 'img-orma-3',
        product_id: 'prod-orma-detergent',
        variant_id: null,
        image_url: '/images/products/orma-detergent-lifestyle.jpg',
        alt_text: 'Orma Detergent Powder in use - clean laundry',
        is_primary: false,
        sort_order: 3,
      },
    ],
    reviews: [],
    category: categories[0],
  },

  // ---- Premium Tea (Coming Soon) ----
  {
    id: 'prod-premium-tea',
    name: 'Viamsh Premium Tea',
    slug: 'viamsh-premium-tea',
    description:
      'A carefully curated blend of the finest Assam and Darjeeling tea leaves. Rich in flavour, deep in colour, and crafted for the discerning tea lover. Coming soon to your kitchen.',
    ingredients: 'Blended tea leaves from premium Assam and Darjeeling estates.',
    usage_instructions:
      'Boil 200ml water. Add 1 teaspoon of tea per cup. Brew for 3-5 minutes. Strain and serve with milk and sugar to taste.',
    model_3d_url: null,
    category_id: 'cat-tea',
    is_active: false,
    is_featured: false,
    seo_title: 'Viamsh Premium Tea - Coming Soon | Viamsh',
    seo_description:
      'Viamsh Premium Tea is an exquisite blend of Assam and Darjeeling tea leaves. Coming soon.',
    created_at: '2025-06-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
    variants: [
      {
        id: 'var-tea-250g',
        product_id: 'prod-premium-tea',
        name: 'Regular',
        size: '250gm',
        sku: 'VM-TEA-250G',
        price: 0,
        mrp: 0,
        stock_quantity: 0,
        is_active: false,
        sort_order: 1,
      },
    ],
    images: [
      {
        id: 'img-tea-1',
        product_id: 'prod-premium-tea',
        variant_id: null,
        image_url: '/images/products/premium-tea-front.jpg',
        alt_text: 'Viamsh Premium Tea - Package front',
        is_primary: true,
        sort_order: 1,
      },
    ],
    reviews: [],
    category: categories[1],
  },

  // ---- Bathroom Cleaner (Coming Soon) ----
  {
    id: 'prod-bathroom-cleaner',
    name: 'Viamsh Bathroom Cleaner',
    slug: 'viamsh-bathroom-cleaner',
    description:
      'A powerful bathroom cleaner that cuts through tough stains, lime scale, and soap scum. Leaves surfaces sparkling clean with a long-lasting fresh fragrance. Coming soon.',
    ingredients: null,
    usage_instructions: null,
    model_3d_url: null,
    category_id: 'cat-cleaning',
    is_active: false,
    is_featured: false,
    seo_title: 'Viamsh Bathroom Cleaner - Coming Soon | Viamsh',
    seo_description:
      'Viamsh Bathroom Cleaner for powerful stain removal and lasting freshness. Coming soon.',
    created_at: '2025-06-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
    variants: [
      {
        id: 'var-cleaner-500ml',
        product_id: 'prod-bathroom-cleaner',
        name: 'Regular',
        size: '500ml',
        sku: 'VM-BC-500ML',
        price: 0,
        mrp: 0,
        stock_quantity: 0,
        is_active: false,
        sort_order: 1,
      },
    ],
    images: [
      {
        id: 'img-cleaner-1',
        product_id: 'prod-bathroom-cleaner',
        variant_id: null,
        image_url: '/images/products/bathroom-cleaner-front.jpg',
        alt_text: 'Viamsh Bathroom Cleaner - Package front',
        is_primary: true,
        sort_order: 1,
      },
    ],
    reviews: [],
    category: categories[2],
  },
];

// --- Helper getters ---

/** All active products (available for purchase). */
export const activeProducts = products.filter((p) => p.is_active);

/** Upcoming / coming-soon products. */
export const upcomingProducts = products.filter((p) => !p.is_active);

/** Featured products for the homepage. */
export const featuredProducts = products.filter((p) => p.is_featured);

/** Find a product by its slug. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Find a product by its ID. */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
