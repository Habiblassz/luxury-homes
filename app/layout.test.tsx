import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

describe("RootLayout", () => {
	it("renders children within the layout", () => {
		// @ts-ignore
		render(
			<RootLayout>
				<div data-testid="child-element">Test Child</div>
			</RootLayout>,
		);

		expect(screen.getByTestId("child-element")).toBeInTheDocument();
	});
});
