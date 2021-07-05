import * as React from "react";
import { Container, Row, Col } from "react-bootstrap"; //eslint-disable-line
import styled from "styled-components";
import get from "lodash/get";
import { WmkLink } from "wmk-lib";
import { HiMenu, HiOutlineX } from "react-icons/hi";

/**
 * Wrapping styled-component element
 */
const Wrap = styled.div`
  * {
    transition: all 0.3s ease;
  }
  button {
    border: none;
    background: none;
    color: #1f3e4f;
    padding: 0;
    margin: 0 0.75rem;
    
  } 
  button:active,button:focus{
    border-bottom:20px solid red;
    positive:relative;
    z-index:15;
  
  }
  
  padding: 0.5rem 0;
  .navigation {
    margin: 0px;
    float: right;
}
.navigation li {
    list-style: none;
    float: left;
}
.navigation li button {
    padding: 15px 5px 30px 5px;
    text-align: center;
    display: block;
    text-decoration: none;
    position:relative;
    z-index:12;
}
.navigation li:active button{
    border-bottom : 6px solid orange;
}
 

.show-menu-btn,
.hide-menu-btn {
    transition: 0.4s;
    font-size: 30px;
    cursor: pointer;
    display: none;
}
.show-menu-btn {
    margin: 0px;
    float: right;
}
.show-menu-btn i {
    line-height: 100px;
}
.navigation a:hover,
.show-menu-btn:hover,
.hide-menu-btn:hover {
   // color: #00ff0a;
}
#toggle-btn {
    position: absolute;
    visibility: hidden;
    z-index: -1111;
}

/*-- Responsive CSS --*/
@media screen and (max-width:768px) {
.show-menu-btn,
.hide-menu-btn {
    display: block;
}
.navigation {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #001743;
    top: -100%;
    left: 0;
    padding: 20px 10px;
    transition: 1s;
    z-index:1;
}
.navigation li {
    width: 100%;
}
.navigation li button {
    padding: 5px 5px;
    text-align: left;
    color: #fff;
}
 
.hide-menu-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    color:white;
}
#toggle-btn:checked ~ nav .navigation {
    top: 0px;
}
}
`;

/**
 * @component - handles the logic/state and
 * view layer of multi-step mega menu
 * @param {Menu} menu
 * @param {Function} updateCurrMenu
 * @returns
 */
const MegaMenu = ({ menu, updateCurrMenu }) => {
  console.log('menu: ', menu);
  const topLevelLinks = get(menu, "links");

  return (
    <Wrap>
      <input type="checkbox" id="toggle-btn" />
      <label htmlFor="toggle-btn" className="show-menu-btn"><HiMenu /></label>
      <nav>
        <ul class="navigation">
          {topLevelLinks.map((link, i) => {
            const title = get(link, "title");
            const links = get(link, "links");
            const parent = get(link, "parent");
            const parentText = get(parent, "text");
            const text = get(link, "text");
            const to = get(link, "to");
            const target = get(link, "target");
            console.log(title, 'title');
            if (links) {
              return (
                <li ><button onClick={() => updateCurrMenu(title)} key={title + i}> {parentText}</button></li>
              );
            } else if (to) {
              return (
                <WmkLink to={to} target={target} key={title + i}>
                  {text}
                </WmkLink>
              );
            } else {
              return null;
            }
          })}
          <label for="toggle-btn" class="hide-menu-btn"><HiOutlineX /></label>
        </ul>
      </nav>
    </Wrap>
  );
};

export default MegaMenu;

{/* <button onClick={() => updateCurrMenu(title)} key={title + i}>
{parentText}
</button> */}
