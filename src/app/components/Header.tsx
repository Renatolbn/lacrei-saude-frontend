"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { colors, typography } from "../styles/tokens";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 60px;
  border-bottom: 1px solid ${colors.borderDefault};
  background: ${colors.backgroundDefault};

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: 768px) {
    img {
      width: 150px;
      height: auto;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const HelpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  border: none;
  background: transparent;
  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBase.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  cursor: pointer;
  padding: 8px 12px;

  &:hover {
    color: ${colors.emerald80};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: ${typography.textSm.fontSize};
    padding: 8px 4px;
  }
`;

const HelpMenuWrapper = styled.div`
  position: relative;
`;

const HelpMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;

  min-width: 220px;
  padding: 8px;

  background: ${colors.white};
  border: 1px solid ${colors.borderDefault};
  border-radius: 8px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 10;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  padding: 4px;

  @media (max-width: 768px) {
    gap: 2px;
    padding: 2px;
  }
`;

const HelpMenuLink = styled(Link)`
  display: block;
  padding: 12px;

  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};

  border-radius: 4px;

  &:hover {
    background: ${colors.backgroundSuccess};
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 2px;
  }
`;

const UserIconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${colors.backgroundSuccess};
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const UserIcon = styled(PersonOutlineOutlinedIcon)`
  color: ${colors.emerald80};
`;

const Chevron = styled(KeyboardArrowDownIcon)`
  color: ${colors.emerald80};
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const helpButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">
          <Image
            src="/assets/images/logo_lacrei.png"
            alt="Lacrei Saúde"
            width={220}
            height={28}
          />
        </Logo>

        <Navigation aria-label="Navegação principal">
          <HelpMenuWrapper
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setIsMenuOpen(false);
                helpButtonRef.current?.focus();
              }
            }}
          >
            <HelpButton
              type="button"
              ref={helpButtonRef}
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
            >
              Ajuda
              {isMenuOpen ? (
                <KeyboardArrowUpIcon aria-hidden="true" />
              ) : (
                <KeyboardArrowDownIcon aria-hidden="true" />
              )}
            </HelpButton>

            {isMenuOpen && (
              <HelpMenu>
                <HelpMenuLink href="/#search">
                  Buscar profissionais
                </HelpMenuLink>

                <HelpMenuLink href="/#help">Ajuda</HelpMenuLink>
              </HelpMenu>
            )}
          </HelpMenuWrapper>
          <UserMenu>
            <UserIconCircle>
              <UserIcon />
            </UserIconCircle>
            <Chevron />
          </UserMenu>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
}
