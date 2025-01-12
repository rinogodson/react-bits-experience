"use client";
import React from "react";
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import SpotlightCard from "@/src/blocks/Components/SpotlightCard/SpotlightCard";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import { motion } from "framer-motion";

import VariableProximity from "@/src/blocks/TextAnimations/VariableProximity/VariableProximity";

function Page() {
  const containerRef = React.useRef(null);
  return (
    <>
      <BlurText
        text="React Bits - Experience."
        delay={10}
        className="blurtext"
        direction="top"
        animateBy="letters"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        whileHover={{ opacity: 1, scale: 1.15 }}
        transition={{
          duration: 0.5,
          type: "spring",
          damping: "20",
          stiffness: "300",
        }}
        ref={containerRef}
        className="tagline w-full py-[50px]"
      >
        <VariableProximity
          label={"Have you seen your app dance and users giggle? Hover!"}
          className={"small-tagline"}
          fromFontVariationSettings="'wght' 600, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={200}
          falloff="exponential"
        />
        <br />
        <VariableProximity
          label={"Experience the power of React Animations here!"}
          className={"big-tagline"}
          fromFontVariationSettings="'wght' 600, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={200}
          falloff="exponential"
        />
      </motion.div>
      <div className="cardsCont">
        {experiences.map((item, index) => {
          return (
            <motion.div
              key={index + item.name}
              initial={{ opacity: 0, translateY: "100px", rotate: "10deg" }}
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
      <motion.div
        initial={{ opacity: 0, translateY: "100px", rotate: "10deg" }}
        animate={{ opacity: 1, translateY: "0px", rotate: "0deg" }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 250,
          damping: 12,
        }}
        style={{ marginBottom: "100px" }}
      >
        <SpotlightCard
          className="card"
          spotlightColor="rgba(255, 255, 255, 0.05)"
        >
          <h1 className="cardHeading" style={{ paddingInline: "20px" }}>
            More Coming Soon...
          </h1>
        </SpotlightCard>
      </motion.div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: "50px",
          width: "100%",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Made with power of Love & Open Source.</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            className="link"
            href="https://github.com/rinogodson/react-bits-experience"
          >
            Repo
          </a>
          <a
            className="link"
            href="https://github.com/rinogodson/react-bits-experience/blob/main/README.md"
          >
            README
          </a>
          <a
            className="link"
            href="https://github.com/rinogodson/react-bits-experience/blob/main/USERGUIDE.md"
          >
            GUIDE
          </a>
          <a className="link" href="https://github.com/rinogodson">
            Git Profile
          </a>
        </div>
      </div>
    </>
  );
}

export default Page;

const experiences = [
  {
    name: "Magnet Lines",
    link: "/magnetlines",
    image: "/image0.png",
  },
  {
    name: "Ballpit",
    link: "/ballpit",
    image: "/image7.png",
  },
  {
    name: "Waves",
    link: "/waves",
    image: "/image5.png",
  },
  {
    name: "Shape Blur",
    link: "/shapeblur",
    image: "/image4.png",
  },
  {
    name: "Blob Cursor",
    link: "/blobcursor",
    image: "/image3.png",
  },
  {
    name: "Splash Cursor",
    link: "/splashcursor",
    image: "/image1.png",
  },
];
