import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MainNavigationProps {}

const StyledMainNavigation = styled.div`
  color: pink;
`;

export function MainNavigation(props: MainNavigationProps) {
  return (
    <StyledMainNavigation>
      <h1>Welcome to MainNavigation!</h1>
    </StyledMainNavigation>
  );
}

export default MainNavigation;
