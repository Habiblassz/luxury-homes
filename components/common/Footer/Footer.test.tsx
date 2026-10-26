import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
	it("renders the LuxuryHomes logo text and five quick link items", () => {
		render(<Footer />);

		// Exact match avoids collisions with email and copyright text
		expect(screen.getByText("LuxuryHomes")).toBeInTheDocument();

		const quickLinks = screen.getAllByRole("link");
		expect(quickLinks.length).toBeGreaterThanOrEqual(5);
	});
});
