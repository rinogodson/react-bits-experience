"use client";
import React from "react";
import ShapeBlur from "@/src/blocks/Backgrounds/ShapeBlur/ShapeBlur";
import Slider from "../components/uiverse/slider";
import Toggle from "../components/toggle/toggle";
import { BringToFront, Circle, Ratio, Scaling, Settings, Sparkle, Square, Triangle } from "lucide-react";
function Page() {
  const [shapeProps, setShapeProps] = React.useState({
    variation: 0,
    shapeSize: 1,
    roundness: 0.5,
    borderSize: 0.08,
    circleSize: 0.1,
    circleEdge: 0.45,
    squidGame: false,
  });
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      <div
        className="flex aspect-square bg-[#030303] flex-row"
        style={
          !shapeProps.squidGame
            ? { width: "100vh" }
            : { width: "100vh", justifyContent: "center", alignItems: "center" }
        }
      >
        {!shapeProps.squidGame ? (
          <ShapeBlur
            variation={shapeProps.variation} // YES => 0->RoundedSquare 1->FilledCircle 2->CircleOutline 3->Triangle
            shapeSize={shapeProps.shapeSize} //YES
            roundness={shapeProps.roundness} // YES
            borderSize={shapeProps.borderSize} // YES
            circleSize={shapeProps.circleSize}
            circleEdge={shapeProps.circleEdge}
            style={{ width: "100%" }}
          />
        ) : (
          <>
            <ShapeBlur
              variation={0} // YES => 0->RoundedSquare 1->FilledCircle 2->CircleOutline 3->Triangle
              shapeSize={1.3} //YES
              roundness={1.3} // YES
              borderSize={0.08} // YES
              circleSize={shapeProps.circleSize}
              circleEdge={shapeProps.circleEdge}
            />
            <ShapeBlur
              variation={0} // YES => 0->RoundedSquare 1->FilledCircle 2->CircleOutline 3->Triangle
              shapeSize={1.25} //YES
              roundness={0} // YES
              borderSize={0.08} // YES
              circleSize={shapeProps.circleSize}
              circleEdge={shapeProps.circleEdge}
            />
            <ShapeBlur
              variation={3} // YES => 0->RoundedSquare 1->FilledCircle 2->CircleOutline 3->Triangle
              shapeSize={0.4} //YES
              roundness={0.4} // YES
              borderSize={0.04} // YES
              circleSize={shapeProps.circleSize}
              circleEdge={shapeProps.circleEdge}
            />
          </>
        )}
      </div>

      <div className="settingsCont" style={{ position: "relative" }}>
        <div className="settingsTitle flex items-center justify-center flex-row gap-[15px]">
          <Settings size={30} />
          <p className="flex justify-center items-center">{`Settings`}</p>
        </div>
        <div
          className="grid grid-cols-2 gap-[10px] w-full"
          style={{ gridTemplateColumns: "110px 1fr" }}
        >
          <Toggle
            value={shapeProps.squidGame}
            text={
              shapeProps.squidGame
                ? "Squid Game Mode On"
                : "Squid Game Mode Off"
            }
            onChangeFn={() => {
              setShapeProps((prev) => {
                return {
                  ...prev,
                  squidGame: !prev.squidGame,
                  circleEdge: prev.circleEdge === 0.66 ? 0.45 : 0.66,
                  circleSize: prev.circleSize === 0.1 ? 0.24 : 0.1,
                };
              });
            }}
          >
            <div className="flex gap-[3px]">
              <Circle />
              <Square />
              <Triangle />
            </div>
          </Toggle>
          <Slider
            icon={<Scaling size={20} />}
            minimum={0}
            maximum={100}
            text={"Shape Size"}
            style={
              shapeProps.squidGame
                ? {
                    transform: "scale(0.9)",
                    opacity: 0.5,
                    pointerEvents: "none",
                  }
                : { transform: "scale(1)", opacity: 1, pointerEvents: "all" }
            }
            value={Math.round(shapeProps.shapeSize * 100)}
            onChangeFn={(e) => {
              let val = parseFloat(e.target.value) / 100;
              if (val <= 1 && val >= 0) {
                setShapeProps((prev) => {
                  return { ...prev, shapeSize: val };
                });
              }
            }}
          />
        </div>

        <div className="division"></div>
        <div
          className="grid w-full gap-[10px] grid-cols-2"
          style={
            shapeProps.squidGame
              ? {
                  transform: "scale(0.9)",
                  opacity: 0.5,
                  pointerEvents: "none",
                  transition: "all 300ms ease",
                }
              : {
                  transform: "scale(1)",
                  opacity: 1,
                  pointerEvents: "all",
                  transition: "all 300ms ease",
                }
          }
        >
          <Slider
            icon={<BringToFront size={20} />}
            minimum={0}
            maximum={100}
            text={"Border Radius"}
            value={Math.round(shapeProps.roundness * 100)}
            onChangeFn={(e) => {
              let val = parseFloat(e.target.value) / 100;
              if (val <= 1 && val >= 0) {
                setShapeProps((prev) => {
                  return { ...prev, roundness: val };
                });
              }
            }}
          />

          <Slider
            icon={<Ratio size={20} />}
            minimum={0}
            maximum={100}
            text={"Border Size"}
            value={Math.round(shapeProps.borderSize * 100)}
            onChangeFn={(e) => {
              let val = parseFloat(e.target.value) / 100;
              console.log("val", Math.round(shapeProps.borderSize * 100) + "%");
              if (val <= 1 && val >= 0) {
                setShapeProps((prev) => {
                  return { ...prev, borderSize: val };
                });
              }
            }}
          />
        </div>
        <div className="division"></div>
        <div className="grid w-full gap-[10px] grid-cols-2">
          <Slider
            icon={<Sparkle size={20} />}
            minimum={0}
            maximum={100}
            text={"Effect Size"}
            value={Math.round(shapeProps.circleSize * 100)}
            onChangeFn={(e) => {
              let val = parseFloat(e.target.value) / 100;
              if (val <= 1 && val >= 0) {
                setShapeProps((prev) => {
                  return { ...prev, circleSize: val };
                });
              }
            }}
          />

          <Slider
            icon={<Sparkle size={20} />}
            minimum={0}
            maximum={100}
            text={"Effect Edge"}
            value={Math.round(shapeProps.circleEdge * 100)}
            onChangeFn={(e) => {
              let val = parseFloat(e.target.value) / 100;
              console.log("val", Math.round(shapeProps.circleEdge * 100) + "%");
              if (val <= 1 && val >= 0) {
                setShapeProps((prev) => {
                  return { ...prev, circleEdge: val };
                });
              }
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
