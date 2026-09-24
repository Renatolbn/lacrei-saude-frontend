import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("Deve abrir o menu de ajuda ao clicar no botão", () => {
    render(<Header />);

    const helpButton = screen.getByRole("button", {
      name: "Ajuda",
    });

    fireEvent.click(helpButton);

    expect(helpButton).toHaveAttribute("aria-expanded", "true");

    expect(
      screen.getByRole("link", { name: "Buscar profissionais" }),
    ).toBeInTheDocument();
  });
});
