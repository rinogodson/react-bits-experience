"use client";
import React from "react";
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import SpotlightCard from "@/src/blocks/Components/SpotlightCard/SpotlightCard";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import { motion, AnimatePresence } from "framer-motion";

import VariableProximity from "@/src/blocks/TextAnimations/VariableProximity/VariableProximity";
import { Book, BookOpenText, CircleX, X } from "lucide-react";

function Page() {
  const containerRef = React.useRef(null);
  const [modal, setModal] = React.useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  const [clickingDoc, setClickingDoc] = React.useState(false);
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
                <div className="flex justify-between items-end w-full">
                  <a className="cardBt" href={item.link}>
                    <ShinyText
                      text={"Click to try."}
                      speed={3}
                      className="custom-class"
                    />
                  </a>
                  <a
                    className="cardBt"
                    style={{
                      color: "#494949",
                      display: "flex",
                      gap: "7px",
                      fontSize: "18px",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px 12px",
                      height: "fit-content",
                    }}
                    onMouseDown={() => setClickingDoc(true)}
                    onMouseUp={() => {
                      setTimeout(() => {
                        setClickingDoc(false);
                      }, 500);
                    }}
                    onClick={() => {
                      setModalIndex(index);
                      setModal(true);
                    }}
                  >
                    {clickingDoc ? <BookOpenText /> : <Book size={20} />}
                    <span>User Guide</span>
                  </a>
                </div>
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
        <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0.7, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="modalcontainer"
          >
            <motion.div
              initial={{ translateY: "1000px", scaleX: 0 }}
              animate={{ translateY: "0px", scaleX: 1 }}
              exit={{ translateY: "1000px", scaleX: 0 }}
              transition={{ duration: 0.3 }}
              className="modal"
            >
              <span style={{ pointerEvents: "all" }}>{guides[modalIndex]}</span>
              <button
                className="link"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap:"5px",
                  position: "absolute",
                  justifySelf: "flex-end",
                  boxShadow: "0 0 20px 0px rgba(0,0,0,0.4)",
                }}
                onClick={()=>setModal(false)}
              >
                <X size={20} />
                <span>Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
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

