import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section id="intro">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/images/profile.png"
            alt="kane portrait"
            width="300"
            height="300"
            quality="95"
            priority={true}
            className="w-[120px] h-[120px] object-cover rounded-full ring ring-white ring-offset-2 shadow-xl"
          />
          <span className="absolute bottom-0 right-0 text-4xl">👋🏻</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
