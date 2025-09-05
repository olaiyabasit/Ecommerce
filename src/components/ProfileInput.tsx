import React from "react";

type ProfileInputs = {
  label: string;
  value: string;
};
function ProfileInput({ label, value }: ProfileInputs) {
  return (
    <li className="flex flex-col mx-2  ">
      <label htmlFor="name" className="font-bold text-[14px] my-1">
        {label}
      </label>
      <input
        type="text"
        className="w-full text-gray-300 font-bold text-[12px] p-1 outline-0 focus:outline-0 glass    rounded-md"
        readOnly
        value={value}
      />
    </li>
  );
}

export default ProfileInput;
