"use client";

import { useOrderStore } from "@/app/store/useOrderStore";

import React, { useEffect } from "react";

function Cart() {
  const cart = useOrderStore((state) => state.cart);
  const removeFromCart = useOrderStore((state) => state.removeFromCart);
  const finishOrder = useOrderStore((state) => state.finishOrder);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div>
      <section>My Items</section>
      <section className="cart">
        {cart.length === 0 ? (
          <p>No Items in Cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove Item
              </button>
            </div>
          ))
        )}
      </section>
      {cart.length > 0 && (
        <button className="bg-green-500 text-base-100" onClick={finishOrder}>
          Finish Order
        </button>
      )}
    </div>
  );
}

export default Cart;
