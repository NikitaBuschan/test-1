import styled from "styled-components";

export const SGrantsBlock = styled.section`
  display: flex;
  justify-content: center;

  .wrap {
    position: relative;
    margin-top: 150px;
    margin-bottom: 189px;
    display: flex;
    gap: 110px;
    align-items: center;
    .left {
      width: 545px;
      height: 574.56px;
    }
    .right {
      width: 482px;
      height: 262px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px;
      gap: 40px;
      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 130%;
        /* identical to box height, or 73px */

        /* Light/main gradient */

        background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .descr {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);
      }
      .explore {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 4px;

        width: 154.5px;
        height: 48px;

        background: radial-gradient(
            176.24% 995.34% at -76.24% 151.33%,
            #7d42fb 0%,
            #2ed6e1 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        border-radius: 100px;

        text-decoration: none;
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
  }
`;
