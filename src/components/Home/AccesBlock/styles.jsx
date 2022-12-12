import styled from "styled-components";

import line from "../../../assets/images/Home/line.png";
import accessBG from "../../../assets/images/Home/accessBG.png";

export const SAccesBlock = styled.section`
  margin-top: -170px;
  position: relative;
  width: 100%;
  min-height: 1052px;
  display: flex;
  justify-content: center;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${accessBG});
    background-size: 100% 100%;
  }
  .wrap {
    margin-top: 375px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 100px;
    height: fit-content;
    .left {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .line {
        display: flex;
        gap: 15px;

        align-items: center;

        width: 510.56px;
        height: 79.92px;
        div {
          width: 79.92px;
          min-height: 79.92px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 150px;
            height: 150px;
          }
        }

        h1 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 56px;
          line-height: 76px;

          color: #0d0d2f;

          white-space: nowrap;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 48px;
      gap: 24px;
      isolation: isolate;

      width: 534px;
      height: 437px;

      background: #ffffff;
      box-shadow: 0px -25px 40px rgba(206, 226, 255, 0.4);
      border-radius: 20px;
      h1 {
        position: relative;
        white-space: nowrap;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 130%;
        /* identical to box height, or 52px */

        letter-spacing: -0.02em;

        /* accent gradient 2 */

        color: #0d0d2f;

        span {
          position: relative;
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 130%;
          /* identical to box height, or 52px */

          letter-spacing: -0.02em;

          /* accent gradient 2 */

          background: radial-gradient(
              228.48% 115.14% at 18.65% 0%,
              #7d42fb 0%,
              #2ed6e1 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .line {
          position: absolute;
          left: -19px;
          width: 305px;
          height: 6px;
          background: url(${line});
          background-size: 100% 100%;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          display: flex;
          gap: 8px;
          align-items: center;
        }
      }
      .try {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 4px;

        width: 135.5px;
        height: 48px;

        background: radial-gradient(
            176.24% 995.34% at -76.24% 151.33%,
            #7d42fb 0%,
            #2ed6e1 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        border-radius: 100px;

        text-decoration: none;
        .text {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 150%;
          /* identical to box height, or 21px */

          color: #ffffff;
        }
        img {
          width: 21.5px;
          height: 24.5px;
        }
        :hover {
          background: radial-gradient(
              314.76% 1823.46% at 5.54% 69.79%,
              #b694ff 0%,
              #45ecf7 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        }
      }

      .descr {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 160%;
        /* or 18px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);
      }
    }
  }
`;
