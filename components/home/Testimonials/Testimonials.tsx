import React, { useEffect } from "react";
import * as S from "./Testimonials.styles";
import { testimonials } from "@/utils/constants";
import Image from "next/image";

const Testimonials: React.FC = () => {
	useEffect(() => {
		// Initialize Feather Icons after component mounts
		if (typeof window !== "undefined") {
			import("feather-icons").then((feather) => {
				feather.replace();
			});
		}
	}, []);

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }).map((_, index) => (
			<S.StarIcon key={index} data-feather="star" $filled={index < rating} />
		));
	};

	return (
		<S.Section>
			<S.Container>
				<S.Header>
					<S.Title data-aos="fade-up">What Our Clients Say</S.Title>
					<S.Subtitle data-aos="fade-up" data-aos-delay="100">
						Don{`&apos`}t just take our word for it - hear from our satisfied
						clients
					</S.Subtitle>
				</S.Header>

				<S.TestimonialsGrid>
					{testimonials.map((testimonial, index) => (
						<S.TestimonialCard
							key={testimonial.id}
							data-aos="fade-up"
							data-aos-delay={index * 100}>
							<S.TestimonialHeader>
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={3}
									height={3}
									style={{ borderRadius: "999px" }}
								/>
								<S.TestimonialInfo>
									<S.Name>{testimonial.name}</S.Name>
									<S.Role>{testimonial.role}</S.Role>
								</S.TestimonialInfo>
							</S.TestimonialHeader>
							<S.TestimonialContent>{testimonial.content}</S.TestimonialContent>
							<S.Rating>{renderStars(testimonial.rating)}</S.Rating>
						</S.TestimonialCard>
					))}
				</S.TestimonialsGrid>
			</S.Container>
		</S.Section>
	);
};

export default Testimonials;