const guides = [
  <>
    <h1>Magnet Lines</h1>
    <p>
      Magnet Lines are easy to use. These lines move when you move your cursor
      over them. For added satisfaction, you can explore various templates like
      Candy, Sun, and Aim. Additionally, you can customize your magnet lines to
      your preferences, including options for size, height, width, border
      radius, color, and background color.
    </p>
    <br />
    <p>
      We used the color #663399, famously known as "Rebecca Purple." If you're
      unfamiliar with its story, try Googling "Rebecca Purple" for more details.
    </p>

    <h2>Size</h2>
    <p>
      This setting lets you increase or decrease the grid size of the magnet
      lines to suit your preferences.
    </p>

    <h2>Height & Width</h2>
    <p>
      Adjust the size of individual magnet lines by modifying their height and
      width.
    </p>

    <h2>Border Radius</h2>
    <p>
      Change the border radius of individual lines as you like using this
      feature.
    </p>

    <h2>Color</h2>
    <p>
      The Color option allows you to pick your favorite color for the lines.
    </p>

    <h2>BG Color</h2>
    <p>Use the BG Color option to change the background color.</p>

    <h2>Templates</h2>
    <h3>Candy</h3>
    <p>
      The Candy template adds a playful and cute look to the screen, offering a
      satisfying visual experience.
    </p>

    <h3>Sun</h3>
    <p>
      The Sun template features incredible animations that resemble sun rays,
      providing a refreshing effect for the mind.
    </p>

    <h3>Aim</h3>
    <p>
      The Aim template creates an amazing experience where the magnet lines
      align and point toward your mouse cursor, inspired by a gun’s aiming
      scope.
    </p>
  </>,

  <>
    <h1>Ballpit</h1>
    <p>
      Ballpit is an incredible and fun feature designed for self-entertainment
      and to refresh your mind.
    </p>

    <h2>How to Use</h2>
    <h3>Count</h3>
    <p>The Count option lets you adjust the number of balls on the screen.</p>

    <h3>Color</h3>
    <p>
      Select up to three colors (Color 1, 2, and 3) to customize the appearance
      of the balls, making them more beautiful.
    </p>

    <h3>Min. Size & Max. Size</h3>
    <p>
      The Minimum Size and Maximum Size options let you control the size of the
      balls. As the names suggest, these settings define the smallest and
      largest sizes of the balls.
    </p>

    <h3>Light Size</h3>
    <p>Change the size of the light ball using the Light Size option.</p>

    <h3>Hide Light & Show Light</h3>
    <p>This option allows you to toggle the visibility of the light ball.</p>

    <h3>Light Intensity</h3>
    <p>Adjust the brightness of the light using the Light Intensity option.</p>

    <h3>Gravity</h3>
    <p>
      Change the movement behavior of the balls by modifying the gravity
      setting.
    </p>

    <h3>Disable Gravity & Enable Gravity</h3>
    <p>Toggle gravity on or off with this option.</p>

    <h2>Templates</h2>
    <h3>Lava</h3>
    <p>
      The Lava template transforms the theme into a fiery visualization of lava
      balls.
    </p>

    <h3>Gothic</h3>
    <p>
      Inspired by gothic themes, this template creates a spooky, horror-like
      atmosphere.
    </p>

    <h3>Marbles</h3>
    <p>
      The Marbles template gives the balls a marble-like appearance, evoking the
      feel of playing with real marbles.
    </p>
  </>,

  <>
    <h1>Waves</h1>
    <p>
      Waves offer a satisfying visual effect, resembling a polyester sheet-like
      texture with vertical lines extending from the top to the bottom of the
      screen, moving like a net.
    </p>

    <h2>Wave Color</h2>
    <p>Customize the color of the waves with the Wave Color option.</p>

    <h2>BG Color</h2>
    <p>Change the background color to your liking using this option.</p>

    <h2>Amplitude</h2>
    <p>
      Adjust the size of the waves using the Amplitude setting. This can make
      the texture more vibrant.
    </p>

    <h2>Friction</h2>
    <p>
      Increase the Friction setting for a more satisfying and flexible wave
      movement.
    </p>

    <h2>SpeedX & SpeedY</h2>
    <p>
      SpeedX controls the horizontal speed of the waves, while SpeedY controls
      their vertical speed.
    </p>

    <h2>GapX & GapY</h2>
    <p>
      GapX adjusts the horizontal spacing between the waves, and GapY adjusts
      the vertical spacing.
    </p>
  </>,

  <>
    <h1>Shape Blur</h1>
    <p>
      Shape Blur creates a ghostly blur effect that can be applied to shapes.
    </p>

    <h2>Shape Size</h2>
    <p>This setting allows you to adjust the size of the shapes.</p>

    <h2>Border Radius</h2>
    <p>Change the border radius of the shapes using this option.</p>

    <h2>Effect Size</h2>
    <p>
      Effect Size adjusts the scale of the blur effect, allowing you to apply it
      over wider or smaller areas.
    </p>

    <h2>Effect Edge</h2>
    <p>
      Effect Edge controls the smoothness of the blur effect's edges. Increasing
      the value results in smoother edges, while decreasing it creates sharper
      edges.
    </p>

    <h2>Squid Game Mode</h2>
    <p>
      This special template features shapes inspired by the Korean series "Squid
      Game," including circles, squares, and triangles.
    </p>
  </>,

  <>
    <h1>Blob Cursor</h1>
    <p>Blob Cursor adds a slime-like blob that follows your mouse movements.</p>

    <h2>Blob Color</h2>
    <p>Use this option to select the color of the blob.</p>

    <h2>BG Color</h2>
    <p>Change the background color with this option.</p>

    <h2>Templates</h2>
    <h3>Gum</h3>
    <p>The Gum template gives the blob a stretchy, gum-like appearance.</p>

    <h3>Blobby</h3>
    <p>
      The Blobby template adds a more playful and satisfying color effect to the
      blob.
    </p>
  </>,
  <>
    <h1>Splash Cursor</h1>
    <p>
      Splash Cursor features a fluid-like object that moves toward your cursor,
      offering a refreshing visual experience.
    </p>

    <h2>Radius</h2>
    <p>Adjust the radius of the fluid with this option.</p>
  </>,
];


