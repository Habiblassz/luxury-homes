import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
	it("renders the main navigation and logo", () => {
		render(<Header />);

		// Assuming the logo or site title text is present in the Header
		expect(screen.getByText("LuxuryHomes")).toBeInTheDocument();

		// Verify standard navigation items
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});
});
