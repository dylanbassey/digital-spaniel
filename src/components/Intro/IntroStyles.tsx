import styled from "styled-components";

export const IntroStyles = styled.div`
  background-color: #ffffff;
  opacity: 1;
  margin-left: 9rem;
  display: flex;
  flex-direction: row;

  .heading-section {
    margin-bottom: 2rem;
    font: normal normal 3rem ITC Avant Garde Gothic Pro;
    span {
      color: #506473;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding-left: 0;
    margin-top: 5rem;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    margin-top: 5rem;
    margin-left: 0;
  }
`;

export const IntroContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;

  h3 {
    font: normal normal 600 16px/72px Open Sans;
    font-size: 16px;
    color: #c0345e;
    letter-spacing: 0.8;
    z-index: 0;
  }

  p {
    font: normal normal normal 1.5rem Open Sans;
  }

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    border-bottom: 3px solid #c0345e;
    width: 5.5rem;
    font-size: 20px;
    margin-bottom: 2rem;

    &:hover {
      font-size: 22px;
      width: 6rem;
    }
  }

  @media (max-width: 1024px) {
    .heading-section {
      font-size: 36px;
    }

    p {
      font-size: 18px;
    }

    a {
      align-self: center;
      font-size: 18px;

      &:hover {
        font-size: 20px;
        width: 5.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    text-align: center;

    .heading-section {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }

    a {
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .heading-section {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }

    a {
      font-size: 16px;
    }
  }
`;

export const IntroImageStyles = styled.img`
  width: 60%;
  height: auto;
  max-height: 1081px;

  @media (max-width: 1024px) {
    max-height: 800px;
    width: 100%;
  }

  @media (max-width: 768px) {
    max-height: 600px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    max-height: 400px;
  }
`;
