import type { ProfessionalCardProps } from "../types/professional";
import styled from "styled-components";
import { colors, typography, spacing } from "../styles/tokens";
import Image from "next/image";
import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Card = styled.article`
  width: 100%;
  min-height: 360px;
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Avatar = styled(Image)`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
`;

const Status = styled.span<{ $online: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${(props) =>
    props.$online ? colors.emerald60 : colors.textSecondary};

  font-size: ${typography.textSm.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textSm.lineHeight};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => (props.$online ? colors.emerald60 : "#8A9399")};
  }
`;

const ProfessionalName = styled.h3`
  margin-top: 12px;
  color: ${colors.textPrimary};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
`;

const Specialty = styled.p`
  margin-top: 4px;
  color: ${colors.emerald60};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  margin-top: ${spacing.xs};

  color: ${colors.textSecondary};
  font-size: ${typography.textSm.fontSize};
  line-height: ${typography.textSm.lineHeight};
`;

const Description = styled.p`
  margin-top: ${spacing.md};
  color: ${colors.textSecondary};
  font-size: ${typography.textSm.fontSize};
  line-height: ${typography.textSm.lineHeight};
  flex: 1;
`;

const ProfileLink = styled(Link)`
  width: 100%;
  min-height: 42px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${colors.emerald60};
  border-radius: 8px;

  color: ${colors.emerald60};
  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};

  text-decoration: none;

  &:hover {
    background: #f1faf7;
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 2px;
  }
`;

function ProfessionalCard(profissional: ProfessionalCardProps) {
  return (
    <Card>
      <CardTop>
        <Avatar
          src={profissional.image}
          alt={`Foto de ${profissional.name}`}
          width={88}
          height={88}
        />

        <Status $online={profissional.online}>
          {profissional.online ? "Online" : "Offline"}
        </Status>
      </CardTop>

      <ProfessionalName>{profissional.name}</ProfessionalName>

      <Specialty>{profissional.specialty}</Specialty>

      <Location>
        <LocationOnOutlinedIcon fontSize="small" />
        {profissional.location}
      </Location>

      <Description>{profissional.description}</Description>

      <ProfileLink href={`/professionals/${profissional.id}`}>
        Ver perfil
      </ProfileLink>
    </Card>
  );
}

export default ProfessionalCard;
