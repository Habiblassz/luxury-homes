export interface Property {
	id: number;
	title: string;
	location: string;
	price: string;
	type: "sale" | "rent";
	image: string;
	sqft: string;
	beds: number;
	baths: number;
}

export interface Testimonial {
	id: number;
	name: string;
	role: string;
	image: string;
	content: string;
	rating: number;
}

export interface Feature {
	id: number;
	title: string;
	description: string;
	icon: string;
}
