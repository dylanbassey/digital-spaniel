import styled from "styled-components";

export const CaseStudiesStyles = styled.div`
  background-color: #ffffff;
  padding-left: 9rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .next-section {
    margin-bottom: 2rem;
    font: normal normal 48px/57px ITC Avant Garde Gothic Pro;
    span {
      color: #506473;
    }
  }

  p {
    width: 70%;
    text-align: center;
  }

  @media (max-width: 1024px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .next-section {
      align-self: center;
      text-align: center;
      font-size: 36px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 1rem;
    .next-section {
      align-self: center;
      text-align: center;
      font-size: 32px;
    }
  }
  @media (max-width: 480px) {
    padding-left: 0.5rem;
    padding-right: 1rem;
    .next-section {
      align-self: center;
      text-align: center;
      font-size: 28px;
    }
  }
`;

export const CaseStudiesContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
