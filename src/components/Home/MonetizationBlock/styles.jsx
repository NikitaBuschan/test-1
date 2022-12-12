import styled from "styled-components";

import monetizationBG from "../../../assets/images/Home/monetizationBG.png";
import c1 from "../../../assets/images/Home/c1.png";
import c2 from "../../../assets/images/Home/c2.png";
import stripes from "../../../assets/images/Home/stripes.png";

export const SMonetizationBlock = styled.section`
  min-height: 1615.49px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin-top: -170px;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    .bgtb {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: url(${monetizationBG});
      background-size: 100% 100%;
    }
  }
  .top {
    margin-top: 141px;
    position: relative;
    .centrl {
      width: 1132px;
      height: 729px;
      background: url(${stripes});
      background-size: 100% 100%;

      padding-top: 96px;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 7px;
      img {
        margin-bottom: -50px;
      }
      .title {
        width: 556px;
        height: 146px;
        display: flex;
        white-space: nowrap;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 1em;
        h1 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 56px;
          line-height: 130%;
          /* or 73px */

          text-align: center;

          background: linear-gradient(
            123.56deg,
            #fdfdfd 30.06%,
            rgba(253, 253, 253, 0.69) 91.14%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        h2 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 56px;
          line-height: 130%;
          /* or 73px */

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
          text-fill-color: transparent;
        }
      }

      p {
        height: 72px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        /* or 24px */

        text-align: center;

        color: rgba(210, 218, 255, 0.7);
      }
    }
  }
  .bot {
    display: flex;
    flex-direction: row;

    padding: 0px;
    gap: 40px;

    position: relative;
    width: 927.2px;
    height: 437.78px;
    .card1 {
      width: 444px;
      height: 437.78px;

      position: relative;

      background: linear-gradient(
          234.5deg,
          #36e4ba 3.6%,
          rgba(54, 228, 165, 0.19) 100.09%
        ),
        #131336;
      box-shadow: inset 0px 27.528px 56.832px rgba(87, 255, 174, 0.25),
        inset 0px 0px 4.44px #00d1ff;
      border-radius: 17.76px;

      /* Inside auto layout */

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: url(${c1});
        background-size: 100% 100%;
      }
      h1 {
        width: 325px;
        height: 35px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 27px;
        line-height: 130%;
        /* identical to box height, or 35px */

        letter-spacing: -0.02em;

        color: #ffffff;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

        margin-bottom: 17px;
      }
      p {
        width: 325px;
        height: 92px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        /* or 22px */

        color: rgba(255, 255, 255, 0.7);

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin-bottom: 37px;
      }
    }
    .card2 {
      width: 444px;
      height: 437.78px;

      position: relative;
      background: linear-gradient(0deg, #6228de, #6228de),
        linear-gradient(234.5deg, #7d42fb 3.6%, #3a0e70 100.09%);
      box-shadow: inset 0px 27.4787px 56.7302px rgba(255, 87, 218, 0.25),
        inset 0px 0px 4.43205px #a35aff;
      border-radius: 17.7282px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: url(${c2});
        background-size: 100% 100%;
      }
      h1 {
        width: 325px;
        height: 35px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 27px;
        line-height: 130%;
        /* identical to box height, or 35px */

        letter-spacing: -0.02em;

        color: #ffffff;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

        margin-bottom: 17px;
      }
      p {
        width: 325px;
        height: 92px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        /* or 22px */

        color: rgba(255, 255, 255, 0.7);

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin-bottom: 37px;
      }
    }
  }
`;
