import React from "react";

function Home() {
  return (
    <>
      <section className=" bg-dotted-pattern bg-contain  relative w-full h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 text-center">
          <div className="flex flex-col justfy-center gap-8">
            <h1 className="font-bold text-5xl">Discover What Moves You</h1>
            <p className="p-regular-20 md:p-regular-24">
              <span className="text-md">
                Style . Function . Passion . All in one place.
              </span>
              <br />
              <span>
                From everyday essentials to rare finds to trending fits .
                Elevate your lifestyle with us.{" "}
              </span>
            </p>
            <p className=" italic text-[12px]">
              Shop Smarter. Live better. Love what you own
            </p>
            <p>
              <button
                type="button"
                className=" glass text-white btn font-bold  border-gray-900 hover:font-bold transition"
              >
                Explore now
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
