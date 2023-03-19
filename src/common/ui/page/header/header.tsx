import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import HamburgerButton from "./assets/hamburger-button.svg";
import { HeaderItem } from "./header-item";

const MobileMenuButton = styled.img.attrs({
  src: HamburgerButton,
  alt: "menu-open-icon",
})``;

const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background: #312f2f;
`;
export const Header = styled(({ className }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <header className={className}>
      <MobileMenuButton />
      {createPortal(<MobileDrawer>123123</MobileDrawer>, document.body)}
      <HeaderItem label="HOME" active />
      <HeaderItem label="STUDIES" />
      <HeaderItem label="PROJECTS" />
      <HeaderItem label="CONTACT" />
    </header>
  );
})`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;

  height: 10.4rem;
  padding: 3.6rem 0;

  ${MobileMenuButton} {
    display: none;
  }

  ${(props) => props.theme.device.large} {
    ${MobileMenuButton} {
      display: block;
    }
    ${HeaderItem} {
      display: none;
    }
  }
`;
