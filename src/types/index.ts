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
