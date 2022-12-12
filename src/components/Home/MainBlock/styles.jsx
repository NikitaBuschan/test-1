import styled from "styled-components";

export const SMainBlock = styled.section`
  min-height: 758px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;

  .stars {
    position: absolute;
    top: 400px;
    right: 593px;
    z-index: -2;
    width: 195.1px;
    height: 207px;
  }
  .blur {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -3;
    width: 1198.82px;
    height: 786.19px;
  }

  .top {
    position: relative;
    max-width: 1248px;
    width: 100%;

    display: flex;

    .left {
      width: 487px;
      margin-top: 110px;

      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;
        /* or 77px */

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
      }

      h2 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;
        /* identical to box height, or 77px */

        letter-spacing: -0.02em;

        background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        margin-bottom: 20px;
      }

      .discr {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        /* or 26px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);

        margin-bottom: 48px;
      }

      .buttonBlock {
        display: flex;
        gap: 12px;

        .try {
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
        .view {
          display: flex;
          gap: 4px;
          align-items: center;
          justify-content: center;

          text-decoration: none;

          img {
            width: 20px;
            height: 20px;
          }

          div {
            p {
              font-family: "Satoshi";
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 150%;
              /* identical to box height, or 21px */

              background: linear-gradient(0deg, #7d42fb, #7d42fb),
                radial-gradient(
                    100% 562.44% at 0% 100%,
                    #7d42fb 0%,
                    #2ed6e1 100%
                  )
                  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                #000000;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
            .line {
              width: 66px;
              height: 0px;

              border: 0.5px solid #7d42fb;
              border-radius: 50%;
            }
          }

          :hover {
            div {
              p {
                background: linear-gradient(0deg, #a378ff, #a378ff),
                  radial-gradient(
                      100% 562.44% at 0% 100%,
                      #7d42fb 0%,
                      #2ed6e1 100%
                    )
                    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                  #000000;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              }
            }
          }
        }
      }
    }
    .right {
      margin-top: 50px;
      width: 718.2px;
      height: 580.83px;
      position: relative;
      img {
        position: absolute;
        width: 918.2px;
        height: 580.83px;
      }
    }
  }
  .bot {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 108px;

    width: 1136px;
    height: 51px;
  }
`;
