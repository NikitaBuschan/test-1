import styled from "styled-components";

export const SHeaderDark = styled.header`
  position: relative;
  width: 100%;
  height: 112px;
  background: #0f0f31;
  box-shadow: 0px 10px 30px rgba(29, 29, 74, 0.2),
    0px -10px 30px rgba(226, 226, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000; //top level for header

  .wrapper {
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 96px;

    .logo {
      margin-right: 44px;
      cursor: pointer;
      img {
        width: 144px;
        height: 18.19px;
      }
    }

    .socials {
      display: flex;
      gap: 24px;

      margin-right: 306px;
      a {
        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    nav {
      display: flex;
      gap: 24px;
      button {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        padding: 8px 9.5px;
        align-items: center;

        gap: 4px;
        .title {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: rgba(210, 218, 255, 0.7);
          }
          img {
            width: 24px;
            height: 24px;
            transform: rotateZ(0deg);
            transition: all 0.3s;
          }
          .opened {
            transform: rotateZ(-180deg);
            transition: all 0.3s;
          }
        }
        ul {
          opacity: 1;
          transition: all 0.3s;
          position: absolute;

          top: 54px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0px 0px 30px rgba(192, 216, 253, 0.6);

          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          ::before {
            top: -14px;
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;

            border-bottom: 14px solid white;
          }
          a {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            cursor: pointer;
            img {
              width: 32px;
              height: 32px;
            }
            p {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 160%;
              /* or 19px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);
            }
          }
        }
        .products {
          width: 196px;
          height: 175px;
        }
        .developers {
          width: 155px;
          height: 135px;
        }
        .company {
          width: 162px;
          height: 95px;
        }
        .community {
          width: 154px;
          height: 99px;
        }
        .hidden {
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
        }
        .active {
          cursor: default;
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
  }
`;
