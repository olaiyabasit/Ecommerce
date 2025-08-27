import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <>
      <section className="p-3">
        <p className="text-xl mb-2">Profile</p>
        <div className="flex justify-between gap-2">
          <img
            alt="Tailwind CSS Navbar component"
            className="w-40 h-40 "
            style={{
              borderRadius: "50%",
            }}
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <div>Edit Profile</div>
        </div>
        <ul className="grid grid-cols-2 ">
          <li className="flex flex-col mx-2">
            <label htmlFor="name" className="font-bold text-[18px] my-1">
              Name
            </label>
            <input
              type="text"
              className="w-full text-gray-900 p-1 outline-0 focus:outline-0 glass font-bold  bg-gray-500 rounded-md"
              readOnly
              value={"John Doe"}
            />
          </li>
          <li className="flex flex-col mx-2">
            <label htmlFor="name" className="font-bold text-[18px] my-1">
              Email
            </label>
            <input
              type="text"
              className="w-full text-gray-900 p-1 outline-0 focus:outline-0 glass font-bold  bg-gray-500 rounded-md"
              readOnly
              value={"Johndoe@gmail.com"}
            />
          </li>
          <li className="flex flex-col mx-2">
            <label htmlFor="name" className="font-bold text-[18px] my-1">
              Address
            </label>
            <input
              type="text"
              className="w-full text-gray-900 p-1 outline-0 focus:outline-0 glass font-bold  bg-gray-500 rounded-md"
              readOnly
              value={"1 itonuu 5th adetotun street "}
            />
          </li>
          <li className="flex flex-col mx-2">
            <label htmlFor="name" className="font-bold text-[18px] my-1">
              Date of Birth
            </label>
            <input
              type="text"
              className="w-full text-gray-900 p-1 outline-0 focus:outline-0 glass font-bold  bg-gray-500 rounded-md"
              readOnly
              value={"2/22/16"}
            />
          </li>
          <li className="flex flex-col mx-2">
            <label htmlFor="name" className="font-bold text-[18px] my-1">
              Gender
            </label>
            <input
              type="text"
              className="w-1/2 p-1 text-gray-900 outline-0 focus:outline-0 glass font-bold  bg-gray-500 rounded-md"
              readOnly
              value={"Male"}
            />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Profile;
