"use client";

import { Palette } from "lucide-react";
import { useState, useRef } from "react";
import styled from "styled-components";

export default function ColorPicker({label, value, onChangeFn}) {
  const inputRef = useRef(null);

  return (
    <StyledWrapper>
      <div className="PB-range-picker-div">
        <div className="flex flex-row justify-start items-center gap-[10px] w-full ">
          <Palette size={20} />
          <label
            htmlFor="color"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>

        {/* // Hydration failed because the server rendered HTML didn't matched the client. As a reasukt this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <code
              className="relative h-14 flex justify-center items-center rounded px-[1.2rem] font-mono text-[1em] font-semibold"
              style={{
                border: `2px solid rgba(255, 255, 255, 0.5)`,
                backgroundColor: value,
                borderRadius: "10px",
                color: "white",
                textShadow: "0 0 5px #000",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => inputRef.current?.click()}
            >
              {value}
            </code>
            <div className="relative">
              <input
                id="color"
                ref={inputRef}
                type="color"
                value={value}
                onChange={onChangeFn}
                className="absolute inset-0 opacity-0 cursor-pointer"
                aria-label="Color picker"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .PB-range-picker-div {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 15px;
    flex-direction: column;
    background-color: #1b1b1b;
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid #4b4b4b;
    font-size: 1.1em;
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 1px 2px 0px #1f1e241f;
  }
`;
