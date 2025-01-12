"use client";
import React from "react";
import Waves from "@/src/blocks/Backgrounds/Waves/Waves";
import Slider from "../components/uiverse/slider";
import ColorPicker from "../components/colorPicker/colorpicker";

import Select from "../components/uiverse/select";
import {
  AudioWaveform,
  ChartNoAxesGantt,
  FoldHorizontal,
  FoldVertical,
  Orbit,
  Rabbit,
  Settings,
  Settings2,
  Turtle,
} from "lucide-react";

function Page() {
  const [showWave, setShowWave] = React.useState(false);

  const [template, setTemplate] = React.useState("Custom");

  const [waveProps, setWaveProps] = React.useState({
    lineColor: "#3b3b3b",
    bgColor: "#000000",
    waveSpeedX: 0.02,
    waveSpeedY: 0.01,
    waveAmp: 40,
    friction: 0.9,
    tension: 0.01,
    xGap: 12,
    yGap: 36,
  });

  React.useEffect(() => {
    setShowWave(false);
    setTimeout(() => {
      setShowWave(true);
    }, 10);
  }, [
    waveProps.bgColor,
    waveProps.friction,
    waveProps.lineColor,
    waveProps.tension,
    waveProps.waveAmp,
    waveProps.waveSpeedX,
    waveProps.waveSpeedY,
    waveProps.xGap,
    waveProps.yGap,
  ]);

  React.useEffect(() => {
    const index = templates.findIndex((item) => item.name === template);
    setWaveProps(templates[index].set);
  }, [template]);

  const handleChange = (e) => {
    setTemplate(e.target.value);
  };
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <div className="w-[100vh] aspect-square">
        {showWave && (
          <Waves
            lineColor={waveProps.lineColor}
            backgroundColor={waveProps.bgColor}
            waveSpeedX={waveProps.waveSpeedX}
            waveSpeedY={waveProps.waveSpeedY}
            waveAmpX={waveProps.waveAmp}
            waveAmpY={20}
            friction={waveProps.friction}
            tension={waveProps.tension}
            maxCursorMove={120}
            xGap={waveProps.xGap}
            yGap={waveProps.yGap}
          />
        )}
      </div>

      <div className="settingsCont" style={{ position: "relative" }}>
        <div className="settingsTitle flex items-center justify-center flex-row gap-[15px]">
          <Settings size={30} />
          <p className="flex justify-center items-center">{`Settings`}</p>
        </div>
        <p className="templates">
          <Settings2 size={18}/> Templates
        </p>
        <Select
          templates={templates}
          template={template}
          handleChange={handleChange}
        />
        <div className="division"></div>
        <div className="w-full grid grid-cols-2 gap-[10px]">
          <ColorPicker
            label={"Wave Color"}
            value={waveProps.lineColor}
            onChangeFn={(e) =>
              setWaveProps((prev) => {
                return { ...prev, lineColor: e.target.value };
              })
            }
          />
          <ColorPicker
            label={"BG Color"}
            value={waveProps.bgColor}
            onChangeFn={(e) =>
              setWaveProps((prev) => {
                return { ...prev, bgColor: e.target.value };
              })
            }
          />
        </div>
        <div className="division"></div>
        <Slider
          icon={<AudioWaveform size={20} />}
          minimum={0}
          maximum={100}
          text={"Amplitude"}
          value={waveProps.waveAmp}
          onChangeFn={(e) => {
            setWaveProps((prev) => {
              let val = parseInt(e.target.value);
              if (val >= 0 && val <= 100) {
                return { ...prev, waveAmp: parseInt(e.target.value) };
              }
            });
          }}
        />
        <div className="division"></div>
        <div className="grid grid-cols-2 gap-[10px]">
          <Slider
            icon={<Orbit size={20} />}
            minimum={0}
            maximum={99}
            text={"Friction"}
            value={Math.round(waveProps.friction * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val <= 0.99 && val >= 0) {
                setWaveProps((prev) => {
                  return { ...prev, friction: parseFloat(val) };
                });
              }
            }}
          />
          <Slider
            icon={<ChartNoAxesGantt size={20} />}
            minimum={0}
            maximum={10}
            text={"Tension"}
            value={Math.round(waveProps.tension * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val <= 0.1 && val >= 0.01) {
                setWaveProps((prev) => {
                  return { ...prev, tension: parseFloat(val) };
                });
              }
            }}
          />
        </div>
        <div className="division"></div>
        <div className="grid grid-cols-2 gap-[10px]">
          <Slider
            icon={
              waveProps.waveSpeedX < 0.05 ? (
                <Turtle size={20} />
              ) : (
                <Rabbit size={20} />
              )
            }
            minimum={1}
            maximum={10}
            text={"SpeedX"}
            value={Math.round(waveProps.waveSpeedX * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val <= 0.1 && val >= 0.01) {
                setWaveProps((prev) => {
                  return { ...prev, waveSpeedX: parseFloat(val) };
                });
              }
            }}
          />
          <Slider
            icon={
              waveProps.waveSpeedY < 0.05 ? (
                <Turtle size={20} />
              ) : (
                <Rabbit size={20} />
              )
            }
            minimum={1}
            maximum={10}
            text={"SpeedY"}
            value={Math.round(waveProps.waveSpeedY * 100)}
            onChangeFn={(e) => {
              const val = parseFloat(e.target.value / 100);
              if (val <= 0.1 && val >= 0.01) {
                setWaveProps((prev) => {
                  return { ...prev, waveSpeedY: parseFloat(val) };
                });
              }
            }}
          />
        </div>
        <div className="division"></div>
        <div className="grid grid-cols-2 gap-[10px]">
          <Slider
            icon={<FoldHorizontal size={20} />}
            minimum={10}
            maximum={36}
            text={"GapX"}
            value={waveProps.xGap}
            onChangeFn={(e) =>
              setWaveProps((prev) => {
                if (
                  parseInt(e.target.value) >= 10 &&
                  parseInt(e.target.value) <= 36
                ) {
                  return { ...prev, xGap: parseInt(e.target.value) };
                }
              })
            }
          />
          <Slider
            icon={<FoldVertical size={20} />}
            minimum={10}
            maximum={36}
            text={"GapY"}
            value={waveProps.yGap}
            onChangeFn={(e) =>
              setWaveProps((prev) => {
                if (
                  parseInt(e.target.value) >= 10 &&
                  parseInt(e.target.value) <= 36
                ) {
                  return { ...prev, yGap: parseInt(e.target.value) };
                }
              })
            }
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
      lineColor: "#3b3b3b",
      bgColor: "#000000",
      waveSpeedX: 0.02,
      waveSpeedY: 0.01,
      waveAmp: 40,
      friction: 0.9,
      tension: 0.01,
      xGap: 12,
      yGap: 36,
    },
  },
  {
    name: "Sea",
    set: {
      lineColor: "#f7f7f7",
      bgColor: "#2433a8",
      waveSpeedX: 0.1,
      waveSpeedY: 0.01,
      waveAmp: 16,
      friction: 0.78,
      tension: 0.01,
      xGap: 22,
      yGap: 36,
    },
  },
];
