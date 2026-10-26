import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
	it("renders Location, Property Type, and Price Range fields", () => {
		render(<HeroSection />);

		// getByLabelText verifies both the label text and its association with a form input
		expect(screen.getByLabelText("Location")).toBeInTheDocument();
		expect(screen.getByLabelText("Property Type")).toBeInTheDocument();
		expect(screen.getByLabelText("Price Range")).toBeInTheDocument();
	});
});
