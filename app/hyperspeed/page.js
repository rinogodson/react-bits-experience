"use client";
import Hyperspeed from "@/src/blocks/Backgrounds/Hyperspeed/Hyperspeed";
import React from "react";

function Page() {
  const [effectOptions, setEffectOptions] = React.useState({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10, //YES
    islandWidth: 10, // YES
    lanesPerRoad: 3, 
    fov: 90, // YES
    fovSpeedUp: 150,  
    speedUp: 2, // YES
    carLightsFade: 0.4,
    totalSideLightSticks: 20, // YES
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: "#080808", // YES      
      islandColor: "#0a0a0a", // YES
      background: "#000000", // YES
      shoulderLines: "#ffffff",
      brokenLines: "#ffffff",
      leftCars: ["#d856bf", "#6750a2"], // YES
      rightCars: ["#03b3c3", "#0e5ea5"], // YES            
      sticks: "#03b3c3", // YES
    },
  })
  return (
    <div className="w-screen h-screen flex justify-between items-center">      
      <div className="w-[100vh] aspect-square">
        <Hyperspeed
          effectOptions={effectOptions}
        />
      </div>
      <div className="settingsCont" style={{ position: "relative" }}>
        <p className="settingsTitle">{`-> Settings <-`}</p>
        <p style={{fontSize:"10px"}}>Click & Hold the Animation Window.</p>
      </div>
    </div>
  );
}

export default Page;