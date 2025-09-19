"use client";

import { useOrderStore } from "@/app/store/useOrderStore";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Pageloader from "@/components/Pageloader";

function Cart() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const cart = useOrderStore((state) => state.cart);
  const removeFromCart = useOrderStore((state) => state.removeFromCart);
  const finishOrder = useOrderStore((state) => state.finishOrder);
  useEffect(() => {
    if (cart !== undefined) {
      setIsReady(true);
    }
  }, [cart]);
  if (!isReady) {
    return <Pageloader />;
  }
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
      <section className="p-3">My Items</section>
      <section className="cart grid grid-cols-1 md:grid-cols-2">
        {cart.length === 0 ? (
          <p>No Items in Cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="order-details pr-2 py-0 mx-2 my-1 rounded-md bg-gray-700 flex gap-2 items-center justify-between"
            >
              {/* image */}
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  style={{
                    width: "140px",
                    height: "100px",
                  }}
                />
              </figure>
              <div className="name-product">
                <p className="des text-orange-400 font-semibold text-[14px]">
                  {item.name}
                </p>
                <p className="text-gray-300 text-[10px]">Z-store plc</p>
              </div>

              <div>${item.price}</div>
              <div>x {item.quantity}</div>
              <button
                className="text-red-600 rounded-full cursor-pointer p-2 hover:bg-gray-300 transition"
                onClick={() => removeFromCart(item.productId)}
              >
                <FaRegTrashAlt className="" />
              </button>
            </div>
          ))
        )}
      </section>

      {cart.length > 0 && (
        <section>
          <div className="flex gap-2 p-3 my-2">
            <p>Total: </p>
            <p className="text-orange-400 font-bold text-xl">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            className=" btn bg-orange-400 flex items-center justify-center p-4 my-3  w-full text-base-100"
            onClick={finishOrder}
          >
            Confirm Order
          </button>
        </section>
      )}
    </div>
  );
}

export default Cart;
