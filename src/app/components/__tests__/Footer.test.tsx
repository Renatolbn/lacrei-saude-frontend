import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
    it("Deve renderizar a navegação do rodapé", () => {
        render(<Footer />);

        const footerNavigation = screen.getByRole("navigation", {
            name: "Navegação do rodapé",
        });

        expect(footerNavigation).toBeInTheDocument();
    });
});