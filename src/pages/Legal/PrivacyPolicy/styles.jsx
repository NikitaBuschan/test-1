import styled from "styled-components";

export const SPrivacyPolicy = styled.div`
  .content {
    width: 100%;
    padding-top: 26px;
    display: flex;
    justify-content: center;
    .wraper {
      width: 648px;
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
      h2 {
        margin-top: 24px;
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
      .date {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);

        margin: 24px 0 16px 0;
      }
      p {
        margin-top: 8px;
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        /* or 26px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);

        a {
          text-decoration: none;
          color: #7d42fb;
        }
      }
      ul {
        list-style: disc;
        list-style-position: inside;
        li {
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
  }
`;
