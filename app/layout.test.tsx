import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

describe("RootLayout", () => {
	const originalError = console.error;

	beforeAll(() => {
		console.error = (...args) => {
			// Convert all console.error arguments to a single string to reliably catch the warning
			const errorMessage = args.map(String).join(" ");

			if (
				errorMessage.includes("cannot be a child of <div>") ||
				errorMessage.includes("hydration error")
			) {
				return; // Silently drop this specific warning
			}

			originalError(...args);
		};
	});

	afterAll(() => {
		console.error = originalError;
	});

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
