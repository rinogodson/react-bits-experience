"use client";
import React from "react";
import MagnetLines from "@/src/blocks/Animations/MagnetLines/MagnetLines";
import Slider from "../components/uiverse/slider";
import ColorPicker from "../components/colorPicker/colorpicker";
function Page() {
  const [gridLev, setGridLev] = React.useState(false);
  React.useEffect(() => {
    if (gridLev == false) {
      setGridLev(true);
    }
  }, [gridLev]);
  const [magneticProps, setMagneticProps] = React.useState({
    gridSize: 15,
    containerHeight: "100vh",
    containerWidth: "100vw",
    lineColor: "#663399",
    lineWidth: 4,
    lineHeight: 30,
    baseAngle: -10,
    bgColor: "#0e0e0e",
    borderRadius: 45,
  });
  return (
    <div className={`w-screen h-screen flex justify-between items-center`}>
      <div className={`w-[100vh]`}>
        {gridLev && (
          <MagnetLines
            bgColor={magneticProps.bgColor}
            rows={magneticProps.gridSize}
            columns={magneticProps.gridSize}
            containerHeight={magneticProps.containerHeight}
            containerWidth={magneticProps.containerWidth}
            lineColor={magneticProps.lineColor}
            lineWidth={magneticProps.lineWidth + "px"}
            lineHeight={magneticProps.lineHeight + "px"}
            baseAngle={magneticProps.baseAngle}
            borderRadius={magneticProps.borderRadius}
          />
        )}
      </div>

      <div className="settingsCont" style={{ position: "relative" }}>
        <p className="settingsTitle">{`-> Settings <-`}</p>
        <Slider
          minimum={1}
          maximum={20}
          text={"Size"}
          value={magneticProps.gridSize}
          onChangeFn={(e) => {
            if (
              parseInt(e.target.value) > 0 &&
              parseInt(e.target.value) <= 20
            ) {
              setMagneticProps((prev) => {
                return { ...prev, gridSize: parseInt(e.target.value) };
              });
            }
            setGridLev(false);
          }}
        />

        <Slider
          text={"Line Height"}
          value={magneticProps.lineHeight}
          onChangeFn={(e) => {
            if (
              parseInt(e.target.value) > 0 &&
              parseInt(e.target.value) <= 100
            ) {
              setMagneticProps((prev) => {
                return { ...prev, lineHeight: parseInt(e.target.value) };
              });
            }
          }}
        />
        <Slider
          text={"Line Width"}
          value={magneticProps.lineWidth}
          onChangeFn={(e) => {
            if (
              parseInt(e.target.value) > 0 &&
              parseInt(e.target.value) <= 100
            ) {
              setMagneticProps((prev) => {
                return { ...prev, lineWidth: parseInt(e.target.value) };
              });
            }
          }}
        />
        <Slider
          minimum={0}
          maximum={100}
          text={"Border Radius"}
          value={magneticProps.borderRadius}
          onChangeFn={(e) => {
            if (
              parseInt(e.target.value) > 0 &&
              parseInt(e.target.value) <= 100
            ) {
              setMagneticProps((prev) => {
                return { ...prev, borderRadius: parseInt(e.target.value) };
              });
            }
          }}
        />
        <div className="grid w-full gap-[8px] grid-cols-2">
          <ColorPicker
            label="Color"
            value={magneticProps.lineColor}
            onChangeFn={(e) => {
              setMagneticProps((prev) => {
                return { ...prev, lineColor: e.target.value };
              });
            }}
          />
          <ColorPicker
            label="BG Color"
            value={magneticProps.bgColor}
            onChangeFn={(e) => {
              setMagneticProps((prev) => {
                return { ...prev, bgColor: e.target.value };
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
