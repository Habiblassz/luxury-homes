import { Property, Testimonial, Feature } from "../types";

export const featuredProperties: Property[] = [
	{
		id: 1,
		title: "Modern Luxury Villa",
		location: "Beverly Hills, CA",
		price: "$1,250,000",
		type: "sale",
		image: "http://static.photos/real-estate/640x360/1",
		sqft: "4,500 sqft",
		beds: 5,
		baths: 4,
	},
	{
		id: 2,
		title: "Downtown Penthouse",
		location: "New York, NY",
		price: "$5,500/mo",
		type: "rent",
		image: "http://static.photos/real-estate/640x360/2",
		sqft: "2,800 sqft",
		beds: 3,
		baths: 2.5,
	},
	{
		id: 3,
		title: "Waterfront Estate",
		location: "Miami, FL",
		price: "$3,200,000",
		type: "sale",
		image: "http://static.photos/real-estate/640x360/3",
		sqft: "6,200 sqft",
		beds: 6,
		baths: 5.5,
	},
];

export const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Michael Johnson",
		role: "Home Buyer",
		image: "http://static.photos/people/200x200/1",
		content:
			"The team at LuxuryHomes made the entire home buying process seamless. Their attention to detail and market knowledge helped us find our dream home at the perfect price.",
		rating: 5,
	},
	{
		id: 2,
		name: "Sarah Williams",
		role: "Property Investor",
		image: "http://static.photos/people/200x200/2",
		content:
			"As an international investor, I needed a trustworthy partner to navigate the US real estate market. LuxuryHomes provided exceptional service and found me properties that matched my exact criteria.",
		rating: 5,
	},
];

export const features: Feature[] = [
	{
		id: 1,
		title: "Premium Properties",
		description:
			"Access to exclusive listings not available on public platforms",
		icon: "award",
	},
	{
		id: 2,
		title: "Expert Agents",
		description: "Our team has decades of experience in luxury real estate",
		icon: "user",
	},
	{
		id: 3,
		title: "Secure Transactions",
		description: "Your investment is protected with our secure processes",
		icon: "shield",
	},
];
