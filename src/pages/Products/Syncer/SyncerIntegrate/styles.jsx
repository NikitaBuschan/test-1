import styled from "styled-components";

import lines from "./../../../../assets/Products/lines.png";
import apiBGstars from "./../../../../assets/Products/particle.png";

export const SSyncerIntegrate = styled.div`
  width: 100%;
  min-height: 900px;
  padding: 90px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .background {
    position: absolute;
    width: 810px;
    height: 1694px;

    background-image: url(${lines});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .wrap {
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 270px;
    .stars {
      position: absolute;
      width: 1400px;
      height: 556px;
      bottom: -550px;
      z-index: -1;
      background: url(${apiBGstars});
      background-size: 100% 100%;
    }
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 70px;
      .left {
        display: flex;
        flex-direction: column;
        width: 553px;
        gap: 20px;
        h1 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 130%;
          /* identical to box height, or 52px */

          letter-spacing: -0.02em;

          /* Light/main gradient */

          background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        h2 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 140%;
          /* identical to box height, or 34px */

          letter-spacing: -0.02em;

          /* Light/high emphasis content */

          color: #0d0d2f;
        }
        p {
          margin-top: 10px;

          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          /* or 26px */

          /* Light/medium emphasis content */

          color: rgba(13, 13, 48, 0.6);
        }
      }

      .right {
        img {
          width: 609px;
          height: 399px;
        }
      }
    }
    .bot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 80px;
      .left {
        img {
          width: 593px;
          height: 507px;
        }
      }
      .right {
        width: 575px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        h1 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 130%;
          /* identical to box height, or 52px */

          letter-spacing: -0.02em;

          /* Light/main gradient */

          background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        p {
          width: 497px;
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          /* or 26px */

          /* Light/medium emphasis content */

          color: rgba(13, 13, 48, 0.6);
        }
      }
    }
  }
`;
