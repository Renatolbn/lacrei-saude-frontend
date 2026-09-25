import { professionals } from "../../data/professionals";
import ProfileActions from "../../components/ProfileActions";
import Link from "next/link";
import styled from "styled-components";
import { colors, typography, spacing } from "../../styles/tokens";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ProfileContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: ${spacing.xl} 24px;

  @media (max-width: 768px) {
    padding: ${spacing.md} 16px;
  }
`;

const ProfileCard = styled.article`
  width: 100%;
  padding: ${spacing.xl};
  border: 1px solid ${colors.borderDefault};
  border-radius: 12px;
  background: ${colors.white};

  @media (max-width: 768px) {
    padding: ${spacing.md};
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${colors.emerald80};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
  margin-bottom: ${spacing.lg};

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.xl};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: ${spacing.md};
  }
`;

const ProfileImageContent = styled.img`
  width: 250px;
  height: 375px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ProfileName = styled.h1`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineBase.fontSize};
  font-weight: ${typography.headlineBase.fontWeight};
  line-height: ${typography.headlineBase.lineHeight};
`;

const ProfileSpecialty = styled.p`
  color: ${colors.emerald80};
  font-size: ${typography.textXl.fontSize};
  font-weight: ${typography.textXlHigh200.fontWeight};
  line-height: ${typography.textXl.lineHeight};
`;

const ProfileLocation = styled.p`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};

  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};

  svg {
    color: ${colors.emerald80};
  }
`;

const ProfileStatus = styled.p<{ $online: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};

  color: ${colors.emerald60};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) =>
      props.$online ? colors.emerald60 : colors.gray50};
  }
`;

const ProfileDescription = styled.p`
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
`;

const ProfileDetails = styled.section`
  margin-top: ${spacing.md};
  padding-top: ${spacing.md};
  border-top: 1px solid ${colors.borderDefault};
`;

const ProfileSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-top: ${spacing.md};
  margin-bottom: ${spacing.sm};

  svg {
    color: ${colors.emerald80};
  }
`;

const ProfileSectionTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${typography.headlineSm.fontSize};
  font-weight: ${typography.headlineSm.fontWeight};
  line-height: ${typography.headlineSm.lineHeight};
`;

const ProfileFormation = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.sm};
  gap: ${spacing.sm};

  padding-left: 20px;
  color: ${colors.textSecondary};
  font-size: ${typography.textBase.fontSize};
  line-height: ${typography.textBase.lineHeight};
`;

const ProfileTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`;

const ProfileTopic = styled.span`
  padding: 8px 12px;
  border-radius: 20px;
  background: ${colors.backgroundSuccess};
  color: ${colors.emerald80};
  font-size: ${typography.textSm.fontSize};
  font-weight: ${typography.textSm.fontWeight};
  line-height: ${typography.textSm.lineHeight};
`;

export default async function ProfessionalPage({ params }: Props) {
  const { id } = await params;

  const professional = professionals.find(
    (professional) => professional.id === Number(id),
  );

  if (!professional) {
    return <p>Profissional não encontrado!</p>;
  }

  return (
    <ProfileContainer>
      <BackLink href="/">← Voltar para profissionais</BackLink>
      <ProfileCard>
        <ProfileHeader>
          <ProfileImageContent
            src={professional.image}
            alt={`Foto de ${professional.name}`}
            width={250}
            height={250}
          />

          <ProfileInfo>
            <ProfileName>{professional.name}</ProfileName>

            <ProfileSpecialty>{professional.specialty}</ProfileSpecialty>

            <ProfileLocation>
              <LocationOnIcon aria-hidden="true" />
              {professional.location}
            </ProfileLocation>

            <ProfileStatus $online={professional.online}>
              {professional.online
                ? "Atendimento online disponível"
                : "Atendimento presencial"}
            </ProfileStatus>
            <ProfileActions />
          </ProfileInfo>
        </ProfileHeader>

        <ProfileDetails>
          <ProfileSectionHeader>
            <PersonOutlineOutlinedIcon aria-hidden="true" />
            <ProfileSectionTitle>Sobre mim</ProfileSectionTitle>
          </ProfileSectionHeader>
          <ProfileDescription>{professional.about}</ProfileDescription>

          <ProfileSectionHeader>
            <SchoolOutlinedIcon aria-hidden="true" />
            <ProfileSectionTitle>Formação</ProfileSectionTitle>
          </ProfileSectionHeader>

          <ProfileFormation>
            {professional.formation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ProfileFormation>
          <ProfileSectionHeader>
            <LocalOfferOutlinedIcon aria-hidden="true" />
            <ProfileSectionTitle>Temas de trabalho</ProfileSectionTitle>
          </ProfileSectionHeader>

          <ProfileTopics>
            {professional.workTopics.map((topic) => (
              <ProfileTopic key={topic}>{topic}</ProfileTopic>
            ))}
          </ProfileTopics>
        </ProfileDetails>
      </ProfileCard>
    </ProfileContainer>
  );
}
