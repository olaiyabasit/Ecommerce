import { categories } from "@/constant/categories";
import Link from "next/link";

export function GetCatgoriesName() {
  return (
    <>
      {categories.map((cat, index) => (
        <li key={index}>
          <Link href={cat.link}>{cat.name}</Link>
        </li>
      ))}
    </>
  );
}
