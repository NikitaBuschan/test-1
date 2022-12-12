import styled from "styled-components";

export const StyledSlide = styled.div`
  .block {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 48px;
    .left {
      width: 659px;
      height: 323px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 8px;
      img {
        width: auto;
        height: 323px;
        border-radius: 8px;
      }
    }
    .right {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      h1 {
        width: 462px;

        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 130%;
        /* or 42px */

        letter-spacing: -0.02em;

        /* Light/high emphasis content */

        color: #0d0d2f;
      }
      h2 {
        font-family: "Satoshi";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        /* Light/medium emphasis content */

        color: rgba(13, 13, 48, 0.6);
      }
      p {
        width: 462px;
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
