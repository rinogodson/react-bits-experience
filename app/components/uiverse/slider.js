"use client"
import React from "react";
import styled from "styled-components";

const Slider = ({ minimum = 0, maximum = 100, text, value, onChangeFn, style }) => {
  return (
    <StyledWrapper className="w-full" style={{...style, transition: "all 300ms ease"}}>
      <div className="PB-range-slider-div">
        <p className="PB-range-slidertitle">{text}</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="PB-range-slidervalue">{value}</p>
          <input
            type="range"
            min={minimum}
            max={maximum}
            value={value}
            onChange={onChangeFn}
            className="PB-range-slider"
            id="myRange"
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .PB-range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d5dbe1;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    cursor: ew-resize;
    transition: all 0.2s ease;
  }
  .PB-range-slider:active {
    height: 20px;
  }

  .PB-range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 35px;
    border-radius: 5px;
    background-color: #fff;
    border: 3px solid #1B1B1B;
    cursor: ew-resize;
    transition: all 0.3s ease;
  }

  .PB-range-slider::-webkit-slider-thumb:hover {
    height: 30px;
    transition: 0.3s ease-in-out;
  }
  .PB-range-slider::-webkit-slider-thumb:active {
    height: 25px;
    transition: 0.3s ease-in-out;
  }

  .PB-range-slider::-moz-range-thumb {
    width: 15px;
    height: 25px;
    border-radius: 5px;
    background-color: #fff;
    border: 2px solid #000;
    cursor: ew-resize;
  }

  .PB-range-slider-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    background-color: #1b1b1b;
    padding: 18px;
    border-radius: 20px;
    width: 100%;
    max-width: 500px;
    border: 1px solid #4b4b4b;
    font-size: 1.2em;
    box-shadow: 0px 1px 2px 0px #1f1e241f;
  }

  .PB-range-slidervalue {
    font-weight: 600;
    width: 3.1ch;
  }

  .PB-range-slidertitle {
    font-size: 1.2em;
    width: 100%;
  }
`;

export default Slider;
