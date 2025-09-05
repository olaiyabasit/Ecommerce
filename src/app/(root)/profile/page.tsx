import ProfileInput from "@/components/ProfileInput";
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
        <ul className="grid   grid-cols-1 md:grid-cols-2">
          <ProfileInput label="Name" value="John Doe" />
          <ProfileInput label="Email" value="Johndoe@gmail.com" />
          <ProfileInput label="Address" value="1 itonuu 5th adetotun street" />
          <ProfileInput label="Date of Birth" value="2/22/14" />
          <ProfileInput label="Gender" value="Male" />
        </ul>
      </section>
    </>
  );
}

export default Profile;
