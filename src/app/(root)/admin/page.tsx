import AdminRoute from "@/components/AdminRoute";
import Image from "next/image";
import React from "react";

function Admin() {
  return (
    <div>
      <section className="p-3 mx-2 text-xl">Welcome Admin</section>
      <div
        className="functions flex flex-col gap-2 md:flex-row justify-center items-center "
        style={{
          minHeight: "70vh",
        }}
      >
        <AdminRoute
          href="/admin/upload"
          routeText="Upload A new Product"
          imageUrl="/upload1.svg"
        />
        <AdminRoute
          href="/admin/delete"
          routeText="Delete A Product"
          imageUrl="/delete.svg"
        />
        <AdminRoute
          href="/admin/edit"
          routeText="Edit A Product"
          imageUrl="/shop.svg"
        />
        <AdminRoute
          href="/admin/categories"
          routeText="Add A New Category"
          imageUrl="/catadd.svg"
        />
      </div>
    </div>
  );
}

export default Admin;
