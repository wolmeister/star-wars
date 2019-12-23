import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

// cannot pass to Tabs
// styled pass all props to the html element
// https://github.com/styled-components/styled-components/issues/439
type TabItemProps = {
  current: boolean;
};

const iconFilter =
  'invert(77%) sepia(96%) saturate(412%) hue-rotate(353deg) brightness(103%) contrast(101%);';

export const TabIcon = styled.img<TabItemProps>`
  width: 42px;
  height: 42px;
  transition: all 0.5s;
  filter: ${props => (props.current ? iconFilter : 'invert(1)')};
`;

export const TabText = styled.span<TabItemProps>`
  padding-left: 15px;
  transition: color 0.5s;
  color: ${props => (props.current ? props.theme.colors.primary : '')};
  user-select: none;

  @media (max-width: 1175px) {
    display: none;
  }
`;

export const StyledTabs = styled(Tabs)`
  padding: 15px 0;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const StyledTabList = styled(TabList)`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledTab = styled(Tab)`
  display: inline-flex;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    ${TabText} {
      color: ${props => props.theme.colors.primary};
    }

    ${TabIcon} {
      filter: ${iconFilter};
    }
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  overflow: auto;
`;
