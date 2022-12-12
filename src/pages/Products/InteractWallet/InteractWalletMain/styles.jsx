import styled from "styled-components";
import back from "./../../../../assets/Products/bg.png";

export const SInteractWalletMain = styled.div`
  width: 100%;
  min-height: 900px;
  padding: 90px 100px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
  .mainWrap {
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    gap: 20px;
    .left {
      width: 513px;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      .title {
        display: flex;
        flex-direction: row;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;

        letter-spacing: -0.02em;

        color: #fdfdfd;

        p {
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
      }
      .text {
        margin-top: 20px;
        margin-bottom: 50px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        /* or 26px */

        /* Dark/high emphasis content */

        color: #fdfdfd;
      }
      .bttn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 4px;

        width: 137px;
        height: 48px;

        background: radial-gradient(
            176.24% 995.34% at -76.24% 151.33%,
            #7d42fb 0%,
            #2ed6e1 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        opacity: 0.5;
        border-radius: 100px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */
        text-decoration: none;
        color: #ffffff;
        /* :hover {
          background: radial-gradient(
              314.76% 1823.46% at 5.54% 69.79%,
              #b694ff 0%,
              #45ecf7 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
      }
    }
    .right {
      position: relative;
      .wrap {
        width: 700px;
        height: 416.49px;
        img {
          position: absolute;
          right: -59px;
          width: 700px;
          height: 416.49px;
        }
      }
    }
  }
`;
