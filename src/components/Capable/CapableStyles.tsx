import styled from "styled-components";

export const CapableStyles = styled.div`
  background-color: #edeff1;
  padding-left: 3rem;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .heading-section {
    font: normal normal 48px/57px ITC Avant Garde Gothic Pro;
    span {
      color: #506473;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const CapableContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  margin-left: 100px;
  margin-right: 100px;

  h1 {
    font: normal normal bold 48px/57px ITC Avant Garde Gothic Pro;
  }

  p {
    font: normal normal normal 21px/38px Open Sans;
    font-size: 21px;
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

  @media (max-width: 1024px) {
    .heading-section {
      margin-top: 2rem;
      font-size: 36px;
    }

    p {
      font-size: 18px;
    }

    a {
      font-size: 18px;
      align-self: center;

      &:hover {
        font-size: 20px;
        width: 7.8rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    padding: 0 10px;

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

export const CapableTraitsStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  h4 {
    font: normal normal bold 18px/38px ITC Avant Garde Gothic Pro;
    letter-spacing: 2.1px;
    color: #19293a;
    margin: 0;
  }

  p {
    font: normal normal 16px/58px Open Sans;
    color: #506473;
    letter-spacing: 0.53px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;

    h4 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    padding-left: 10px;

    h4 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const CapableTraitDoubleStyles = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;

  .marketing-col {
    margin-left: 5rem;
  }
  .hover-state {
    display: inline-block; /* Allows width and height to be set */
    width: 16px;
    height: 16px;
    background-color: #506473;
    color: white;
    border-radius: 20px;
    font-size: 12px;
    text-align: center; /* Centers text horizontally */
    line-height: 14px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    align-items: center;
  }
`;
