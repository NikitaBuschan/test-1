import styled from "styled-components";

import bgab from "../../../assets/images/Home/bgab.png";
import line from "../../../assets/images/Home/line.png";

export const SArchirtectureBlock = styled.section`
  position: relative;
  margin-top: 264px;
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 21px;
  .left {
    margin-left: -85px;
    width: 639px;
    height: 660px;
  }
  .right {
    width: 717.28px;
    min-height: 457px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .bg {
      position: absolute;
      top: -50px;
      right: -10px;
      width: 385.28px;
      height: 385.28px;
      background: url(${bgab});
      background-size: 100% 100%;
    }
    h1 {
      width: 697px;
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 56px;
      line-height: 76px;

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
    p {
      width: 525px;
      height: 42px;

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      /* or 21px */

      color: rgba(210, 218, 255, 0.7);

      margin-bottom: 50px;
      span {
        font-weight: 700;
        color: #d2daff;
        position: relative;
        .line {
          position: absolute;
          right: 0px;
          width: 332.5px;
          height: 6.4px;
          background: url(${line});
          background-size: 100% 100%;
        }
      }
    }
    .learn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      gap: 4px;

      width: 148.5px;
      height: 48px;

      background: radial-gradient(
          176.24% 995.34% at -76.24% 151.33%,
          #7d42fb 0%,
          #2ed6e1 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      border-radius: 100px;

      text-decoration: none;

      margin-bottom: 50px;
      .text {
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
