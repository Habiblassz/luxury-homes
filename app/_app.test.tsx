import { render } from "@testing-library/react";
import App from "./_app";

describe("App", () => {
	it("renders the component tree", () => {
		const MockComponent = () => <div>Mock Page</div>;
		const mockProps = {
			Component: MockComponent,
			pageProps: {},
			router: {},
		};

		// @ts-expect-error - Bypassing strict Next.js AppProps requirements for testing
		const { getByText } = render(<App {...mockProps} />);
		expect(getByText("Mock Page")).toBeInTheDocument();
	});
});
