import React, { useEffect } from "react";
import * as S from "./HeroSection.styles";
import { useVantaEffect } from "@/hooks/useVantaEffect";

const HeroSection: React.FC = () => {
	const vantaRef = useVantaEffect();

	useEffect(() => {
		// Initialize AOS and Feather Icons after component mounts
		if (typeof window !== "undefined") {
			import("aos").then((AOS) => {
				AOS.init({
					duration: 800,
					easing: "ease-in-out",
					once: true,
				});
			});

			import("feather-icons").then((feather) => {
				feather.replace();
			});
		}
	}, []);

	return (
		<S.HeroContainer id="hero-background" ref={vantaRef}>
			<S.HeroGradient />
			<S.HeroContent>
				<S.HeroTitle data-aos="fade-up">Find Your Dream Home</S.HeroTitle>
				<S.HeroSubtitle data-aos="fade-up" data-aos-delay="100">
					Discover luxury properties in the most desirable locations around the
					world
				</S.HeroSubtitle>

				<S.SearchContainer data-aos="fade-up" data-aos-delay="200">
					<S.SearchGrid>
						<S.SearchField>
							<label htmlFor="location">Location</label>
							<S.InputContainer>
								<i data-feather="map-pin" />
								<input
									type="text"
									id="location"
									placeholder="City, State or ZIP"
								/>
							</S.InputContainer>
						</S.SearchField>

						<S.SearchField>
							<label htmlFor="property-type">Property Type</label>
							<select id="property-type">
								<option>All Types</option>
								<option>House</option>
								<option>Apartment</option>
								<option>Villa</option>
								<option>Land</option>
							</select>
						</S.SearchField>

						<S.SearchField>
							<label htmlFor="price-range">Price Range</label>
							<select id="price-range">
								<option>Any Price</option>
								<option>$0 - $500,000</option>
								<option>$500,000 - $1M</option>
								<option>$1M - $5M</option>
								<option>$5M+</option>
							</select>
						</S.SearchField>

						<S.SearchButtonContainer>
							<S.SearchButton>
								<i data-feather="search" />
								Search
							</S.SearchButton>
						</S.SearchButtonContainer>
					</S.SearchGrid>
				</S.SearchContainer>
				<S.ScrollDown>
					<i data-feather="chevron-down" />
				</S.ScrollDown>
			</S.HeroContent>
		</S.HeroContainer>
	);
};

export default HeroSection;
