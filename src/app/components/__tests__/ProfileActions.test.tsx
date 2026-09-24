import { render, screen, fireEvent } from "@testing-library/react";
import ProfileActions from "../ProfileActions";

describe("ProfileActions", () => {
  it("Deve exibir a mensagem de sucesso ao agendar", () => {
    render(<ProfileActions />);

    const scheduleButton = screen.getByRole("button", {
      name: "Agendar atendimento",
    });

    fireEvent.click(scheduleButton);

    expect(
      screen.getByText("Agendamento realizado com sucesso!"),
    ).toBeInTheDocument();
  });
});
