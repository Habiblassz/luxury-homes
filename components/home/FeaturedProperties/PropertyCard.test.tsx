import { render, screen } from "@testing-library/react";
import PropertyCard from "./PropertyCard";

describe("PropertyCard", () => {
	it("renders property details correctly", () => {
		const mockProperty = {
			id: "1",
			title: "Modern Villa",
			price: "$2,500,000",
			location: "Beverly Hills, CA",
			beds: 4,
			baths: 3,
			sqft: 3500,
			image: "/images/properties/property-1.jpg",
		};

		// @ts-expect-error - Bypassing strict prop types for testing
		render(<PropertyCard property={mockProperty} />);

		expect(screen.getByText("Modern Villa")).toBeInTheDocument();
	});
});
