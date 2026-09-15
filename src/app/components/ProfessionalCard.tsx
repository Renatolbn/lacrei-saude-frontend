import type { ProfessionalCardProps } from "../types/professional";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  margin: 50px;
  whidth: 100%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid red;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Status = styled.span<{ $online: boolean }>`
  background-color: ${(props) => (props.$online ? "green" : "red")};
  border-radius: 999px;
  padding: 5px;
`;

function ProfessionalCard(profissional: ProfessionalCardProps) {
  return (
    <Card>
      <h2>Nome: {profissional.name}</h2>
      <p>Especialidade: {profissional.specialty}</p>
      <p>Localização: {profissional.location}</p>
      <p>
        Online:{" "}
        <Status $online={profissional.online}>
          {profissional.online ? "Sim" : "Não"}
        </Status>
      </p>

      <Avatar
        src={profissional.image}
        alt={profissional.name}
        width={50}
        height={50}
      />
    </Card>
  );
}

export default ProfessionalCard;
