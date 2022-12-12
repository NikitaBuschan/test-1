import styled from "styled-components";

export const SInfrastructureBlock = styled.section`
  position: relative;
  margin-top: 200px;
  max-width: 1248px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  .left {
    width: 597px;
    height: 244px;
    .title {
      display: flex;
      white-space: nowrap;
      flex-wrap: wrap;
      width: 570px;
      height: 161px;
      column-gap: 1em;
      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 76px;
        /* identical to box height */

        text-align: center;

        background: radial-gradient(
              100% 562.44% at 0% 100%,
              #7d42fb 0%,
              #2ed6e1 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          radial-gradient(
              161.68% 202.72% at 170.79% -16.45%,
              #a378ff 28.79%,
              #8841ff 50.25%,
              #9a42fb 69.48%,
              #42fbad 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          #fdfdfd;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
      }
      h2 {
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
      }
    }
    p {
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      /* or 21px */

      color: rgba(210, 218, 255, 0.7);
    }
  }
  .right {
    width: 619px;
    height: 573px;
  }
`;
