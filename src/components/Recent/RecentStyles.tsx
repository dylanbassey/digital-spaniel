import styled from "styled-components";

export const RecentStyles = styled.div`
  background-color: #ffffff;
  padding-left: 3rem;
  padding-top: 3rem;
  .heading-section {
    margin-bottom: 2rem;
    font: normal normal 48px/57px ITC Avant Garde Gothic Pro;
    span {
      color: #506473;
    }
  }

  p {
    &:hover {
      cursor: pointer;
    }
  }

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    border-bottom: 3px solid #c0345e;
    width: 7.5rem;
    font-size: 20px;

    &:hover {
      font-size: 22px;
      width: 8rem;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    align-self: flex-end;

    @media (max-width: 768px) {
      margin-left: 0;
      justify-content: center;
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .heading-section {
      text-align: center;
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-top: 2rem;
    .heading-section {
      text-align: center;
      font-size: 32px;
    }

    a {
      text-align: center;
      font-size: 18px;

      &:hover {
        font-size: 20px;
        width: 7rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding-left: 0.5rem;
    padding-top: 1rem;

    .heading-section {
      text-align: center;
      font-size: 28px;
    }

    a {
      font-size: 16px;
    }
  }
`;

export const RecentContentStyles = styled.div`
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const RecentCategoriesStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

interface CategoryItemProps {
  isActive: boolean;
}

export const RecentCategoryItemStyles = styled.div<CategoryItemProps>`
  position: relative;
  padding: 10px 20px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#222" : "#555")};
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    background-color: #c060a1; /* Red color for the underline */
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

export const RecentImageStyles = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    a {
      margin-top: 20px;
      width: 6.5rem;
      &:hover {
        width: 7.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 14px;
    }
  }
`;
