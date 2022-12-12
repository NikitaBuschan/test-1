import styled from "styled-components";

import mainBG from "../../../assets/images/Developers/mainBG.png";
import ucBG from "../../../assets/images/Developers/ucBG.png";
import bgBot from "../../../assets/images/Developers/bgBot.png";
import stars from "../../../assets/images/Developers/stars.png";

import stripes from "../../../assets/images/Developers/stripes.png";
import lines from "../../../assets/images/Developers/lines.png";

export const SUseCases = styled.div`
  width: 100%;
  main {
    min-height: calc(100vh - 112px); // full page without header
    width: 100%;
  }
`;

export const UseCasesMainBlock = styled.section`
  width: 100%;
  min-height: 785px;
  background: url(${mainBG});
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  .stars {
    position: absolute;
    top: 253px;
    width: 1447px;
    height: 490px;
    background: url(${stars});
    background-size: 100% 100%;
  }

  .wrap {
    margin-top: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 881px;
    height: 245px;
    h1 {
      width: 881px;
      height: 77px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 120%;
      /* identical to box height, or 77px */

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

      /* Inside auto layout */

      margin-bottom: 20px;
    }
    .desc {
      width: 755px;
      height: 52px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      /* or 26px */

      text-align: center;

      /* Dark/high emphasis content */

      color: #fdfdfd;

      /* Inside auto layout */
      margin-bottom: 48px;
    }
    .start {
      display: flex;
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

      p {
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
  }
`;

export const UseCasesEmpowerBlock = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .wrap {
    margin-top: 123px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 629px;
      height: 124px;

      /* h2 48px */

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 130%;
      /* or 62px */

      text-align: center;

      /* Light/main gradient */

      background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      margin-bottom: 83px;
    }
    img {
      position: relative;
      left: -15px;
      width: 1300px;
      height: 430px;
    }
  }
`;

export const UseCasesToolsBlock = styled.section`
  width: 100%;
  overflow: hidden;
  .bgTop {
    width: 100%;
    height: 241.09px;
    margin-bottom: 75px;
  }
  .content {
    position: relative;
    height: 586px;
    display: flex;

    justify-content: center;

    margin-bottom: 241.09px;
    .stripes {
      position: absolute;
      width: 100%;
      height: 586px;
      background: url(${stripes});
      background-size: 100% 100%;
    }
    .stars {
      position: absolute;
      width: 1437px;
      height: 556px;
      bottom: -350px;
    }
    .wrap {
      position: relative;
      margin-top: 137px;
      width: 1039px;
      height: 240px;
      display: flex;
      flex-direction: row;

      gap: 120px;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 32px;

        width: 467px;
        height: 240px;
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
        }
        p {
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
        width: 452px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 32px;
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
        }
        p {
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

export const UseCasesBlock = styled.section`
  margin-top: -200px;
  width: 100%;
  min-height: 1285.41px;
  background: url(${ucBG});
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;

  .stars {
    position: absolute;
    width: 1437px;
    height: 556px;
    bottom: -50px;
  }
  .wrap {
    margin-top: 197px;
    min-height: 618px;
    width: 962px;

    display: flex;

    flex-direction: column;
    align-items: center;
    .title {
      position: relative;
      margin-top: 115px;

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
      text-fill-color: transparent;

      margin-bottom: 20px;
    }

    .descr {
      position: relative;
      width: 587px;
      height: 54px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      /* or 27px */

      text-align: center;

      color: rgba(210, 218, 255, 0.7);

      margin-bottom: 64px;
    }
    .cards {
      position: relative;
      width: 962px;
      height: 424.71px;
      display: flex;
      gap: 40px;
      .card {
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 16px;

        width: 294px;
        height: 424.71px;

        background: #f4fbff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        .prev {
          width: 246px;
          height: 233px;
        }
        .category {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4px 8px;
          gap: 8px;

          width: 81px;
          height: 26px;

          background: #e6f6ff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 4px;
          p {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 150%;
            /* identical to box height, or 18px */

            color: #6984ad;
          }
        }
        .text {
          width: 246px;
          height: 55px;

          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;

          /* Light/high emphasis content */

          color: #0d0d2f;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .link {
          text-decoration: none;
          p {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            /* identical to box height, or 21px */

            background: linear-gradient(0deg, #7d42fb, #7d42fb),
              radial-gradient(100% 562.44% at 0% 100%, #7d42fb 0%, #2ed6e1 100%)
                /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
              #000000;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .line {
            width: 110px;
            height: 0px;
            border: 0.5px solid #7d42fb;
          }
        }
      }
    }
    .lines {
      position: absolute;
      width: 810px;
      height: 618px;
      background: url(${lines});
      background-size: 100% 100%;
    }
  }
`;

export const UseCasesGetStartedBlock = styled.section`
  position: relative;
  width: 100%;
  min-height: 1015.41px;
  background: url(${bgBot});
  background-size: 100% 100%;

  margin-top: -230px;
  margin-bottom: -260px;

  display: flex;
  justify-content: center;
  .wrap {
    margin-top: 173px;
    position: relative;
    width: 810px;
    height: 618px;
    background: url(${lines});
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .title {
      margin-top: 246px;

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
      text-fill-color: transparent;
      span {
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
        text-fill-color: transparent;
      }
    }
    .descr {
      width: 495px;
      height: 54px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      /* or 27px */

      text-align: center;

      color: rgba(210, 218, 255, 0.7);
    }
    .int {
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

      text-decoration: none;

      p {
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
  }
`;
