import React from "react";

function Home() {
  return (
    <>
      <div>
        <section className=" bg-dotted-pattern bg-contain px-3 py-5 md:py-10">
          <div className="wrapper  grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
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
                <button type="button" className="bg-orange-400 btn font-bold">
                  Explore now
                </button>
              </p>
            </div>

            {/* <Image
              alt="hero"
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
              width={1000}
              height={1000}
              src={"/assets/images/hero.png"}
            /> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
