"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import logo from "/public/logo.png";
import Image from "next/image";
import image1 from "/public/1.jpg";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import DownloadButton from "./DownloadButton";

export function ImagesSliderDemo() {
  const images = [image1, image2, image3, image4, image5].map(
    (image) => image.src
  );

  return (
    <div className="relative">
      <ImagesSlider className="h-[100vh]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Schedule Your Meeting Today with XOP Networks!
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-[#ABBB22]/20 border-[#ABBB22]/500 text-white mx-auto text-center rounded-full relative mt-4">
            <DownloadButton />
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#ABBB22] to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <div className="absolute top-5 left-5 w-40 h-20 ">
        <Image src={logo} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
}
