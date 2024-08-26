import { styled } from "styled-components";

interface CardProps {
  bgColor?: string;
  textColor?: string;
}

export const TestimonialStyles = styled.div`
  margin-left: 9rem;
  margin-top: 2rem;
  font: normal normal 48px/57px ITC Avant Garde Gothic Pro;
  span {
    color: #506473;
  }

  @media (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 2rem;
    .heading-section {
      text-align: center;
      font-size: 36px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    .heading-section {
      text-align: center;
      font-size: 32px;
    }
  }
  @media (max-width: 480px) {
    margin-left: 2rem;
    margin-right: 2rem;
    .heading-section {
      text-align: center;
      font-size: 28px;
    }
  }
`;

export const TestimonalContentStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .mobile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    gap: 1rem;
    text-align: center;
  }
  ul {
    width: 1304px;
  }
`;

export const CarouselContainer = styled.div`
  width: 90%;
  margin: 3rem 0;
  border-radius: 10px;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const DesktopCardStyles = styled.article<CardProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  max-width: 320px;
  font-size: 1.2rem;
  height: 500px;
  padding: 2rem;
  text-align: center;
  font: italic normal 600 24px Open Sans;
  color: ${(props) => props.textColor || "#ffffff"};
  opacity: 1;
  gap: 1.2rem;
  background: ${(props) => props.bgColor || "#19293a"} 0% 0% no-repeat
    padding-box;

  @media only screen and (max-width: 1400px) {
    font-size: 1rem;
    width: 280px;
    height: 360px;
  }

  .container {
    text-align: center;
  }

  .testimonial-content {
    font-style: italic;
    text-align: center;
  }

  .testimonial-name {
    font-weight: 700;
  }

  img {
    width: 120px;
  }
`;

export const MobileCardStyles = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  img {
    float: right;
    width: 80px;
  }

  .testimonial-content {
    font-style: italic;
  }

  .testimonial-name {
    font-weight: 700;
  }
`;
