import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
	it("renders the main page components", () => {
		render(<Home />);

		const elements = screen.getAllByText(/Find Your Dream Home/i);
		expect(elements.length).toBeGreaterThan(0);
	});
});
