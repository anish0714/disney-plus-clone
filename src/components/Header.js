import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        {/* ------------------------------------------HOME------------------- */}
        <a href="!#">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        {/* ----------------------------------------SEARCH------------------- */}
        <a href="!#">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        {/* ----------------------------------------WATCHLIST------------------- */}
        <a href="!#">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        {/* ----------------------------------------ORIGINALS------------------- */}
        <a href="!#">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        {/* ----------------------------------------MOVIES------------------- */}
        <a href="!#">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        {/* ----------------------------------------SERIES------------------- */}
        <a href="!#">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-user-icon-image_1187018.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    //-------------------------- IMAGE INSIDE NAV MENU
    img {
      height: 20px;
    }

    //-------------------------- SPAN INSIDE NAV MENU
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      color: white;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        // top: 0;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
