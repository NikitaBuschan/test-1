import styled from "styled-components";

export const SProductsBlock = styled.section`
  margin-top: 250px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 74px;

    h1 {
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 56px;
      line-height: 76px;
      /* identical to box height */

      text-align: center;

      background: linear-gradient(
        123.56deg,
        #fdfdfd 30.06%,
        rgba(253, 253, 253, 0.69) 91.14%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      span {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 76px;
        /* identical to box height */

        text-align: center;

        /* accent gradient 1 */

        background: radial-gradient(
            100% 562.44% at 0% 100%,
            #7d42fb 0%,
            #2ed6e1 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    .cards {
      display: flex;
      gap: 112px;
      .card {
        width: 239px;
        height: 260px;
        img {
          width: 60px;
          height: 62px;
          margin-bottom: 12px;
        }
        h2 {
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 40px;
          line-height: 130%;
          /* identical to box height, or 52px */

          letter-spacing: -0.02em;

          background: linear-gradient(
              123.56deg,
              #fdfdfd 30.06%,
              rgba(253, 253, 253, 0.69) 91.14%
            ),
            linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%), #0d0d2f;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;

          margin-bottom: 20px;
        }
        .descr {
          height: 54px;
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          /* or 27px */

          color: rgba(210, 218, 255, 0.7);

          margin-bottom: 20px;
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

          width: 123px;
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

            white-space: nowrap;
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
  }
`;
