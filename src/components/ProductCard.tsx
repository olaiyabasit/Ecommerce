import Image from "next/image";
import React from "react";

function ProductCard() {
  return (
    <>
      <div className="m-2 rounded-md  w-fit shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <div className="  bg-white   rounded-bl-md rounded-br-md">
          <Image
            src={"/headPhone.jpeg"}
            alt="image"
            width={200}
            height={200}
            className="flex justify-center items-center "
          />
          <div className=" p-2 bg-gray-300">
            <h2 className="text-lg font-semibold text-gray-900">
              Major III Bluetooth
            </h2>
            <p className="text-sm text-gray-500">
              Wireless Headset . Sipping Available
            </p>
            <div>
              <div className="btn-container my-3  flex justify-between  rounded-md ">
                <button className="bg-black btn text-lg text-white font-bold px-2 py-1 rounded-md">
                  {" "}
                  $4.55
                </button>
                <button className=" px-1 text-2xl  ">❤️</button>
              </div>
              <button className="bg-orange-400 font-bold border-0 outline-0 btn w-full flex items-center justify-center">
                {" "}
                Add To Cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
