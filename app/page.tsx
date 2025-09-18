"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/common/Header/Header";
import HeroSection from "../components/home/HeroSection/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import CallToAction from "@/components/home/CallToAction/CallToAction";
import PropertyCard from "@/components/home/FeaturedProperties/PropertyCard";
import { featuredProperties } from "@/utils/constants";
import { Grid } from "@/components/home/FeaturedProperties/PropertyCard.styles";
import Footer from "@/components/common/Footer/Footer";

const Home: React.FC = () => {
	useEffect(() => {
		// Initialize Feather Icons after component mounts
		if (typeof window !== "undefined") {
			import("feather-icons").then((feather) => {
				feather.replace();
			});
		}
	}, []);

	return (
		<>
			<Head>
				<title>Luxury Homes | Find Your Dream Property</title>
				<meta
					name="description"
					content="Discover luxury properties in the most desirable locations around the world"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<HeroSection />
				<Grid>
					{featuredProperties.map((property, index) => (
						<PropertyCard
							key={property.id}
							property={property}
							delay={index * 100}
						/>
					))}
				</Grid>
				<WhyChooseUs />
				<Testimonials />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
};

export default Home;
