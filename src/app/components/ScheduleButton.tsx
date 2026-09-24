"use client";


import styled from "styled-components";
import { colors, typography } from "../styles/tokens";


const ScheduleButton = styled.button`
  min-height: 48px;
  padding: 0 24px;

  border: none;
  border-radius: 8px;

  background: ${colors.emerald60};
  color: ${colors.white};

  font-size: ${typography.textBase.fontSize};
  font-weight: ${typography.textBaseHigh200.fontWeight};
  line-height: ${typography.textBase.lineHeight};

  cursor: pointer;

  &:hover {
    background: ${colors.emerald80};
  }

  &:focus-visible {
    outline: 2px solid ${colors.emerald80};
    outline-offset: 2px;
  }
`;

type ScheduleButtonProps = {
  onSchedule: () => void;
};

export default function ScheduleButtonContent({
  onSchedule,
}: ScheduleButtonProps) {
  return (
    <>
      <ScheduleButton type="button" onClick={onSchedule}>
        Agendar atendimento
      </ScheduleButton>
    
    </>
  );
}
