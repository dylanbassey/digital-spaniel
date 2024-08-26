import styled from "styled-components";

// Styled component for the button
export const ArrowButtonStyles = styled.div<{ color: string | undefined }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  cursor: pointer;
  height: 64px;
  width: 64px;
  outline: none;
  margin-left: 10px;
  font-size: 24px;
`;

// Styled component for the arrow
export const ArrowStyles = styled.div<{
  direction: "right" | "left" | "up" | "down";
  color: string;
}>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px;
  border-color: ${({ direction, color }) => {
    switch (direction) {
      case "right":
        return `transparent transparent transparent ${color}`;
      case "left":
        return `transparent ${color} transparent transparent`;
      case "up":
        return `${color} transparent transparent transparent`;
      case "down":
        return `transparent transparent ${color} transparent`;
      default:
        return `transparent transparent transparent ${color}`;
    }
  }};
  border-width: ${({ direction }) => {
    switch (direction) {
      case "right":
      case "left":
        return "10px 10px 10px 0";
      case "up":
      case "down":
        return "0 10px 10px 10px";
      default:
        return "10px";
    }
  }};
`;
