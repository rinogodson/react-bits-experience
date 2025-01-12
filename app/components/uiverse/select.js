"use client"
import React from 'react';
import styled from 'styled-components';

const Select = ({templates, template, setTemplate, handleChange}) => {
  return (
    <StyledWrapper className='w-full'>
      <div className="radio-inputs">
        {templates.map((item, i)=>{
          return (
            <label key={"temp"+i} className="radio">
              <input
                type="radio"
                name="radio"
                value={item.name}
                checked={template === item.name}
                onChange={handleChange}
              />
              <span className="name">{item.name}</span>
            </label>
          );
        })}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    border: solid 1px #4B4B4B;
    background-color: #1b1b1b;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 10px;
    width: 100%;
    font-size: 14px;
  }

  .radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: .5rem 0;
    color: #f0f0f0;
    transition: all .15s ease-in-out;
  }

  .radio-inputs .radio input:checked + .name {
    background-color: #3b3b3b;
    font-weight: 600;
  }`;

export default Select;