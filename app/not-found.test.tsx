import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

describe("NotFound", () => {
	it("renders the 404 error message", () => {
		render(<NotFound />);

		expect(screen.getByText(/This page is missing/i)).toBeInTheDocument();
	});
});
