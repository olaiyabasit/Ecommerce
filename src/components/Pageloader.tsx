import Image from "next/image";
import React from "react";

function Pageloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-30">
      <Image
        src={"/shop2.svg"}
        alt="loader"
        className="animate-bounce"
        width={250}
        height={250}
      />
    </div>
  );
}

export default Pageloader;
