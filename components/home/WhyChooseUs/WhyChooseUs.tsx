import React, { useEffect } from "react";
import * as S from "./WhyChooseUs.styles";
import { features } from "@/utils/constants";

const WhyChooseUs: React.FC = () => {
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
					<S.Title data-aos="fade-up">Why Choose LuxuryHomes</S.Title>
					<S.Subtitle data-aos="fade-up" data-aos-delay="100">
						We provide exceptional service and expertise in the luxury real
						estate market
					</S.Subtitle>
				</S.Header>

				<S.FeaturesGrid>
					{features.map((feature, index) => (
						<S.FeatureCard
							key={feature.id}
							data-aos="fade-up"
							data-aos-delay={index * 100}>
							<S.IconContainer>
								<i data-feather={feature.icon} />
							</S.IconContainer>
							<S.FeatureTitle>{feature.title}</S.FeatureTitle>
							<S.FeatureDescription>{feature.description}</S.FeatureDescription>
						</S.FeatureCard>
					))}
				</S.FeaturesGrid>
			</S.Container>
		</S.Section>
	);
};

export default WhyChooseUs;
