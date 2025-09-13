import { Categories, Product } from "@/types";

export const categories: Categories[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "electronics.jpg",
    description: "Latest gadgets, smartphones, laptops, and accessories.",
    link: "/categories/electronics",
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    image: "fashion.jpg",
    description: "Trendy clothing, shoes, and accessories for all genders.",
    link: "/categories/fashion",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    slug: "home-kitchen",
    image: "home-kitchen.jpg",
    description: "Furniture, appliances, cookware, and home decor.",
    link: "/categories/home-kitchen",
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    image: "beauty.jpg",
    description: "Skincare, haircare, cosmetics, and grooming essentials.",
    link: "/categories/Beauty",
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    image: "sports.jpg",
    description: "Fitness gear, outdoor equipment, and activewear.",
    link: "/categories/sports",
  },
  {
    id: 6,
    name: "Books & Stationery",
    slug: "books-stationery",
    image: "books.jpg",
    description: "Novels, textbooks, journals, and office supplies.",
    link: "/categories/books",
  },
  {
    id: 7,
    name: "Toys & Games",
    slug: "toys-games",
    image: "toys.jpg",
    description: "Fun and educational toys for kids of all ages.",
    link: "/categories/toys",
  },
  {
    id: 8,
    name: "Automotive",
    slug: "automotive",
    image: "automotive.jpg",
    description: "Car accessories, tools, and maintenance products.",
    link: "/categories/Automotive",
  },
  {
    id: 9,
    name: "Health & Wellness",
    slug: "health-wellness",
    image: "health.jpg",
    description: "Supplements, fitness trackers, and wellness products.",
    link: "/categories/health",
  },
  {
    id: 10,
    name: "Pet Supplies",
    slug: "pet-supplies",
    image: "pets.jpg",
    description: "Food, toys, and accessories for your furry friends.",
    link: "/categories/Pet",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 30 hours battery life.",
    price: 120.99,
    stock: 50,
    categoryId: 1, // Electronics
    createdAt: new Date("2025-09-01T08:00:00Z"),
    updatedAt: new Date("2025-09-10T12:00:00Z"),
  },
  {
    id: 2,
    name: "Gaming Laptop",
    description: "15-inch high-performance laptop with RTX 4060 GPU.",
    price: 1500.0,
    stock: 10,
    categoryId: 1, // Electronics
    createdAt: new Date("2025-08-20T10:00:00Z"),
    updatedAt: new Date("2025-09-11T14:00:00Z"),
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    description: "100% cotton T-shirt, available in multiple colors.",
    price: 19.99,
    stock: 200,
    categoryId: 2, // Clothing
    createdAt: new Date("2025-09-05T09:30:00Z"),
    updatedAt: new Date("2025-09-09T18:00:00Z"),
  },
  {
    id: 4,
    name: "Denim Jeans",
    description: "Slim-fit denim jeans with stretchable fabric.",
    price: 49.99,
    stock: 100,
    categoryId: 2, // Clothing
    createdAt: new Date("2025-08-30T11:00:00Z"),
    updatedAt: new Date("2025-09-10T16:00:00Z"),
  },
  {
    id: 5,
    name: "Programming in TypeScript",
    description: "Beginner to advanced guide on mastering TypeScript.",
    price: 39.5,
    stock: 30,
    categoryId: 3, // Books
    createdAt: new Date("2025-09-02T13:00:00Z"),
    updatedAt: new Date("2025-09-12T09:00:00Z"),
  },
  {
    id: 6,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    price: 25.99,
    stock: 80,
    categoryId: 1, // Electronics
    createdAt: new Date("2025-09-03T15:00:00Z"),
    updatedAt: new Date("2025-09-11T11:00:00Z"),
  },
];
