import styled from "styled-components";

export const STermsOfService = styled.main`
.content {
    width: 100%;
    padding-top: 26px;
    display: flex;
    justify-content: center;
    .wraper {
      width: 601px;
      h1 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 130%;
        /* identical to box height, or 42px */

        letter-spacing: -0.02em;

        /* Light/high emphasis content */

        color: #0d0d2f;

        margin-top: 24px;
      }
      h3 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */

        /* Light/high emphasis content */

        color: #0d0d2f;
        margin-top: 24px;
      }
      p {
        margin-top: 24px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        /* or 26px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);
      }
    }
  }
`;
