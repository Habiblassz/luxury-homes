import { z } from "zod";

export const PropertySchema = z.object({
	id: z.number(),
	title: z.string(),
	location: z.string(),
	price: z.string(),
	type: z.enum(["sale", "rent"]),
	image: z.string().url(),
	sqft: z.string(),
	beds: z.number(),
	baths: z.number(),
});

export const TestimonialSchema = z.object({
	id: z.number(),
	name: z.string(),
	role: z.string(),
	image: z.string().url(),
	content: z.string(),
	rating: z.number().min(1).max(5),
});

export const FeatureSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	icon: z.string(),
});

export type Property = z.infer<typeof PropertySchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Feature = z.infer<typeof FeatureSchema>;
