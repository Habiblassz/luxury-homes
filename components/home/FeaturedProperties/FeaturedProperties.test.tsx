import { render, screen } from "@testing-library/react";
import FeaturedProperties from "./FeaturedProperties";

describe("FeaturedProperties", () => {
	it("renders the section title", () => {
		render(<FeaturedProperties />);

		expect(screen.getByText(/Featured Properties/i)).toBeInTheDocument();
	});
});
