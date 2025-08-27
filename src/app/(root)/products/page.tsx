import { categories } from "@/constant/categories";
import React from "react";

function Products() {
  return (
    <>
      <section>
        <h2 className="text-2xl mx-2 my-4 font-bold">Products</h2>
      </section>
      <main className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-2 mx-6">
        {categories.map((cat, index) => (
          <div
            className="card bg-gray-950 w-fit drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            key={index}
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cat.name}</h2>
              <p>{cat.description}</p>
              <div className="card-actions justify-end">
                <button className="bg-orange-400 font-bold border-0 outline-0 btn w-full flex items-center justify-center">
                  {" "}
                  Add To Cart{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Products;
