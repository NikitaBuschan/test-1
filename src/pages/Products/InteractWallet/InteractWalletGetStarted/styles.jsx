import styled from "styled-components";
import bot_bg from "./../../../../assets/Products/bot_bg.png";
import waves from "./../../../../assets/Products/waves.png";
import blue_lines from "./../../../../assets/Products/blue_lines.png";

export const SInteractWalletGetStarted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 940px;
  position: relative;
  overflow: hidden;
  bottom: -270px;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: url(${bot_bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    bottom: 0;
    z-index: -1;
  }

  .lines {
    position: absolute;
    width: 100%;
    height: 618px;

    background-image: url(${blue_lines});
    background-position: center;
    background-repeat: no-repeat;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .getStartedWrap {
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 20px;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 76px;
        /* identical to box height */

        text-align: center;

        background: radial-gradient(
              100% 562.44% at 0% 100%,
              #7d42fb 0%,
              #2ed6e1 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          radial-gradient(
              161.68% 202.72% at 170.79% -16.45%,
              #a378ff 28.79%,
              #8841ff 50.25%,
              #9a42fb 69.48%,
              #42fbad 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          #fdfdfd;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      h2 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 76px;
        /* identical to box height */

        text-align: center;

        background: linear-gradient(
          123.56deg,
          #fdfdfd 30.06%,
          rgba(253, 253, 253, 0.69) 91.14%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    p {
      width: 495px;
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      /* or 27px */

      text-align: center;

      color: rgba(210, 218, 255, 0.7);
    }
    .bttn {
      display: flex;

      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      gap: 4px;

      width: 138px;
      height: 48px;

      background: radial-gradient(
          176.24% 995.34% at -76.24% 151.33%,
          #7d42fb 0%,
          #2ed6e1 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      border-radius: 100px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      /* identical to box height, or 21px */
      text-decoration: none;
      color: #ffffff;
      :hover {
        background: radial-gradient(
            314.76% 1823.46% at 5.54% 69.79%,
            #b694ff 0%,
            #45ecf7 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      }
    }
  }
`;
