export type NavLinks = {
  name: string;
  route: string;
};

export type Categories = {
  name: string;
  link: string;
  id: number;
  slug: string;
  image: string;
  description: string;
};

export type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export type AdminRoutes = {
  imageUrl: string;
  routeText: string;
  href: string;
};

export type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderItem = {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  status?: "PENDING" | "SUCCESS" | "FAILED";
};

export type Order = {
  id: number;
  items: OrderItem[];
  total: number;
  createdAt: Date;
};
