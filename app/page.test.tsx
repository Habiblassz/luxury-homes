import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
	it("renders the main page components", () => {
		// @ts-ignore
		render(<Home />);

		// Use getAllByText since multiple components render this phrase
		const elements = screen.getAllByText(/Find Your Dream Home/i);
		expect(elements.length).toBeGreaterThan(0);
	});
});
