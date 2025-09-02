import Orders from "@/components/Orders";
import React from "react";

function Order() {
  return (
    <>
      <section className="">
        <h2 className="text-2xl mx-2 my-4 font-bold">Order</h2>
        <main className="mx-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Orders />
            <Orders />
            <Orders />
          </div>
          <button className="btn bg-orange-400 px-4 w-full text-base-100">
            BUY
          </button>
        </main>
      </section>
    </>
  );
}

export default Order;
