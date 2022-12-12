import styled from "styled-components";

import connectBG from "../../../assets/images/Home/connectBG.png";

export const SConnectBlock = styled.section`
  min-height: 982.99px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  margin-top: -50px;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: url(${connectBG});
    background-size: 100% 100%;
  }

  .wrap {
    position: relative;
    max-width: 1248px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 94px;

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 32px;

      width: 624px;
      height: 466px;

      flex-wrap: wrap;
      .top,
      .bot {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 32px;
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 24px 32px;
          gap: 12px;

          width: 296px;
          height: 217px;

          background: #fefeff;
          box-shadow: 0px 0px 30px #d5e4f2;
          border-radius: 20px;
          h1 {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 72px;
            line-height: 97px;
            letter-spacing: -0.02em;

            background: linear-gradient(
              95.79deg,
              #0d0d2f 19.35%,
              #4e4e86 79.05%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          p {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */

            color: rgba(13, 13, 48, 0.6);
          }
        }
      }
    }
    .right {
      width: 553px;
      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 130%;
        /* or 52px */

        letter-spacing: -0.02em;

        /* Light/main gradient */

        background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        margin-bottom: 20px;
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

        margin-bottom: 30px;
      }
      p {
        width: 450px;
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
`;
