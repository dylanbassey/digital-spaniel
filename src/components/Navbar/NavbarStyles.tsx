import { MdOutlineMenu } from "react-icons/md";
import styled from "styled-components";

export const BigNavStyles = styled.nav`
  width: 60%;
  display: flex;
  justify-content: flex-end;

  ul {
    list-style: none;
    padding-left: none;
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    li {
      color: white;
      font-size: 1rem;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
      text-decoration-color: purple;
    }
  }
`;

export const SmallNavStyles = styled.nav`
  width: 40vw;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: #506473;
  box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.4);

  ul {
    list-style: none;
    padding-left: 2rem;

    li {
      padding: 2px 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: 600;

    &:hover,
    &:visited {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
      text-decoration-color: purple;
    }
  }
`;

export const MobileNavIconStyle = styled(MdOutlineMenu)`
  position: fixed;
  right: 0;
  cursor: pointer;
  z-index: 1000;
`;
