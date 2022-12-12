import styled from "styled-components";
import footerImg from "./../../../../assets/Products/footerImg.png";

export const SInteractWalletCases = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 90px 100px;
  .casesWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1240px;
    min-height: 800px;
    gap: 50px;
    .title {
      margin-top: 30px;
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
    .blocks {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 120px;
      .block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        img {
          width: 255px;
          height: 264px;
        }

        .text {
          h1 {
            margin-bottom: 20px;
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
            width: 280px;
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
    .footerImg {
      width: 100%;
      height: 210.83px;
      position: absolute;

      bottom: 0;

      background-image: url(${footerImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
`;
