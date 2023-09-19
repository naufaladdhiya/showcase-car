"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnTypes,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnTypes || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
