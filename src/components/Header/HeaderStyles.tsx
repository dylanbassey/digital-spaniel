import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: var(--padding);

  img {
    max-height: 70px;
  }

  @media (max-width: 1024) {
    img {
      display: none;
    }
  }
`;
