import styled from 'styled-components';

import Container from 'components/UI/Container';

import Navigation from './Navigation';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(p) => p.theme.headerHeight};
  background-color: ${(p) => p.theme.accentBG};
`;

export default Header;
