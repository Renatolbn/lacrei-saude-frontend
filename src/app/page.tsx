"use client";

import React from "react";
import { useState } from "react";
import ProfessionalCard from "./components/ProfessionalCard";
import { professionals } from "./data/professionals";
import styled from "styled-components";
import { colors, typography, spacing } from "./styles/tokens";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = styled.section`
  width: 100%;
  padding: 24px;
  background: ${colors.backgroundDefault};
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
    min-height: 600px;
  }
`;

const HeroTitle = styled.h1`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineXl.fontSize};
  font-weight: ${typography.headlineXl.fontWeight};
  line-height: ${typography.headlineXl.lineHeight};
  margin-bottom: ${spacing.sm};
`;

const HeroTitleHighlight = styled.span`
  color: ${colors.emerald60};
`;

const HeroText = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textXl.fontSize};
  font-weight: ${typography.textXl.fontWeight};
  line-height: ${typography.textXl.lineHeight};
  margin-bottom: ${spacing.xl};
`;

const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroEyebrow = styled.p`
  color: ${colors.emerald60};
  font-size: ${typography.textXl.fontSize};
  font-weight: ${typography.textXl.fontWeight};
  line-height: ${typography.textXl.lineHeight};
  margin-bottom: ${spacing.md};
`;

const HeroImageContent = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 9 / 7;
  object-fit: contain;
  display: block;
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 480px;
  aspect-ratio: 9 / 7;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

// Search Section

const SearchSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  background: #f1faf7;
  border-radius: 16px;
`;

const SearchTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineBase.fontSize};
  font-weight: ${typography.headlineBase.fontWeight};
  line-height: ${typography.headlineBase.lineHeight};
  margin-bottom: ${spacing.xs};
`;

const SearchDescription = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
  margin-bottom: ${spacing.lg};
`;

const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
`;

const LabelIcon = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.emerald60};

  svg {
    font-size: 24px;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 12px 48px;
  border: 1px solid #c8e6dc;
  border-radius: 8px;
  background: ${colors.white};
  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};

  &:focus {
    outline: 2px solid ${colors.emerald60};
    outline-offset: 2px;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: ${colors.emerald60};

  svg {
    font-size: 22px;
  }
`;

const InputChevron = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: ${colors.emerald60};
`;

const SearchButton = styled.button`
  height: 54px;
  padding: 0 32px;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${colors.emerald60};
  color: ${colors.white};
  font-size: ${typography.textBaseHigh200.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 2px;
  }
`;

const ClearSearch = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  color: ${colors.emerald60};
  font-family: inherit;
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const EmptyState = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: ${spacing.xl};
  text-align: center;
  border: 1px solid ${colors.alertText};
  border-radius: 12px;
  background: ${colors.alertBackground};
`;

const EmptyStateTitle = styled.h3`
  color: ${colors.alertText};
  font-size: ${typography.headlineSm.fontSize};
  font-weight: ${typography.headlineSm.fontWeight};
  line-height: ${typography.headlineSm.lineHeight};
  margin-bottom: ${spacing.sm};
`;

const EmptyStateText = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
`;

// Featured Section

const FeaturedSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl} 24px;
`;

const FeaturedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.md};
`;

const FeaturedTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineBase.fontSize};
  font-weight: ${typography.headlineBase.fontWeight};
  line-height: ${typography.headlineBase.lineHeight};

  @media (max-width: 768px) {
    font-size: ${typography.headlineSm.fontSize};
  }
`;

const ViewAll = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  color: ${colors.emerald60};
  font-family: inherit;
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  cursor: pointer;

  &:hover {
    color: ${colors.emerald80};
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: ${typography.textSm.fontSize};
    white-space: nowrap;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HelpSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing.xl} 24px;
`;

const HelpTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineBase.fontSize};
  font-weight: ${typography.headlineBase.fontWeight};
  line-height: ${typography.headlineBase.lineHeight};
  margin-bottom: ${spacing.sm};
`;

const HelpDescription = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
  margin-bottom: ${spacing.lg};
`;

const HelpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const HelpItem = styled.article`
  padding: ${spacing.md};
  border: 1px solid ${colors.borderDefault};
  border-radius: 12px;
  background: ${colors.white};
`;

const HelpQuestion = styled.h3`
  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  margin-bottom: ${spacing.sm};
`;

const HelpAnswer = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
`;

