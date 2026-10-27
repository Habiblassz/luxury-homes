import { render, screen } from "@testing-library/react";
import CallToAction from "./CallToAction";

describe("CallToAction", () => {
	it("renders the call to action message and interactive buttons", () => {
		render(<CallToAction />);

		expect(
			screen.getByRole("button", { name: /Browse Properties/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Contact Agent/i }),
		).toBeInTheDocument();
	});
});
