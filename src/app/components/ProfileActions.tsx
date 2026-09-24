"use client";

import { useEffect, useState } from "react";
import ScheduleButton from "./ScheduleButton";
import Toast from "./Toast";
import styled from "styled-components";
import { spacing } from "../styles/tokens";

const ProfileActionsContainer = styled.div`
  width: 100%;
  margin-top: ${spacing.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export default function ProfileActions() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const handleSchedule = () => {
    setShowToast(true);
  };

  return (
    <ProfileActionsContainer>
      <ScheduleButton onSchedule={handleSchedule} />

      {showToast && <Toast />}
    </ProfileActionsContainer>
  );
}
