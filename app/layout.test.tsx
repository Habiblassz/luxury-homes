import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

const ThrowError = () => {
	throw new Error("Simulated child component failure");
};

describe("RootLayout Error Boundary", () => {
	const originalError = console.error;

	beforeAll(() => {
		console.error = jest.fn(); // Suppress expected error logs in test output
	});

	afterAll(() => {
		console.error = originalError;
	});

	it("renders the error boundary fallback UI when a child component throws", () => {
		render(
			<RootLayout>
				<ThrowError />
			</RootLayout>,
		);
		expect(screen.getByTestId("error-boundary-fallback")).toBeInTheDocument();
	});
});
