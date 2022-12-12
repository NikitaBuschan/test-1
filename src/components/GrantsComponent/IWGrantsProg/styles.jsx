import styled from "styled-components";
import titleImg from "../../../assets/images/Grants/firstBgDark.png";

export const SIWGrantsProg = styled.section`
  width: 100%;
  .titleProg {
    display: flex;
    width: 100%;
    height: 1000;
    background-image: url(${titleImg});
    background-size: cover;
    background-position: bottom;
    justify-content: center;

    .wrapp {
      margin-top: 240px;
      margin-bottom: 329px;
      max-width: 820px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .titleText {
        display: flex;

        h1 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 64px;
          line-height: 130%;
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: linear-gradient(to bottom, #7d42fb, #2ed6e1);
        }

        h2 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 64px;
          line-height: 130%;
          padding-left: 12px;
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: linear-gradient(to right, #f5f5f7, #a6a6ad);
        }
      }
      .titleTextContent {
        max-width: 755px;
        font-family: "Satoshi";
        font-size: 16px;
        text-align: center;
        line-height: 25px;
        padding: 20px;
        color: #fdfdfd;
      }

      .apply {
        margin-top: 48px;
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
`;
