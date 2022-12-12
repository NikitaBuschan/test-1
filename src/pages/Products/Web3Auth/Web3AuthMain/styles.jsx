import styled from "styled-components";
import back from "./../../../../assets/Products/bg.png";

export const SWeb3Main = styled.div`
  width: 100%;
  min-height: 900px;
  padding: 30px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    max-width: 1240px;
    gap: 100px;
    .left {
      width: 513px;
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      .title {
        display: flex;
        flex-direction: row;
        gap: 15px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;

        letter-spacing: -0.02em;

        color: #fdfdfd;
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

        width: 183px;
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
    .right {
      position: relative;
      width: 605px;
      .wrap {
        width: 603px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 25px;
        .web3card {
          width: 285px;
          height: 399px;
        }

        .particle1 {
          position: absolute;
          width: 191.33px;
          height: 203px;
          right: -21px;
          top: -99px;
          z-index: -1;
        }
        .particle2 {
          position: absolute;
          width: 191.33px;
          height: 203px;
          left: -108px;
          bottom: -60px;
          z-index: 1;
        }

        .top_line {
          position: absolute;
          left: 21px;
          top: -72px;
          z-index: -1;
        }
        .bot_line {
          position: absolute;
          left: 50px;
          bottom: -67px;
          z-index: -1;
        }

        .toptext {
          margin-top: 20px;
          display: flex;
          align-items: flex-start;
          position: absolute;
          padding: 8px 20px;

          width: 189px;
          height: 35px;

          background: rgba(217, 217, 217, 0.1);
          border-radius: 8px;

          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 160%;
          /* or 19px */

          letter-spacing: 3px;
          text-transform: uppercase;

          /* Dark/high emphasis content */

          color: #fdfdfd;
          z-index: 15;
        }
      }
    }
  }
`;
