import React, { useEffect, useState } from "react";
import { useRoute } from "../../Context";
import Arrow from "../../Images/Arrow.svg";
import Image from "next/image";

export const About = () => {
  const { route } = useRoute();
  const [slide, setSlide] = useState("");
  const [isHidden, setIsHidden] = useState("hidden");
  const { setRoute } = useRoute();

  function changePage() {
    setTimeout(() => {
      setRoute("skills");
    }, 150);
    setSlide("slideUp");
  }
  useEffect(() => {
    if (route === "about") {
      setSlide("slide-up-bottom");
      setTimeout(() => {
        setIsHidden("");
      }, 0);
    }
  }, [route]);

  return (
    <div
      className={`${slide} h-full pl-6 pr-3 pt-28 md:pt-32 text-justify leading-6 justify-center text-white-50 font-poppins ${isHidden}`}
    >
      <h1 className="text-3xl md:pl-56 md:text-8xl">
        <span className="text-aqua-600  ">M</span>e &#38;{" "}
        <span className="text-aqua-600">M</span>yself
      </h1>
      <div className="h-5/6 overflow-y-scroll md:w-11/12 inline-block pb-">
        <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">
          I&apos;m a <span className="text-aqua-600">Software Developer</span>.
          Over the past 2+ years, I&apos;ve honed my expertise in the dynamic
          realm of the MERN stack, spearheading the development of numerous
          projects that have not only fortified my skills but also pushed the
          boundaries of innovation. I thrive on versatility and am always eager
          to embrace new frameworks and technologies . While I was working on
          different tech stacks, to give a kick start to my career I also did
          some freelancing work which helped me to explore different domains
          like <span className="text-aqua-600">Shopify app development</span>,{" "}
          <span className="text-aqua-600">DevOps</span> and{" "}
          <span className="text-aqua-600">Securities.</span>
        </p>

        <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">
          {" "}
          Joining Neog, a premier web development bootcamp, was a pivotal moment
          in my career. Here, I immersed myself in the
          <span className="text-aqua-600"> React ecosystem</span>, delving into
          <span className="text-aqua-600"> UI/UX principles</span>, optimizing
          <span className="text-aqua-600"> web performance</span>, and mastering
          essential <span className="text-aqua-600">tooling</span>, equipping
          myself with the latest technologies and techniques.
        </p>

        <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">
          {" "}
          I staunchly believe in the power of Project-Based Learning as the
          cornerstone of skill acquisition, having built
          <span className="text-aqua-600"> 50+ projects </span>
          to date. Consequently, I&apos;ve curated a robust portfolio brimming
          with projects spanning a myriad of technologies, each a testament to
          my unwavering commitment to excellence.
        </p>

        <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">
          Outside of work, I&apos;m fueled by basketball, stand-up comedy, and
          chess. These passions fuel my creativity and drive for excellence.
        </p>
      </div>
      <button
        onClick={changePage}
        className={`bounce w-16 h-16 btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}
      >
        <Image src={Arrow} alt="arrow-icon" />
      </button>
    </div>
  );
};
