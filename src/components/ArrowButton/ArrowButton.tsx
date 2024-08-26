import React from "react";
import { ArrowButtonStyles, ArrowStyles } from "./ArrowButtonStyles";

interface ArrowButtonProps {
  direction?: string;
  color?: string;
  onClick?: () => void;
}
const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  color,
  onClick,
}) => {
  return (
    <ArrowButtonStyles onClick={onClick} color={color}>
      {direction}
    </ArrowButtonStyles>
  );
};

export default ArrowButton;
