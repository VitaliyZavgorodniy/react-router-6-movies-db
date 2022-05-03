import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink className={match ? 'active' : null} to={to} {...props}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  padding: 10px;
  color: ${(p) => p.theme.mainColor};
  font-family: ${(p) => p.theme.mainFF}, sans-serif;
  transition: background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};

  &.active,
  &:hover {
    color: ${(p) => p.theme.accentColor};
    background-color: ${(p) => p.theme.lightBG};
  }
`;

export default CustomLink;
