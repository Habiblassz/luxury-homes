import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

describe("RootLayout", () => {
	const originalError = console.error;

	beforeAll(() => {
		console.error = (...args) => {
			const errorMessage = args.map(String).join(" ");
			if (
				errorMessage.includes("cannot be a child of <div>") ||
				errorMessage.includes("hydration error")
			) {
				return;
			}
			originalError(...args);
		};
	});

	afterAll(() => {
		console.error = originalError;
	});

	it("renders children within the layout", () => {
		render(
			<RootLayout>
				<div data-testid="child-element">Test Child</div>
			</RootLayout>,
		);

		expect(screen.getByTestId("child-element")).toBeInTheDocument();
	});
});
