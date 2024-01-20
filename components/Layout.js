import React from "react";
import Image from "next/image";
import { Nav } from "./Nav";
import Compass from "../Images/BackgroundTexture/Compass.svg";
import Database from "../Images/BackgroundTexture/Database.svg";
import Graphql from "../Images/BackgroundTexture/Graphql.svg";
import Javascript from "../Images/BackgroundTexture/Javascript.svg";
import Next from "../Images/BackgroundTexture/Next.svg";
import Palette from "../Images/BackgroundTexture/Palette.svg";
import ReactSvg from "../Images/BackgroundTexture/React.svg";
import Scale from "../Images/BackgroundTexture/Scale.svg";
import Tailwind from "../Images/BackgroundTexture/Tailwind.svg";

export const Layout = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      {children}
      <span className="index-low absolute md:top-4 md:right-60 opacity-40">
        <Image
          src={Compass}
          alt=""
          className="up-down-container border-red-100 border-2"
        ></Image>
      </span>
      <span className="index-low absolute md:bottom-16 r150 mb:bottom-16 mb:left-36 mb:w-24 opacity-40">
        <Image src={Database} alt=""></Image>
      </span>
      <span className="index-low absolute md:top-56 md:right-24 mb:bottom-36 mb:left-12 mb:w-12 opacity-40">
        <Image src={ReactSvg} alt="" className="rotation-container"></Image>
      </span>
      <span className="index-low absolute md:top-60 r150 mb:top-36 mb:right-16 opacity-40">
        <Image src={Javascript} alt="" className="shake-container"></Image>
      </span>
      <span className="index-low absolute md:bottom-10 md:right-96 mb:top-20 right-10 mb:w-24 opacity-45">
        <Image src={Next} alt="" className="up-down-container"></Image>
      </span>
      <span className="index-low absolute md:top-6 md:right-16 mb:bottom-4 mb:left-4 mb:w-24 opacity-40">
        <Image src={Palette} alt="" className=""></Image>
      </span>
      <span className="index-low absolute md:top-6 r100 opacity-40">
        <Image
          src={Graphql}
          alt=""
          className="rotation-container-noborder"
        ></Image>
      </span>
      <span className="index-low absolute md:bottom-24 md:right-36 mb:hidden opacity-40">
        <Image src={Scale} alt="" className="up-down-container"></Image>
      </span>
      <span className="index-low absolute md:top-80 md:right-96 mb:top-24 mb:-right-8 opacity-45">
        <Image src={Tailwind} alt="" className="up-down-container"></Image>
      </span>
    </div>
  );
};
