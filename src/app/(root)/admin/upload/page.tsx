import Input from "@/components/Input";
import Image from "next/image";
import React from "react";

function Upload() {
  return (
    <>
      <section className="p-2 mx-2 text-xl">Upload a new Product</section>
      <main
        className="flex flex-col gap-1 shadow-md mx-4 rounded-md border border-white  justify-center items-center"
        style={{
          minHeight: "70vh",
        }}
      >
        <Image
          src={"/undraw_files-uploading_qf8u.svg"}
          alt="image upload"
          width={150}
          height={150}
        />

        <Input label="Product Name" />
        <Input label="Product Description" />
        <Input label="Product Image" type="file" />
      </main>
    </>
  );
}

export default Upload;
