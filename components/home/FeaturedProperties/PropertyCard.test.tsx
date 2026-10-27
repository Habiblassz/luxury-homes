import { render, screen } from "@testing-library/react";
import PropertyCard from "./PropertyCard";

describe("PropertyCard", () => {
	const mockProperty = {
		id: "1",
		title: "Modern Luxury Villa",
		price: "$2,500,000",
		status: "For Rent",
		imageUrl: "/placeholder-image.jpg",
		image: "/placeholder-image.jpg",
		beds: 4,
		baths: 3,
		sqft: 3500,
		location: "Beverly Hills",
	};

	it("renders the property title, price, and status badge", () => {
		// @ts-ignore
		render(<PropertyCard property={mockProperty} />);

		expect(screen.getByText("Modern Luxury Villa")).toBeInTheDocument();
		expect(screen.getByText("$2,500,000")).toBeInTheDocument();
		expect(screen.getByText("For Rent")).toBeInTheDocument();
	});
});
