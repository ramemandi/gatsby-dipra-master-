import * as React from 'react';
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import get from 'lodash/get'
import { WmkLink } from 'wmk-lib';
import { colors } from '../../../vars/palette';
 
const Wrap = styled.div`
  * {
    transition: all .3s ease;
  }
  // background: ${colors.accent};
  @media (max-width: 767px) { 
        display:none;
  }
  background: #00AFD8;
  .container-fluid {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  a {
    // color: ${colors.reverse};
    color: white;
    font-size: .9rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 2rem;
  }
`
 /**
  * @component - Renders the main menu navigation as a multi-step mega menu
  * @param {Menu} menu 
  * @returns {JSX}
  */
const HeaderTopBar = ({ menu }) => {
  const links = get(menu, 'links');
  return (
    <Wrap>
      <Container fluid>
        {links.map((link, i) => {
          const text = get(link, 'text');
          const to = get(link, 'to');
          const target = get(link, 'target');
          return <WmkLink to={to} target={target} key={text+i}>{text}</WmkLink>
        })}
      </Container>
    </Wrap>
  )
}
 
export default HeaderTopBar