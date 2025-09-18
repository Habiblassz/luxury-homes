import React, { useEffect } from "react";
import * as S from "./FeaturedProperties.styles";
import PropertyCard from "./PropertyCard";
import { featuredProperties } from "@/utils/constants";

const FeaturedProperties: React.FC = () => {
	useEffect(() => {
		// Initialize Feather Icons after component mounts
		if (typeof window !== "undefined") {
			import("feather-icons").then((feather) => {
				feather.replace();
			});
		}
	}, []);

	return (
		<S.Section>
			<S.Container>
				<S.Header>
					<S.Title data-aos="fade-up">Featured Properties</S.Title>
					<S.Subtitle data-aos="fade-up" data-aos-delay="100">
						Explore our curated selection of premium properties
					</S.Subtitle>
				</S.Header>

				<S.PropertiesGrid>
					{featuredProperties.map((property, index) => (
						<PropertyCard
							key={property.id}
							property={property}
							delay={index * 100}
						/>
					))}
				</S.PropertiesGrid>

				<S.ViewAllButton data-aos="fade-up">
					View All Properties
				</S.ViewAllButton>
			</S.Container>
		</S.Section>
	);
};

export default FeaturedProperties;
