import styled from "styled-components";

export const AboutStyles = styled.div`
  padding-left: 3rem;
  padding-left: 100px;
  padding-right: 100px;
  font: normal normal bold 48px/57px ITC Avant Garde Gothic Pro;
  span {
    color: #506473;
  }
  background-color: #edeff1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    border-bottom: 3px solid #c0345e;
    width: 5.5rem;
    font-size: 20px;
    margin-right: 2rem;

    &:hover {
      font-size: 22px;
      width: 6rem;
    }
  }
`;

export const ImageGallaryStyles = styled.div`
  background-color: #edeff1;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
