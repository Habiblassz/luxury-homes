import React from "react";
import * as S from "./CallToAction.styles";

const CallToAction: React.FC = () => {
	return (
		<S.Section>
			<S.Container>
				<S.Title data-aos="fade-up">Ready to Find Your Dream Home?</S.Title>
				<S.Subtitle data-aos="fade-up" data-aos-delay="100">
					Our team of experts is here to guide you through every step of the
					process
				</S.Subtitle>
				<S.ButtonContainer data-aos="fade-up" data-aos-delay="200">
					<S.PrimaryButton>Browse Properties</S.PrimaryButton>
					<S.SecondaryButton>Contact Agent</S.SecondaryButton>
				</S.ButtonContainer>
			</S.Container>
		</S.Section>
	);
};

export default CallToAction;
