import * as React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
//import get from "lodash/get";
import MegaMenu from "./MegaMenu/MegaMenu";
import HeaderLogo from "./Logo";
import MegaMenuDrawer from "./MegaMenu/MegaDrawer/MegaDrawer";
// import { HiMenu,HiOutlineX } from "react-icons/hi";

const Wrap = styled.div`
  * {
    transition: all 0.3s ease;
  }
  .mainBar-row{
    box-shadow: 0 10px 8px -6px #a7a7a7 !important;
  }
  .vert-center {
    display: flex;
    align-items: center;
    justify-content: center
  }

  `;

// const ToggleButton = styled.button`
//   position: absolute;
//   visibility: visible;
//   float:right;
//   z-index: -1111;
//   @media screen and (max-width:767px){
//       visibility: visible;
//   }
// .navigation li button i {
//   width: 100%;
//   font-size: 20px;
//   margin-bottom: 7px;
// }
// `;


/**
 * @component
 * @param {Menu} megaMenu
 * @param {string} siteTitle 
 * @returns {JSX}
 */
const HeaderMainBar = ({ megaMenu, siteTitle }) => {
  console.log(megaMenu, siteTitle, 'megaMenu,siteTitle');
  const [currMenu, setCurrMenu] = useState(null);
  const updateCurrMenu = (menu) => {
    console.log(menu, 'menu-MainBar');
    if (menu === currMenu) {
      setCurrMenu(null);
    } else {
      setCurrMenu(menu);
    }
  };
  return (
    <Wrap>
      <Container fluid>
        <Row className='mainBar-row'> 
          <Col lg={2} sm={4} xs={4} className="vert-center">
            <HeaderLogo siteTitle={siteTitle} />
          </Col>
          <Col lg={10} sm={8} xs={8} >
            {/* <input type="checkbox" id="toggle-btn" />
            <label htmlFor="toggle-btn" className="show-menu-btn"><HiMenu/></label>
            <nav>
              <ul class="navigation"> */}
                <MegaMenu menu={megaMenu} updateCurrMenu={updateCurrMenu} />
              
            {/* <nav>
              <ul class="navigation">
                <li><a href="#"><i class="fas fa-house-damage"></i> Home</a></li>
                <li><a href="#"><i class="far fa-image"></i> Link2</a></li>
                <li><a href="#"><i class="fab fa-blogger-b"></i> Link3</a></li>
                <li><a href="#"><i class="fas fa-question"></i> Link4</a></li>
                <li><a href="#"><i class="fas fa-phone-alt"></i> Link5 Us</a></li>
                <label for="toggle-btn" class="hide-menu-btn">R<i class="fas fa-times"></i></label>
              </ul>
            </nav> */}
          </Col>
          {/* <Col lg={8} className="vert-center">
            <MegaMenu menu={megaMenu} updateCurrMenu={updateCurrMenu} />
          </Col>
          <Col lg={1} className="vert-center">
            share and search
          </Col>
          <Col lg={1} className="vert-center">
           <ToggleButton  onClick={() => updateCurrMenu('title')} key={'title' + 'i'}> = </ToggleButton>
          </Col> */}
        </Row>
      </Container>
      <MegaMenuDrawer
        menu={megaMenu}
        currMenu={currMenu}
        updateCurrMenu={updateCurrMenu}
      />
    </Wrap>
  );
};

export default HeaderMainBar;

// import * as React from "react";
// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import styled from "styled-components";
// //import get from "lodash/get";
// import MegaMenu from "./MegaMenu/MegaMenu";
// import HeaderLogo from "./Logo";
// import MegaMenuDrawer from "./MegaMenu/MegaDrawer/MegaDrawer";

// const Wrap = styled.div`
//   * {
//     transition: all 0.3s ease;
//   }
//   .vert-center {
//     display: flex;
//     align-items: center;
//   }
//   padding: 0.5rem 0;
//   `;

// const ToggleButton = styled.button`
//   position: absolute;
//   visibility: visible;
//   float:right;
//   z-index: -1111;
//   @media screen and (max-width:767px){
//       visibility: visible;
//   }
// `;


// /**
//  * @component
//  * @param {Menu} megaMenu
//  * @param {string} siteTitle 
//  * @returns {JSX}
//  */
// const HeaderMainBar = ({ megaMenu, siteTitle }) => { 
//   console.log(megaMenu,siteTitle,'megaMenu,siteTitle');  
//   const [currMenu, setCurrMenu] = useState(null);
//   const updateCurrMenu = (menu) => {
//     console.log(menu,'menu');
//     if (menu === currMenu) {
//       setCurrMenu(null);
//     } else {
//       setCurrMenu(menu);
//     }
//   };
//   return (
//     <Wrap>
//       <Container>
//         <Row>
//           <Col lg={2} className="vert-center">
//             <HeaderLogo siteTitle={siteTitle} />
//           </Col>
//           <Col lg={8} className="vert-center">
//             <MegaMenu menu={megaMenu} updateCurrMenu={updateCurrMenu} />
//           </Col>
//           <Col lg={1} className="vert-center">
//             share and search
//           </Col>
//           <Col lg={1} className="vert-center">
//            <ToggleButton  onClick={() => updateCurrMenu('title')} key={'title' + 'i'}> = </ToggleButton>
//           </Col>
//         </Row>
//       </Container>
//       <MegaMenuDrawer
//         menu={megaMenu}
//         currMenu={currMenu}
//         updateCurrMenu={updateCurrMenu}
//       />
//     </Wrap>
//   );
// };

// export default HeaderMainBar;

