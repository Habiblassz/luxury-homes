import { render, waitFor, screen } from "@testing-library/react";
import { useVantaEffect } from "./useVantaEffect";

const TestComponent = () => {
	const vantaRef = useVantaEffect();
	return (
		<div data-testid="vanta-container" ref={vantaRef}>
			Vanta
		</div>
	);
};

describe("useVantaEffect", () => {
	let originalVanta: any;

	beforeEach(() => {
		originalVanta = window.VANTA;
		document.head.innerHTML = "";
	});

	afterEach(() => {
		window.VANTA = originalVanta;
		jest.restoreAllMocks();
	});

	it("initializes Vanta on mount and destroys on unmount", async () => {
		const mockDestroy = jest.fn();
		window.VANTA = {
			GLOBE: jest.fn().mockReturnValue({ destroy: mockDestroy }),
		};

		// Intercept script appending to simulate immediate script loading
		jest.spyOn(document.head, "appendChild").mockImplementation((node) => {
			const script = node as HTMLScriptElement;
			if (script.tagName === "SCRIPT") {
				setTimeout(() => script.onload && script.onload(new Event("load")), 0);
			}
			return node;
		});

		const { unmount } = render(<TestComponent />);

		// Verify Vanta initialized with the correct DOM element
		await waitFor(() => {
			expect(window.VANTA.GLOBE).toHaveBeenCalledWith(
				expect.objectContaining({
					el: screen.getByTestId("vanta-container"),
					color: 0x5e35b1,
				}),
			);
		});

		// Verify cleanup happens on unmount
		unmount();
		expect(mockDestroy).toHaveBeenCalledTimes(1);
	});
});
