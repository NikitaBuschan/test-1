import styled from "styled-components";

import stripes2 from "../../assets/images/Home/stripes2.png";
import bgDark from "../../assets/images/Home/bgDark.png";

export const SHome = styled.div`
  main {
    min-height: calc(100vh - 112px); // full page without header
    .bgDark {
      width: 100%;
      min-height: 2688.04px;
      background: url(${bgDark});
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .stripes {
        position: absolute;
        margin-top: 121px;
        width: 810px;
        height: 2569px;
        background: url(${stripes2});
        background-size: 100% 100%;
      }
    }
  }
`;
