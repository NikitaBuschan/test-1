import styled from "styled-components";
import back from "./../../assets/images/Company/Blog/back.png";

export const SFeaturedNewsBlock = styled.div`
  width: 100%;
  min-height: 900px;
  padding: 90px 100px;
  position: relative;
  display: flex;
  justify-content: center;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    top: 0;
    left: 0;
    z-index: -1;
  }
  .wrapper {
    width: 100%;
    max-width: 1240px;
    min-height: 750px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 130%;
      /* or 62px */

      /* Light/main gradient */

      background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .slide {
      width: 100%;

      .slick-dots {
        li {
          button {
            ::before {
              color: rgba(217, 217, 217, 0.5);
              opacity: 1;
              margin-top: 10px;
              font-size: 12px;
            }
          }
        }
        .slick-active {
          button {
            ::before {
              color: #2babcc;
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
