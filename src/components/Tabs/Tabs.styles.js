import styled from "styled-components";
import { HorizontalShadow } from "../App/App.styles";

export const TabsStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  .ant-tabs-content-holder {
    display: flex;
  }

  .ant-tabs {
    flex: 1;

    &-tabpane {
      display: none;
    }
  }

  .sidebar {
    width: 330px;
  }

  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-page-header-heading {
    align-items: center;
  }

  .tab-panel {
    padding: 1em;
    z-index: 100;
    position: relative;

    ${HorizontalShadow}
  }
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
