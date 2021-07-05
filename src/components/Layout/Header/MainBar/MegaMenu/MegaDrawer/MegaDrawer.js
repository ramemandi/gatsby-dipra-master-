import * as React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap' //eslint-disable-line
import styled from 'styled-components'
import get from 'lodash/get'
import { colors } from '../../../../../../vars/palette';
import MegaDrawerSubMenuCol from './MegaDrawerSubMenuCol';
//  top: -300px;
//   @media screen and (min-width: 768px) {
// .show {
//    -webkit-transform: translateY(100%);
  //  transform: translateY(102px);
  //  margin-top: 0px;
 // }
//}/   top: -300; 
const Wrap = styled.div`
  * {
    transition: all .3s ease;
  }
  width: 100vw;
  padding: 5vw;
  // background: ${colors.secondary};
  background: #001743;
  color: white;
  position: absolute;
  z-index: -1;
  left: 0; 
  opacity: 0;
  
  &.show {
    z-index: 10;
    opacity: 1;
  }


`
const CloseButton = styled.button`
  position: absolute;
  z-index: 5;
  top: 1rem;
  right: 1rem;
  display: block;
  border: none;
  background-color: #001743;
  color: white;
`

const MegaMenuDrawer = ({ menu, currMenu, updateCurrMenu }) => {
  // console.log('menu: ', menu);
  console.log('MegaDrawer: ',menu, currMenu);
  const [currPrimarySubMenu, setCurrPrimarySubMenu] = useState(null);
  const [currSecondarySubMenu, setCurrSecondarySubMenu] = useState(null);
  const [currTertiarySubMenu, setCurrTertiarySubMenu] = useState(null);

  const links = get(menu, 'links');
  let drawerMenuItems;
  links.forEach(link => {
    if (link.title === currMenu) {
      drawerMenuItems = link.links;
    }
  })
  console.log('drawerMenuItems: ', drawerMenuItems);

  const updateSubMenu = (level, menu) => {
    console.log(updateSubMenu,'level');
    switch (level) {
      case "primary":
        if (menu !== currPrimarySubMenu) {
          setCurrPrimarySubMenu(menu);
          setCurrSecondarySubMenu(null);
          setCurrTertiarySubMenu(null);
        }
        break;
      case "secondary":
        if (menu !== currSecondarySubMenu) {
          setCurrSecondarySubMenu(menu);
          setCurrTertiarySubMenu(null);
        }
        break;
      case "tertiary":
        if (menu !== currTertiarySubMenu) {
          setCurrTertiarySubMenu(menu);
        }
        break;
      default:
        break;
    }
  }

  return (
    <Wrap className={currMenu !== null ? "show" : null}>
      <Container fluid>
        <Row>
          {currMenu &&
            <MegaDrawerSubMenuCol
              level="primary"
              title={currMenu}
              menu={drawerMenuItems}
              updateSubMenu={updateSubMenu}
            />
          }
        </Row>
      </Container>
      <CloseButton onClick={() => updateCurrMenu(currMenu)}>X</CloseButton>
    </Wrap>
  )
}

export default MegaMenuDrawer