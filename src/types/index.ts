// ============================================================
// Viamsh FMCG - TypeScript Type Definitions
// ============================================================

// --- Product ---

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  ingredients: string | null;
  usage_instructions: string | null;
  model_3d_url: string | null;
  category_id: string;
  is_active: boolean;
  is_featured: boolean;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  variants: ProductVariant[];
  images: ProductImage[];
  reviews: Review[];
  category: Category | null;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  name: string;
  size: string;
  sku: string;
  price: number;
  mrp: number;
  stock_quantity: number;
  is_active: boolean;
  sort_order: number;
}

export interface ProductImage {
  id: string;
  product_id: string;
  variant_id: string | null;
  image_url: string;
  alt_text: string;
  is_primary: boolean;
  sort_order: number;
}

// --- Category ---

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
}

// --- User & Auth ---

export type UserRole = 'customer' | 'admin' | 'distributor';

export interface User {
  id: string;
  email: string;
  phone: string | null;
  name: string;
  role: UserRole;
  avatar_url: string | null;
  email_verified: boolean;
  phone_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  label: string;
  full_name: string;
  phone: string;
  address_line_1: string;
  address_line_2: string | null;
  city: string;
  state: string;
  pin_code: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

// --- Orders ---

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type PaymentMethod = 'cod' | 'upi' | 'card' | 'netbanking' | 'wallet';

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  subtotal: number;
  discount: number;
  shipping_charge: number;
  total: number;
  coupon_id: string | null;
  shipping_address: Address;
  tracking_number: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
  user?: User;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  variant_id: string;
  product_name: string;
  variant_name: string;
  sku: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  product?: Product;
  variant?: ProductVariant;
}

// --- Cart ---

export interface CartItem {
  variant: ProductVariant;
  quantity: number;
  product: Pick<Product, 'id' | 'name' | 'slug' | 'images'>;
}

// --- Review ---

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title: string | null;
  comment: string | null;
  is_verified_purchase: boolean;
  is_approved: boolean;
  created_at: string;
  user?: Pick<User, 'id' | 'name' | 'avatar_url'>;
}

// --- Distributor ---

export type InquiryStatus = 'new' | 'contacted' | 'in_progress' | 'closed';

export interface DistributorInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  city: string;
  state: string;
  message: string | null;
  status: InquiryStatus;
  created_at: string;
  updated_at: string;
}

// --- Blog ---

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  author_id: string;
  is_published: boolean;
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
  author?: Pick<User, 'id' | 'name' | 'avatar_url'>;
}

// --- Contact & Newsletter ---

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  is_active: boolean;
  subscribed_at: string;
  unsubscribed_at: string | null;
}

// --- Coupon ---

export type DiscountType = 'percentage' | 'flat';

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discount_type: DiscountType;
  discount_value: number;
  min_order_amount: number;
  max_discount_amount: number | null;
  usage_limit: number | null;
  used_count: number;
  is_active: boolean;
  valid_from: string;
  valid_until: string;
  created_at: string;
}

// --- Testimonial (static data) ---

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}