export default function Home() {
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState({
    specialty: "",
    location: "",
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!specialty.trim() && !location.trim()) {
      return;
    }

    setSearch({
      specialty,
      location,
    });

    setHasSearched(true);
    setShowAll(false);
  };

  const handleClearSearch = () => {
    setSpecialty("");
    setLocation("");
    setSearch({
      specialty: "",
      location: "",
    });
    setHasSearched(false);
    setShowAll(false);
  };

  const filteredProfessionals = professionals.filter((professional) => {
    return (
      professional.specialty
        .toLowerCase()
        .includes(search.specialty.toLowerCase()) &&
      professional.location
        .toLowerCase()
        .includes(search.location.toLowerCase())
    );
  });

  const displayedProfessionals = hasSearched
    ? filteredProfessionals
    : showAll
      ? professionals
      : professionals.slice(0, 3);

  return (
    <main>
      <Hero>
        <HeroContent>
          <HeroTextContent>
            <HeroEyebrow>SAÚDE PARA TODAS AS EXISTÊNCIAS.</HeroEyebrow>

            <HeroTitle>
              Cuidado em saúde que
              <br />
              <HeroTitleHighlight>respeita quem você é.</HeroTitleHighlight>
            </HeroTitle>

            <HeroText>
              Encontre profissionais preparados para oferecer um atendimento
              acolhedor e respeitoso.
            </HeroText>
          </HeroTextContent>
          <HeroImage>
            <HeroImageContent
              src="/assets/images/hero-lacrei.webp"
              alt="Pessoas sorrindo juntas, representando diversidade e acolhimento em saúde"
              width="900"
              height="700"
              fetchPriority="high"
            />
          </HeroImage>
        </HeroContent>
      </Hero>
      <SearchSection id="search">
        <SearchTitle>Encontre um profissional</SearchTitle>

        <SearchDescription>
          Busque por especialidade e localização para encontrar o cuidado ideal
          para você.
        </SearchDescription>

        <SearchForm onSubmit={handleSearch}>
          <SearchField>
            <SearchLabel htmlFor="specialty">
              <LabelIcon>
                <MedicalServicesOutlinedIcon aria-hidden="true" />
              </LabelIcon>
              Especialidade
            </SearchLabel>

            <SearchInputWrapper>
              <InputIcon>
                <MedicalServicesOutlinedIcon aria-hidden="true" />
              </InputIcon>

              <SearchInput
                id="specialty"
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="Selecione uma especialidade"
              />

              <InputChevron>
                <KeyboardArrowDownIcon aria-hidden="true" />
              </InputChevron>
            </SearchInputWrapper>
          </SearchField>

          <SearchField>
            <SearchLabel htmlFor="location">
              <LabelIcon>
                <LocationOnOutlinedIcon aria-hidden="true" />
              </LabelIcon>
              Localização
            </SearchLabel>

            <SearchInputWrapper>
              <InputIcon>
                <LocationOnOutlinedIcon aria-hidden="true" />
              </InputIcon>

              <SearchInput
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Digite sua cidade"
              />

              <InputChevron>
                <KeyboardArrowDownIcon aria-hidden="true" />
              </InputChevron>
            </SearchInputWrapper>
          </SearchField>

          <SearchButton type="submit">
            <SearchIcon aria-hidden="true" />
            Buscar
          </SearchButton>
        </SearchForm>
      </SearchSection>

      <FeaturedSection id="professionals">
        <FeaturedHeader>
          <FeaturedTitle>
            {hasSearched ? "Resultados da busca" : "Profissionais em destaque"}
          </FeaturedTitle>

          {hasSearched ? (
            <ClearSearch type="button" onClick={handleClearSearch}>
              Limpar busca
            </ClearSearch>
          ) : (
            <ViewAll
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
            >
              {showAll ? "Mostrar menos ↑" : "Ver todos →"}
            </ViewAll>
          )}
        </FeaturedHeader>

        {hasSearched && filteredProfessionals.length === 0 ? (
          <EmptyState role="status">
            <EmptyStateTitle>Nenhum profissional encontrado</EmptyStateTitle>

            <EmptyStateText>
              Não encontramos profissionais para os critérios informados. Tente
              alterar a especialidade ou a localização.
            </EmptyStateText>
          </EmptyState>
        ) : (
          <FeaturedGrid>
            {displayedProfessionals.map((professional) => (
              <ProfessionalCard
                key={professional.id}
                id={professional.id}
                name={professional.name}
                specialty={professional.specialty}
                location={professional.location}
                online={professional.online}
                image={professional.image}
                description={professional.description}
              />
            ))}
          </FeaturedGrid>
        )}
      </FeaturedSection>
      <HelpSection id="help">
        <HelpTitle>Como podemos ajudar?</HelpTitle>

        <HelpDescription>
          Encontre respostas para as principais dúvidas sobre a busca por
          profissionais.
        </HelpDescription>

        <HelpList>
          <HelpItem>
            <HelpQuestion>Como encontro um profissional?</HelpQuestion>
            <HelpAnswer>
              Use a busca acima para pesquisar por especialidade e localização.
            </HelpAnswer>
          </HelpItem>

          <HelpItem>
            <HelpQuestion>Posso buscar atendimento online?</HelpQuestion>
            <HelpAnswer>
              Sim. Os perfis indicam quando o profissional oferece atendimento
              online.
            </HelpAnswer>
          </HelpItem>

          <HelpItem>
            <HelpQuestion>
              Como vejo mais informações sobre um profissional?
            </HelpQuestion>
            <HelpAnswer>
              Clique no card do profissional para acessar seu perfil completo.
            </HelpAnswer>
          </HelpItem>
        </HelpList>
      </HelpSection>
    </main>
  );
}
