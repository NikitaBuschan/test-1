import styled from "styled-components";

export const SMarketingProgramBlock = styled.section`
  width: 100%;
  display: flex;
  margin-left: 20px;
  margin-top: 440px;

  .wrap {
    display: flex;
    gap: 132px;
    align-items: center;

    .right {
      width: 473px;
      height: 247px;
      .title {
        width: 435px;
        height: 62px;

        /* h2 48px */

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

        margin-bottom: 20px;
      }
      .descr {
        width: 473px;
        height: 85px;

        /* subheading 18px */

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        color: #000000;

        margin-bottom: 32px;
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

    .left {
      width: 578.53px;
      height: 455.25px;
    }
  }
`;
