import { AdminRoutes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AdminRoute({ imageUrl, routeText, href }: AdminRoutes) {
  return (
    <Link
      href={href}
      className="p-2 mx-2  w-72 h-72 border flex flex-col justify-between  gap-4 rounded-md cursor-pointer hover:bg-base-300  transition"
    >
      <Image src={imageUrl} alt="upload-image" width={200} height={200} />
      <p className="text-center ">{routeText}</p>
    </Link>
  );
}

export default AdminRoute;
