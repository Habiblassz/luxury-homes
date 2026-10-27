import { render } from "@testing-library/react";
import App from "./_app";

describe("App", () => {
	it("renders the component tree", () => {
		const MockComponent = () => <div>Mock Page</div>;
		const mockProps = {
			Component: MockComponent,
			pageProps: {},
			router: {} as any,
		};

		// @ts-ignore
		const { getByText } = render(<App {...mockProps} />);
		expect(getByText("Mock Page")).toBeInTheDocument();
	});
});
