import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .sticky-nav {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #333;
    z-index: 1000;
    transition: transform 0.3s ease;
  }

  .sticky-nav-content {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sticky-nav.hidden {
    transform: translateY(-100%);
  }
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
