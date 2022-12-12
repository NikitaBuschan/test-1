import styled from "styled-components";

export const SPartnersLine = styled.section`
  width: 100%;
  height: 52px;
  overflow: hidden;
  .inner {
    width: 9920px;
    height: 52px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    animation: Slide 60s infinite forwards linear;
    .av {
      width: 260px;
      height: 52px;
    }
    .eth {
      width: 211.15px;
      height: 48.85px;
    }
    .pol {
      width: 176.48px;
      height: 37.82px;
    }
    .near {
      width: 182.79px;
      height: 48.23px;
    }
    .har {
      width: 196.29px;
      height: 50.42px;
    }
    .moon {
      width: 212.73px;
      height: 40.8px;
    }
    .bin {
      width: 219.03px;
      height: 45.7px;
    }
    .solana {
      width: 223.76px;
      height: 33.09px;
    }
    .imm {
      width: 222px;
      height: 46px;
    }
  }

  @keyframes Slide {
    0% {
    }
    100% {
      transform: translateX(-4960px);
    }
  }
`;
