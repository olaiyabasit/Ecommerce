import React from "react";

function Orders() {
  return (
    <div className="order-details pr-2 py-0 mx-2 my-1 rounded-md bg-gray-700 flex gap-2 items-center justify-between">
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
          Nike Shoes 12th Edition
        </p>
        <p className="text-gray-300 text-[10px]">Sky Blue</p>
        <p className="text-gray-200 text-[12px] font-bold">$245.66</p>
      </div>
    </div>
  );
}

export default Orders;
