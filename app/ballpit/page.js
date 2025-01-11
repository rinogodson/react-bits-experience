"use client";
import React, { useEffect } from "react";
import Ballpit from "@/src/blocks/Backgrounds/Ballpit/Ballpit";
import { Earth, Lightbulb, LightbulbOff } from "lucide-react";
import Slider from "../components/uiverse/slider";
import ColorPicker from "../components/colorPicker/colorpicker";
import Toggle from "../components/toggle/toggle";
import { color } from "framer-motion";

function Page() {
  const [showBalls, setShowBalls] = React.useState(true);
  console.log("SHOWBALLS", showBalls);
  
  const [ballProps, setBallProps] = React.useState({
    count: 150,
    gravity: 1,
    friction: 0.85,
    wallBounce: 0.95,
    followCursor: false,
    colors: ["#FFA555", "#FF65E4", "#7197FD"],
    lightIntensity: 250,
    minSize: 0.5,
    maxSize: 1.2,
    size0: 2,
    bgColor: "#000"
  });

  console.log(ballProps);
  

  useEffect(()=>{
    setShowBalls(false)
    setTimeout(() => {
      setShowBalls(true)
    }, 1);
  }, [showBalls, ballProps.colors, ballProps.count, ballProps.followCursor, ballProps.friction, ballProps.gravity, ballProps.lightIntensity, ballProps.maxSize, ballProps.minSize, ballProps.size0, ballProps.wallBounce ])

  return (
    <div className="flex justify-between items-center w-screen h-screen">
      <div className="ballCont" style={{ backgroundColor: ballProps.bgColor }}>
        {showBalls && (
          <Ballpit
            size0={ballProps.size0}
            count={ballProps.count}
            colors={ballProps.colors}
            minSize={ballProps.minSize}
            gravity={ballProps.gravity}
            maxSize={ballProps.maxSize}
            friction={ballProps.friction}
            wallBounce={ballProps.wallBounce}
            followCursor={ballProps.followCursor}
            lightIntensity={ballProps.lightIntensity}
          />
        )}
      </div>
      <div className="settingsCont" style={{ position: "relative" }}>
        <p className="settingsTitle">{`-> Settings <-`}</p>
        <div
          className="w-full grid gap-[10px]"
          style={{ gridTemplateColumns: "1fr 110px" }}
        >
          <Slider
            minimum={25}
            maximum={200}
            text={"Count"}
            value={ballProps.count}
            onChangeFn={(e) => {
              if (
                parseInt(e.target.value) >= 25 &&
                parseInt(e.target.value) <= 200
              ) {
                setBallProps((prev) => {
                  return { ...prev, count: parseInt(e.target.value) };
                });
              }
            }}
          />
          <Toggle
            text={[
              <span key={"h/s"}>
                {ballProps.followCursor ? "Hide" : "Show"}
              </span>,
              <br key={"br//"} />,
              <span key={"light."}>Light</span>,
            ]}
            value={ballProps.followCursor}
            onChangeFn={() =>
              setBallProps((prev) => ({
                ...prev,
                followCursor: !prev.followCursor,
              }))
            }
          >
            {ballProps.followCursor ? <Lightbulb size={30} /> : <LightbulbOff size={30}/>}
          </Toggle>
        </div>
        <div className="division"/>
        <div className="grid w-full gap-[10px] grid-cols-3">
          <ColorPicker
            label="Color 1"
            value={ballProps.colors[0]}
            onChangeFn={(e) => {
              setBallProps((prev) => {
                return {
                  ...prev,
                  colors: prev.colors.map((item, i) =>
                    i == 0 ? e.target.value : item
                  ),
                };
              });
            }}
          />
          <ColorPicker
            label="Color 2"
            value={ballProps.colors[1]}
            onChangeFn={(e) => {
              setBallProps((prev) => {
                return {
                  ...prev,
                  colors: prev.colors.map((item, i) =>
                    i == 1 ? e.target.value : item
                  ),
                };
              });
            }}
          />
          <ColorPicker
            label="Color 3"
            value={ballProps.colors[2]}
            onChangeFn={(e) => {
              setBallProps((prev) => {
                return {
                  ...prev,
                  colors: prev.colors.map((item, i) =>
                    i == 2 ? e.target.value : item
                  ),
                };
              });
            }}
          />
        </div>
        <div className="division"/>
        <div className="grid grid-cols-2 gap-[10px] w-full">
          <Slider
            minimum={20}
            maximum={ballProps.maxSize * 100}
            text={"Min. Size"}
            value={Math.round(ballProps.minSize * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val >= 0.2 && val <= ballProps.maxSize) {
                setBallProps((prev) => {
                  return { ...prev, minSize: val };
                });
              }
            }}
          />
          <Slider
            minimum={ballProps.minSize * 100}
            maximum={200}
            text={"Max. Size"}
            value={Math.round(ballProps.maxSize * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val <= 2 && val >= ballProps.minSize) {
                setBallProps((prev) => {
                  return { ...prev, maxSize: val };
                });
              }
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px] w-full">
          <Slider
            minimum={10}
            maximum={20}
            text={"Light Size"}
            value={ballProps.size0 * 10}
            onChangeFn={(e) => {
              if (
                parseFloat(e.target.value) >= 10 &&
                parseFloat(e.target.value) <= 20
              ) {
                setBallProps((prev) => {
                  return { ...prev, size0: parseFloat(e.target.value)/10 };
                });
              }
            }}
          />
          <Slider
            minimum={25}
            maximum={500}
            text={"Light Intensity"}
            value={ballProps.lightIntensity}
            onChangeFn={(e) => {
              if (
                parseInt(e.target.value) >= 25 &&
                parseInt(e.target.value) <= 500
              ) {
                setBallProps((prev) => {
                  return { ...prev, lightIntensity: parseInt(e.target.value) };
                });
              }
            }}
          />
        </div>
        <div className="division"/>
        <div className="w-full grid gap-[10px]"
          style={{ gridTemplateColumns: "110px 1fr" }}>
        <Toggle
            text={[
              <span key={"d/e"}>
                {!(ballProps.gravity>0) ? "Enable" : "Disable"}
              </span>,
              <br key={"br//2"} />,
              <span key={"gravity."}>Gravity</span>,
            ]}
            value={(ballProps.gravity>0)}
            onChangeFn={() =>
              setBallProps((prev) => ({
                ...prev,
                gravity: prev.gravity>0 ? 0 : 1,
              }))
            }
          >
            <Earth/>
          </Toggle>
        <Slider
            minimum={0}
            maximum={100}
            text={"Gravity"}
            value={Math.round(ballProps.gravity * 100)}
            onChangeFn={(e) => {
              if (
                parseFloat(e.target.value) >= 0 &&
                parseFloat(e.target.value) <= 100
              ) {
                setBallProps((prev) => {
                  return { ...prev, gravity: parseInt(e.target.value)/100 };
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
