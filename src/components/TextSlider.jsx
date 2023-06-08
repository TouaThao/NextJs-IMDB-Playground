"use client";
import React, { useState, useRef } from "react";
import { TbTextSize } from "react-icons/tb";

export default function TextSlider() {
  const [textSize, setTextSize] = useState(16);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [updatedSize, setUpdatedSize] = useState(16);
  const sliderRef = useRef(null);

  const handleTextSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setUpdatedSize(newSize);
  };

  const handleSliderMouseUp = () => {
    setTextSize(updatedSize);
    document.documentElement.style.setProperty(
      "--text-size",
      `${updatedSize}px`
    );
  };

  const handleToggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handleSliderBlur = () => {
    if (!sliderRef.current.contains(document.activeElement)) {
      setIsSliderVisible(false);
    }
  };

  return (
    <div>
      <TbTextSize onClick={handleToggleSlider} />
      {isSliderVisible && (
        <>
          <input
            type="range"
            min="12"
            max="36"
            step="2"
            value={updatedSize}
            onChange={handleTextSizeChange}
            onMouseUp={handleSliderMouseUp}
            onBlur={handleSliderBlur}
            ref={sliderRef}
          />
          <p>Change Text Size</p>
        </>
      )}
    </div>
  );
}
