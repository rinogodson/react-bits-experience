"use client"
import React from 'react'
import "./toggle.css"
import { Mouse } from 'lucide-react'
function Toggle({children, text, value, onChangeFn}) {
  return (
    <div className='PB-toggle-div' style={{backgroundColor: value ? "#FFD4D1" : "#1b1b1b", color: value ? "#000" : "#FFF"}} onClick={onChangeFn}>
      {children}
      <p key={"toggleText"} className='toggleText'>{text}</p>
    </div>
  )
}

export default Toggle
