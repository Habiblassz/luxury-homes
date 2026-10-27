import { render, screen } from "@testing-library/react";
import WhyChooseUs from "./WhyChooseUs";

describe("WhyChooseUs", () => {
	it("renders the section heading", () => {
		render(<WhyChooseUs />);

		expect(screen.getByText(/Why Choose LuxuryHomes/i)).toBeInTheDocument();
	});
});
