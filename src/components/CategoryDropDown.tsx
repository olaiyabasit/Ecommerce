import React from "react";
import { categories } from "@/constant/categories";
import Link from "next/link";
function CategoryDropDown() {
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="  bg-none">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {categories.map((cat, index) => (
            <li key={index}>
              <Link href={cat.link}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryDropDown;
