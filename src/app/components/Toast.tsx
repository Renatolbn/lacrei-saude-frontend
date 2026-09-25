import styled from "styled-components";
import { colors, spacing } from "../styles/tokens";

const ToastContainer = styled.div`
  width: 70%;
  margin: ${spacing.md} auto 0;
  padding: ${spacing.md};

  border: 1px solid ${colors.emerald60};
  border-radius: 12px;

  background: ${colors.backgroundSuccess};
  color: ${colors.emerald80};

  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Toast() {
  return <ToastContainer>Agendamento realizado com sucesso!</ToastContainer>;
}
