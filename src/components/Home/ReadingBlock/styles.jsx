import styled from "styled-components";

export const SReadingBlock = styled.section`
  display: flex;
  justify-content: center;
  .wrap {
    max-width: 1247px;
    width: 100%;

    display: flex;
    flex-direction: column;
    h1 {
      width: 520px;
      height: 62px;
      margin-left: 24px;
      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 130%;
      /* or 62px */

      /* Light/main gradient */

      background: linear-gradient(95.79deg, #0d0d2f 19.35%, #4e4e86 79.05%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      margin-top: 20px;
    }
    .desc {
      margin-left: 24px;
      width: 376px;
      height: 52px;

      /* body 16px */

      font-family: "Satoshi";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      /* or 26px */

      /* Light/medium emphasis content */

      color: rgba(13, 13, 48, 0.6);
      margin-bottom: 64px;
    }
    .cards {
      display: flex;
      gap: 23px;
      .large {
        display: flex;
        gap: 24px;

        .card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          gap: 12px;

          width: 400px;
          height: 439px;

          background: #f4fbff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          h3 {
            width: 322px;
            height: 56px;

            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            /* or 27px */

            /* Light/high emphasis content */

            color: #0d0d2f;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          p {
            width: 326px;
            height: 80px;
            font-family: "Satoshi";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 160%;

            color: rgba(13, 13, 48, 0.6);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          :hover {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0px -25px 40px rgba(206, 226, 255, 0.4);
            h3 {
              color: #2babcc;
            }
          }
        }
      }
      .small {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .card {
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 16px 20px;
          gap: 16px;

          width: 400px;
          height: 133px;

          background: #f4fbff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;

          img {
            width: 139px;
            height: 91px;

            border-radius: 8px;
          }
          .text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;

            width: 205px;
            height: 101px;
            h3 {
              width: 205px;
              height: 57px;

              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 150%;
              /* or 24px */

              /* Light/high emphasis content */

              color: #0d0d2f;

              /* Inside auto layout */

              flex: none;
              order: 0;
              align-self: stretch;
              flex-grow: 0;

              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            p {
              width: 205px;
              height: 44px;

              font-family: "Satoshi";
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 160%;
              /* or 22px */

              /* Light/medium emphasis content */

              color: rgba(13, 13, 48, 0.6);

              /* Inside auto layout */

              flex: none;
              order: 1;
              align-self: stretch;
              flex-grow: 0;

              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          :hover {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0px -25px 40px rgba(206, 226, 255, 0.4);
          }
        }
      }
    }
  }
`;
