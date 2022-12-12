import styled from "styled-components";
import img from "../../../assets/images/Grants/grantProg.png";

export const SInvolvedTGProg = styled.section`
  display: flex;
  justify-content: center;
  background-image: url(${img});
  background-size: 100% 100%;
  background-position: center;
  height: 586px;
  width: 100%;

  .wrapp {
    width: 619px;
    height: 237px;

    .grantProgContent {
      margin: 132px auto 217px auto;
      display: flex;
      flex-direction: column;
      width: 619px;
      height: 124;

      h2 {
        font-weight: 500;
        line-height: 130%;
        font-family: "Satoshi";
        font-style: Medium;
        font-size: 48px;
        text-align: center;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, #0d0d2f, #4e4e86);
      }
    }

    .grantProgText {
      width: 517px;
      margin: 32px auto 0px auto;

      p {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;

        text-align: center;
      }
    }
  }
`;
