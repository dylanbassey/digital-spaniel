import styled from "styled-components";

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    "img1 img2 img3"
    "img4 img4 img5";
  grid-gap: 16px;
  width: 100%;
  padding: 20px 0;
`;

export const GridItem = styled.div<{ area: string }>`
  grid-area: ${(props) => props.area};
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  &:hover {
    opacity: 1;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-bottom: 3px solid #ffffff;
    width: 6rem;
    margin: 0;
  }
`;
