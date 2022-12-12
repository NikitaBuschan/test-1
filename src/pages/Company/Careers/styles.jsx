import styled from "styled-components";

import stars from "../../../assets/images/Developers/stars.png";
import mainBG from "../../../assets/images/Developers/mainBG.png";
import ecoBG from "../../../assets/images/Company/Careers/ecoBG.png";
import talentBG from "../../../assets/images/Company/Careers/talentBG.png";
import talentCardBG from "../../../assets/images/Company/Careers/talentCardBG.png";

export const SCareers = styled.div`
  width: 100%;
  main {
    min-height: calc(100vh - 112px); // full page without header
    width: 100%;
  }
`;

export const CareersMainBlock = styled.section`
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
    text-align: center;
    margin-top: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 755px;
    height: 296px;
    h1 {
      width: 695px;
      height: 154px;

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
      height: 26px;

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
    .view {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      gap: 4px;

      width: 179px;
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

export const CareersEcosystemBlock = styled.section`
  position: relative;
  width: 100%;
  min-height: 1113px;
  display: flex;
  justify-content: center;
  background: url(${ecoBG});
  background-size: 100% 100%;

  margin-top: -135px;
  .wrap {
    display: flex;
    gap: 50px;

    align-items: center;
    .left {
      width: 548px;
      height: 281px;

      display: flex;
      flex-direction: column;

      gap: 32px;

      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 130%;
        /* or 42px */

        letter-spacing: -0.02em;

        /* Light/high emphasis content */

        color: #0d0d2f;
        span {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 130%;
          /* or 42px */

          letter-spacing: -0.02em;

          /* Light/high emphasis content */
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

          position: relative;
          img {
            position: absolute;
            left: -40px;
            bottom: -5px;
          }
        }
      }

      p {
        width: 467px;
        height: 81px;

        /* subheading 18px */

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        /* Light/high emphasis content */

        color: #0d0d2f;
      }
    }
    .right {
      width: 600px;
      height: 342px;
    }
  }
`;

export const CareersPositionsBlock = styled.section`
  width: 100%;
  justify-content: center;
  display: flex;
  position: relative;
  .wrap {
    width: 1036px;

    .title {
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
      text-fill-color: transparent;

      margin-top: 125px;
      margin-bottom: 40px;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 102px;
      .position {
        background: #f4fbff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        .head {
          width: 1036px;
          height: 129px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 32px;
          gap: 16px;

          .info {
            width: 908px;
            height: 65px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 12px;
            .department {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 4px 8px;
              gap: 8px;

              width: fit-content;
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

                text-transform: uppercase;

                color: #6984ad;
              }
            }
            .job {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 150%;
              /* identical to box height, or 27px */

              /* Light/high emphasis content */

              color: #0d0d2f;
              text-transform: capitalize;
            }
          }
          .arrow {
            width: 48px;
            height: 48px;
            transform: rotateZ(-90deg);
            transition: 0.5s;
          }
        }
        .body {
          padding: 0 32px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          .top {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 20px;
            .aspects {
              display: flex;
              gap: 49px;
              .loacation,
              .timezone,
              .time {
                display: flex;
                gap: 8px;
                img {
                  width: 20px;
                  height: 20px;
                }
                p {
                  text-transform: capitalize;
                  font-family: "Satoshi";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 14px;
                  line-height: 160%;
                  /* or 22px */

                  /* Light/high emphasis content */

                  color: #0d0d2f;
                }
              }
            }
            .text {
              width: 908px;

              /* body 14px */

              font-family: "Satoshi";
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
          .apply {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px 24px;
            gap: 4px;

            width: fit-content;
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
      }
      .closed {
        .head {
          cursor: pointer;
          .arrow {
            transform: rotateZ(0deg);
            transition: 0.5s;
          }
        }

        .body {
          display: none;
        }
      }
    }
  }
`;

export const CareersTalentBlock = styled.section`
  position: relative;
  width: 100%;
  min-height: 573px;
  display: flex;
  justify-content: center;
  background: url(${talentBG});
  background-size: 100% 100%;
  margin-bottom: -200px;
  .wrap {
    position: relative;
    margin-top: 54px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px;
    gap: 16px;

    width: 1035px;
    height: 316px;

    background: #ffffff;
    box-shadow: 0px -25px 40px rgba(206, 226, 255, 0.4);
    border-radius: 20px;

    background-image: url(${talentCardBG});
    background-size: 100% 100%;
    .title {
      width: 411px;
      height: 52px;

      /* h3 40px */

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 130%;
      /* identical to box height, or 52px */

      letter-spacing: -0.02em;

      /* Light/high emphasis content */

      color: #0d0d2f;
    }
    .subtitle {
      width: 317px;
      height: 68px;

      /* subheading 24px */

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      /* or 34px */

      letter-spacing: -0.02em;

      /* Light/high emphasis content */

      color: #0d0d2f;
    }
    .descr {
      width: 390px;
      height: 44px;

      /* body 14px */

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* Light/medium emphasis content */

      color: rgba(13, 13, 48, 0.6);
    }
    .apply {
      right: 65px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      gap: 4px;

      width: fit-content;
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
