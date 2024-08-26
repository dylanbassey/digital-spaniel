import styled from "styled-components";
// import { FullWidthSection, SectionContainer } from "../../styles/page-layout";

export const FooterContainer = styled.div`
  padding: 3rem 0;

  padding-left: 3rem;
  background-color: #edeff1;
`;

export const FooterSection = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 4rem;

  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
  }

  .footer {
    width: 100%;
  }

  .text-container {
    margin-top: 3rem;
    flex-grow: 1;
    .heading-section {
      margin-bottom: 2rem;
      font: normal normal 48px/57px ITC Avant Garde Gothic Pro;
      span {
        color: #506473;
      }
    }
    a {
      font-weight: bold;
      color: black;
      text-decoration: none;
      border-bottom: 3px solid #c0345e;
      width: 5.5rem;
      font-size: 20px;

      &:hover {
        font-size: 22px;
        width: 6rem;
      }
    }
  }

  .links-container {
    flex-grow: 3;
    margin-top: 3rem;
  }

  .footer-link {
    margin-top: 5rem;
  }
  @media (max-width: 1024px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .heading-section {
      font-size: 36px;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-top: 2rem;
    .heading-section {
      font-size: 32px;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    padding-left: 0.5rem;
    padding-top: 1rem;

    .heading-section {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const LinksStyles = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  color: slategrey;

  .footer__link-col {
    flex: auto;
  }

  .questions-container {
    .sub-header {
      margin-top: 0;
    }
    h4 {
      margin-top: 2rem;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
  }

  a {
    color: slategrey;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: purple;
    }
  }

  h4 {
    margin-bottom: 0;
    margin-top: 0;
  }
  li {
    margin-bottom: 2rem;
  }
`;

export const Colophon = styled.section`
  display: flex;
  justify-content: space-between;
  color: slategrey;
  font-size: 0.8rem;

  .colophon__social-links {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
  }
`;

export const SocialStyles = styled.section`
  display: flex;
  margin-right: 2rem;
  gap: 1rem;
  color: grey;
  font-size: 1.2rem;

  * {
    cursor: pointer;
  }
`;
