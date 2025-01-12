"use client";
import React from "react";
import MagnetLines from "@/src/blocks/Animations/MagnetLines/MagnetLines";
import Slider from "../components/uiverse/slider";
import ColorPicker from "../components/colorPicker/colorpicker";
import Select from "../components/uiverse/select";
function Page() {
  const [gridLev, setGridLev] = React.useState(false);

  const [template, setTemplate] = React.useState("Custom")

  React.useEffect(() => {

    setGridLev(false);
    setTimeout(() => {
      setGridLev(true);
    }, 10);
  }, [template]);

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
        <p>Templates</p>
        <Select templates={templates} template={template} setTemplate={setTemplate} setProps={setMagneticProps} />
        <div className="division"></div>
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
            setTimeout(() => {
              setGridLev(true);
            }, 10);
          }}
        />
        <div className="division" />
        <div className="grid grid-cols-2 gap-[10px] w-full">
          <Slider
            text={"Height"}
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
            text={"Width"}
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
        </div>
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
        <div className="division" />
        <div className="grid w-full gap-[10px] grid-cols-2">
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
        <div className="division"></div>
        <p>Reload if FPS issues.</p>
      </div>
    </div>
  );
}

export default Page;


const templates = [
  {
    name: "Custom",
    set: {
      gridSize: 15,
      containerHeight: "100vh",
      containerWidth: "100vw",
      lineColor: "#663399",
      lineWidth: 4,
      lineHeight: 30,
      baseAngle: -10,
      bgColor: "#0e0e0e",
      borderRadius: 45,
    },
  },
  {
    name: "Candy",
    set: {
      gridSize: 15,
      containerHeight: "100vh",
      containerWidth: "100vw",
      lineColor: "#993391",
      lineWidth: 20,
      lineHeight: 36,
      baseAngle: -10,
      bgColor: "#100910",
      borderRadius: 45,
    },
  },
  {
    name: "Sun",
    set: {
      gridSize: 15,
      containerHeight: "100vh",
      containerWidth: "100vw",
      lineColor: "#fff047",
      lineWidth: 1,
      lineHeight: 80,
      baseAngle: -10,
      bgColor: "#001a4d",
      borderRadius: 45,
    },
  },
  {
    name: "Aim",
    set: {
      gridSize: 20,
      containerHeight: "100vh",
      containerWidth: "100vw",
      lineColor: "#ff0000",
      lineWidth: 100,
      lineHeight: 1,
      baseAngle: -10,
      bgColor: "#000000",
      borderRadius: 45,
    },
  },
];