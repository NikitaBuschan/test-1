import styled from "styled-components";

export const SFooterDark = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 325px;
  padding-bottom: 26px;
  overflow: hidden;
  .bg_bot {
    height: 100%;
    width: 200%;
    position: absolute;
    box-shadow: 0px 20px 30px #1d1d4a, 0px -20px 30px rgba(226, 226, 255, 0.05);
    top: 153px;
    background: radial-gradient(#212144 0%, #0d0d2f 100%)
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    overflow: hidden;
    .bg_top {
      position: absolute;
      bottom: 0px;
      height: 95%;
      width: 100%;
      background: radial-gradient(
          76.61% 311.52% at 69.51% -321.62%,
          #212144 0%,
          #0d0d2f 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }

  .wraper {
    max-width: 1036px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 71px;
      .left {
        display: flex;
        flex-direction: column;
        gap: 28px;
        padding-top: 8px; //align with right side
        .logo {
          img {
            width: 175.67px;
            height: 22.19px;
          }
        }
        .socials {
          display: flex;
          gap: 24px;
          img {
            width: 32px;
            height: 32px;
          }
        }
        .try {
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 16px 24px;
          gap: 4px;

          width: 110px;
          height: 40px;

          border-radius: 100px;
          text-decoration: none;
          ::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 100px;
            padding: 2px; /* control the border thickness */

            background: radial-gradient(
                176.24% 995.34% at -76.24% 151.33%,
                #7d42fb 0%,
                #2ed6e1 100%
              )
              /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            border-radius: 100px;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }

          p {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            /* identical to box height, or 21px */

            background: radial-gradient(
                  176.24% 995.34% at -76.24% 151.33%,
                  #7d42fb 0%,
                  #2ed6e1 100%
                )
                /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
              #ffffff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          :hover {
            background: radial-gradient(
                176.24% 995.34% at -76.24% 151.33%,
                #7d42fb 0%,
                #2ed6e1 100%
              )
              /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            p {
              background: #ffffff;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
        }
      }
      .right {
        display: flex;
        gap: 64px;
        div {
          display: flex;
          flex-direction: column;
          gap: 11px;
          h2 {
            padding: 8px;
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            /* identical to box height, or 21px */

            /* Dark/medium emphasis content */

            color: rgba(210, 218, 255, 0.7);
          }
          .link {
            width: fit-content;
            padding: 8px;
            text-decoration: none;

            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            /* identical to box height, or 21px */

            color: #fdfdfd;
          }
        }
      }
    }
    .bottom {
      .line {
        height: 0px;
        border: 1px solid rgba(210, 218, 255, 0.25);

        margin-bottom: 20px;
      }
      .copyright {
        text-align: center;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 150%;
        /* identical to box height, or 15px */

        letter-spacing: 1px;
        text-transform: capitalize;

        /* Dark/medium emphasis content */

        color: rgba(210, 218, 255, 0.7);
      }
    }
  }
`;
