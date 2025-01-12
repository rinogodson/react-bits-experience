"use client"
import React from 'react'
import Slider from '../components/uiverse/slider'
import SplashCursor from '@/src/blocks/Animations/SplashCursor/SplashCursor'

function Page() {
  const [splashProps, setSplashProps] = React.useState({
    simResolution: 16,
    pressure: 0.05,
    curls: 3,
    radius: 0.4,
    force: 5500,
    colorSpeed: 10,
  })
  console.log(splashProps);
  

  const [showSplash, setShowSplash] = React.useState(false);
  React.useEffect(()=>{
    setShowSplash(false);
    setTimeout(() => {
      setShowSplash(true);
    }, 200);
  }, [splashProps.colorSpeed, splashProps.curls, splashProps.force, splashProps.pressure, splashProps.radius, splashProps.simResolution])
  return (
    <div>
      <SplashCursor
      SIM_RESOLUTION = {splashProps.simResolution}
      PRESSURE = {splashProps.pressure}
      CURL = {splashProps.curls}
      SPLAT_RADIUS = {splashProps.radius}
      SPLAT_FORCE = {splashProps.force}
      COLOR_UPDATE_SPEED = {splashProps.colorSpeed}
      />

<div className="settingsCont" style={{ position: "relative" }}>
        <p className="settingsTitle">{`-> Settings <-`}</p>
        <div
          className="w-full grid gap-[10px]"
          style={{ gridTemplateColumns: "1fr 110px" }}
        >
          {/* <Slider
            minimum={25}
            maximum={200}
            text={"Radius"}
            value={splashProps.radius}
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
          /> */}
          
          <Slider
            minimum={40}
            maximum={100}
            text={"Radius"}
            value={Math.round(splashProps.radius * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val >= 0.4 && val <= 1) {
                setSplashProps((prev) => {
                  return { ...prev, radius: val };
                });
              }
            }}
          />
        </div>
        <div className="division"></div>
        <p>Reload if FPS issues.</p>
      </div>
    </div>

    
  )
}

export default Page
