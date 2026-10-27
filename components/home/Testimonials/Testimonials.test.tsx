import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials";

describe("Testimonials", () => {
	it("renders client testimonials", () => {
		render(<Testimonials />);

		expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument();
	});
});
