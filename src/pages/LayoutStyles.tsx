import styled from "styled-components";

export const LayoutStyles = styled.div`
  position: relative;
  z-index: 1;
`;

export const LayoutHeaderStyles = styled.div`
  position: relative;
  z-index: 10;

  & > *:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
`;
