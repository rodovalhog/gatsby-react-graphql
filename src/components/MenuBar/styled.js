import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
    aling-items: center;
    background: #192734;
    boder-left: 1px solid #38444d;
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    posiiton fixed;
    right: 0;
    width 3.75rem;
`;

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
    display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &:hover {
    color: #1fa1f2;
  }
`;

