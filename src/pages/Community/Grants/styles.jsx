import styled from "styled-components";
import wrapper from "../../../assets/images/Grants/wrapper.png";

export const SGrants = styled.div`
  width: 100%;
  main {
    min-height: calc(100vh - 112px); // full page without header
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrapper {
      margin-top: -160px;
      margin-right: 150px;
      display: flex;
      flex-direction: column;
      width: 1215.86px;
      height: 3753px;
      background: url(${wrapper});
      background-size: 100% 100%;
      margin-bottom: 405px;
    }
  }
`;
