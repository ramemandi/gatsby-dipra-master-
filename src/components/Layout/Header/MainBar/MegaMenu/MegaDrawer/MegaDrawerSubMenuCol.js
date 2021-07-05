import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap' //eslint-disable-line
import styled from 'styled-components'
import get from 'lodash/get'
import { colors } from '../../../../../../vars/palette';
import { WmkLink } from 'wmk-lib';
 
const WrapCol = styled(Col)`
  * {
    transition: all .3s ease;
  }
  .menuCols{
    position: relative;
    overflow-y: auto;
    border: none;
    background-color: #001743;
    color: white;
    display: block;
  }
  .title {
    // color: ${colors.primary};
    color: #7AB800;
    font-weight: bold;
  }
  button{
    display: block;
    border: none;
    background-color: #001743;
    color: white;
    padding: 6px 2px;
  }
  a{
    display: block;
    border: none;
    background-color: #001743;
    color: white;
    padding: 6px 2px;
  }
`
 
const MegaDrawerSubMenuCol = ({ level, title, menu, updateSubMenu }) => {
  console.log('level, title,menu: ',level, title, menu);
  return (
    <WrapCol lg={3}>
      {title && <p className="title">{title}</p>}
      {menu.map((m, i) => {
        const type = m.links ? "menu" : m.text ? "item" : null;
        console.log(type,'type');
        const title = type === "menu" ? get(m, "title") : type === "item" ? get(m, "text") : null;
        console.log(title,'title');

        const name = type === "menu" ? title.split(" > ")[1] : type === "item" ? title : null;
        console.log(name,'name');

        const links = get(m, 'links'); //eslint-disable-line
        console.log(links,'links');

        const to = get(m, 'to');
        console.log(to,'to');

        const target = get(m, 'target');
        if (type === "menu") {
          return (<button key={i} onClick={() => updateSubMenu(level, title)}>{name}</button>);
        } else if (type === "item") {
          return (<WmkLink to={to} target={target}>{name}</WmkLink>);
        } else {
          return (null);
        }
      })}
    </WrapCol>
  )
}
 
export default MegaDrawerSubMenuCol