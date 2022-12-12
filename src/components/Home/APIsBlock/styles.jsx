import styled from "styled-components";

import apiBGstars from "../../../assets/images/Home/apiBGstars.png";
import apiBGtop from "../../../assets/images/Home/apiBGtop.png";

export const SAPIsBlock = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .bg {
    position: absolute;
    width: 100%;
    min-height: 100%;

    display: flex;
    justify-content: center;

    z-index: -1;

    .stars {
      position: absolute;
      width: 1400px;
      height: 556px;
      bottom: -230px;
      z-index: 1;
      background: url(${apiBGstars});
      background-size: 100% 100%;
    }
    .apiBGtop {
      position: absolute;
      width: 100%;
      height: 210.83px;
      top: -110px;
      z-index: 1;
      background: url(${apiBGtop});
      background-size: 100% 100%;
    }
  }
  .wrap {
    margin-top: 236px;
    margin-bottom: 241px;
    width: 1138px;
    height: 430px;
    display: flex;
    gap: 106px;
    position: relative;
    .left {
      width: 423px;
      height: 430px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      .hidden {
        width: 423px;
        height: 66px;
        overflow: hidden;
        padding: 20px;

        background: linear-gradient(272.48deg, #edf7fe 4.95%, #eef8ff 82.64%);
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 12px;

        transition: 0.5s;

        cursor: pointer;
        .line {
        }
        .content {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .head {
            transition: 0.5s;
            h3 {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 130%;
              /* identical to box height, or 26px */

              background: linear-gradient(
                  95.79deg,
                  #0d0d2f 19.35%,
                  #4e4e86 79.05%
                ),
                #0d0d2f;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .descr {
            pointer-events: none;
            p {
              opacity: 0;
              transition: 0.5s;
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
      }
      .active1 {
        padding: 20px 32px;
        position: relative;
        height: 184px;
        width: 423px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 30px rgba(192, 216, 253, 0.6),
          inset 0px 0px 8px rgba(155, 79, 250, 0.1);
        border-radius: 12px;

        overflow: hidden;

        display: flex;

        transition: 0.5s;
        .line {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 5px;
          height: 100%;
          background: #2babcc;
        }
        .content {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;

          .head {
            h3 {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 130%;
              /* identical to box height, or 26px */

              background: linear-gradient(
                  95.79deg,
                  #0d0d2f 19.35%,
                  #4e4e86 79.05%
                ),
                #0d0d2f;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .descr {
            p {
              transition: 0.5s 0.5s;
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
      }
      .active2 {
        padding: 20px 32px;
        position: relative;
        width: 423px;
        height: 162px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 30px rgba(192, 216, 253, 0.6),
          inset 0px 0px 8px rgba(155, 79, 250, 0.1);
        border-radius: 12px;

        overflow: hidden;

        display: flex;

        transition: 0.5s;
        .line {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 5px;
          height: 100%;
          background: #2babcc;
        }
        .content {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;

          .head {
            h3 {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 130%;
              /* identical to box height, or 26px */

              background: linear-gradient(
                  95.79deg,
                  #0d0d2f 19.35%,
                  #4e4e86 79.05%
                ),
                #0d0d2f;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .descr {
            p {
              transition: 0.5s 0.5s;
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
      }
      .active3 {
        padding: 20px 32px;
        position: relative;
        width: 423px;
        height: 250px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 30px rgba(192, 216, 253, 0.6),
          inset 0px 0px 8px rgba(155, 79, 250, 0.1);
        border-radius: 12px;

        overflow: hidden;

        display: flex;

        transition: 0.5s;
        .line {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 5px;
          height: 100%;
          background: #2babcc;
        }
        .content {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;

          .head {
            h3 {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 130%;
              /* identical to box height, or 26px */

              background: linear-gradient(
                  95.79deg,
                  #0d0d2f 19.35%,
                  #4e4e86 79.05%
                ),
                #0d0d2f;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .descr {
            p {
              transition: 0.5s 0.5s;
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
      }
      .active4 {
        padding: 20px 32px;
        position: relative;
        width: 423px;
        height: 96px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 30px rgba(192, 216, 253, 0.6),
          inset 0px 0px 8px rgba(155, 79, 250, 0.1);
        border-radius: 12px;

        overflow: hidden;

        display: flex;

        transition: 0.5s;
        .line {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 5px;
          height: 100%;
          background: #2babcc;
        }
        .content {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 8px;

          .head {
            h3 {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 130%;
              /* identical to box height, or 26px */

              background: linear-gradient(
                  95.79deg,
                  #0d0d2f 19.35%,
                  #4e4e86 79.05%
                ),
                #0d0d2f;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .descr {
            p {
              transition: 0.5s 0.5s;
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
      }
    }
    .right {
      width: 609px;
      height: 421px;
    }
  }
`;
