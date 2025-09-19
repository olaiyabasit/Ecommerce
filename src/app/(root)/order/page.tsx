"use client";

import { useOrderStore } from "@/app/store/useOrderStore";
import Pageloader from "@/components/Pageloader";
import { useEffect, useState } from "react";

export default function Orders() {
  const orders = useOrderStore((state) => state.orders);
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    if (orders !== undefined) {
      setIsReady(true);
    }
  }, [orders]);
  if (!isReady) {
    return <Pageloader />;
  }

  if (orders.length === 0) {
    return (
      <div className="p-6 flex justify-center flex-col ">
        <h2 className="text-xl font-bold mb-3">My Orders</h2>
        <p className="text-gray-500">You haven’t placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      <div className="space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border border-gray-700 rounded-lg p-4 bg-gray-800"
          >
            {/* Order summary */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-orange-400 font-semibold">Order #{o.id}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(o.createdAt).toLocaleString()}
                  {/* Date from order types  */}
                </p>
              </div>
              <div className="font-bold text-lg text-green-400">
                ${o.total.toFixed(2)}
              </div>
            </div>

            {/* Order items */}
            <div className="space-y-2">
              {o.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-700 rounded-md px-3 py-2"
                >
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      item.status === "SUCCESS"
                        ? "text-green-400"
                        : item.status === "FAILED"
                        ? "text-red-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
