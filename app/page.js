"use client";
import React from "react";
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import SpotlightCard from "@/src/blocks/Components/SpotlightCard/SpotlightCard";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import { motion } from "framer-motion";

function Page() {
  return (
    <>
      <BlurText
        text="React Bits - Experience."
        delay={10}
        className="blurtext"
        direction="top"
        animateBy="letters"
      />
      <motion.p
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.8, scaleX: 1 }}
        whileHover={{ opacity: 1, scaleX: 1.15 }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: "20",
          stiffness: "300",
        }}
        className="tagline"
      >
        Have you seen your app dance and users giggle?
        <br />
        <span style={{ fontSize: "30px" }}>
          Experience the power of React Animations here!
        </span>
      </motion.p>
      <div className="cardsCont">
        {experiences.map((item, index) => {
          return (
            <motion.div
              key={index + item.name}
              initial={{ opacity: 0, translateY: "100px", rotate: "2deg" }}
              animate={{ opacity: 1, translateY: "0px", rotate: "0deg" }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 250,
                damping: 12,
              }}
            > 
              <SpotlightCard
                key={index}
                className="card"
                spotlightColor="rgba(255, 255, 255, 0.05)"
              >
                <img className="cardImg" src={item.image} />
                <h1 className="cardHeading">{item.name}</h1>
                <a className="cardBt" href={item.link}>
                  <ShinyText
                    text={"Click to try."}
                    speed={3}
                    className="custom-class"
                  />
                </a>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Page;

const experiences = [
  {
    name: "Magnet Lines",
    link: "/magnetlines",
    image: "https://cloud-q4n1tz09u-hack-club-bot.vercel.app/0image.png",
  },
  {
    name: "Ballpit",
    link: "/ballpit",
    image: "https://cloud-ap6m65cq7-hack-club-bot.vercel.app/0image.png",
  },
  {
    name: "Hyperspeed",
    link: "/hyperspeed",
    image: "https://cloud-59ivdls58-hack-club-bot.vercel.app/075cb405aa96a0f0040a2f9579afa151ba10371df104120c0e21296ad21372da8.png",
  },
  {
    name: "Waves",
    link: "/waves",
    image: "https://cloud-1yrvxo399-hack-club-bot.vercel.app/0image.png",
  },
  {
    name: "Noise",
    link: "/noise",
    image: "https://placehold.co/410x410/2B2B2B/FEFEFE",
  },
  {
    name: "Shape Blur",
    link: "/shapeblur",
    image: "https://placehold.co/410x410/2B2B2B/FEFEFE",
  },
  {
    name: "Blob Cursor",
    link: "/blobcursor",
    image:
      "https://cloud-fh24cv1xr-hack-club-bot.vercel.app/0tiff_to_png.png",
  },
  {
    name: "Stack",
    link: "/stack",
    image: "https://placehold.co/410x410/2B2B2B/FEFEFE",
  },
  {
    name: "Variable Proximity",
    link: "variableproximity",
    image: "https://placehold.co/410x410/2B2B2B/FEFEFE",
  },
  {
    name: "True Focus",
    link: "/truefocus",
    image: "https://placehold.co/410x410/2B2B2B/FEFEFE",
  },
  {
    name: "Splash Cursor",
    link: "/splashcursor",
    image: "https://cloud-2jwq0ujd3-hack-club-bot.vercel.app/0image.png",
  },
];
