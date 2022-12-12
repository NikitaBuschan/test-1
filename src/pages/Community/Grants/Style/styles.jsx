import styled from "styled-components";

export const SGrantProgram = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: calc(100vh - 112px); // full page without header
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      min-height: 100vw;

      background: linear-gradient(
        20.36deg,
        rgba(186, 196, 206, 0) 40.47%,
        rgba(169, 210, 247, 0.5) 116.5%
      );
      transform: matrix(-1, 0, 0, 1, 0, 0);

      top: 0;
      left: 0;
      img {
        position: absolute;
        width: 100%;
      }
      z-index: -1;
    }
    .formBlock {
      margin-top: 80px;
      min-width: 612px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title {
        margin-bottom: 24px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 130%;
        /* or 62px */

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
      h2 {
        margin-bottom: 48px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        /* identical to box height, or 34px */

        letter-spacing: -0.02em;

        /* Light/high emphasis content */

        color: #0d0d2f;
      }
      p {
        width: 596px;
        padding-left: 8px;
        margin-bottom: 16px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        /* or 27px */

        /* Light/high emphasis content */

        color: #0d0d2f;
      }
      .block {
        position: relative;
        .textarea,
        .texterror,
        .texttrue {
          margin-bottom: 32px;
          padding: 8px 16px;
          isolation: isolate;
          resize: none;
          position: relative;
          width: 612px;
          height: 284px;

          background: #ffffff;
          border: 1px solid #959595;
          border-radius: 12px;

          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;

          color: #767683;
        }
        .texterror {
          border: 1px solid rgba(211, 40, 29, 1);
        }
        .texttrue {
          border: 1px solid rgba(18, 135, 15, 1);
        }
        .error,
        .success {
          right: 0;
          bottom: 10px;
          position: absolute;
          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          text-align: right;
        }

        .success {
          color: #12870f;
        }
        .error {
          color: #d3281d;
        }
        .empt {
          display: none;
        }
        .counter,
        .counterror {
          position: absolute;
          width: 82px;
          height: 22px;
          right: 16px;
          bottom: 24px;

          /* body 14px */

          font-family: "Satoshi";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 160%;
          text-align: right;
          /* or 22px */

          /* Light/Placeholder input */

          color: #767683;
        }
        .counterror {
          color: #d3281d;
        }
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        gap: 12px;

        width: 119.5px;
        height: 48px;

        border: none;
        background: radial-gradient(
            176.24% 995.34% at -76.24% 151.33%,
            #7d42fb 0%,
            #2ed6e1 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        border-radius: 100px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        /* identical to box height, or 21px */

        color: #ffffff;

        cursor: pointer;
      }
    }
  }
`;
