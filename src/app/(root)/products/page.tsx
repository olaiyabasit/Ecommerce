"use client";

import { useOrderStore } from "@/app/store/useOrderStore";

import { categories, products } from "@/constant/categories";
import React from "react";

function Products() {
  const addToCart = useOrderStore((state) => state.addToCart);

  return (
    <>
      <section>
        <h2 className="text-2xl mx-2 my-4 font-bold">Products</h2>
      </section>
      <main className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-2 mx-6">
        {products.map((pro, index) => (
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
              <h2 className="card-title">{pro.name}</h2>
              <p>{pro.description}</p>
              <div className="grid grid-cols-2 gap-2">
                <p className="">Stock: {pro.stock}</p>
                <p>Price: ${pro.price}</p>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    console.log("Adding to cart:", pro);
                    addToCart({
                      name: pro.name,
                      price: pro.price,
                      productId: pro.id,
                    });
                  }}
                  className="bg-orange-400 text-base-100 font-bold border-0 outline-0 btn w-full flex items-center justify-center"
                >
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
