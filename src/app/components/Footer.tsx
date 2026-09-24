"use client";

import Link from "next/link";
import styled from "styled-components";
import { colors, typography, spacing } from "../styles/tokens";

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: ${spacing.xl} 40px;
  border-top: 1px solid ${colors.borderDefault};
  background: ${colors.white};

  @media (max-width: 768px) {
   padding: ${spacing.xl} ${spacing.md};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${spacing.xl};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

const FooterTitle = styled.h2`
  color: ${colors.emerald80};
  font-size: ${typography.headlineSm.fontSize};
  font-weight: ${typography.headlineSm.fontWeight};
  line-height: ${typography.headlineSm.lineHeight};
`;

const FooterDescription = styled.p`
  max-width: 420px;
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
`;

const FooterNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.xs};
  }
`;

const FooterLink = styled(Link)`
  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  text-decoration: none;

  &:hover {
    color: ${colors.emerald80};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const FooterBottom = styled.div`
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.borderDefault};
`;

const Copyright = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textSm.fontSize};
  line-height: ${typography.textSm.lineHeight};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterBrand>
            <FooterTitle>Lacrei Saúde</FooterTitle>

            <FooterDescription>
              Encontre profissionais de saúde para um atendimento acolhedor e
              respeitoso.
            </FooterDescription>
          </FooterBrand>

          <FooterNavigation aria-label="Navegação do rodapé">
            <FooterLink href="/#search">Buscar profissionais</FooterLink>

            <FooterLink href="/#help">Ajuda</FooterLink>
          </FooterNavigation>
        </FooterTop>

        <FooterBottom>
          <Copyright>© 2026 Lacrei Saúde</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}
