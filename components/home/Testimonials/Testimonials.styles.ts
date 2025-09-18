import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Section = styled.section`
	padding: 4rem 0;
	background-color: ${theme.colors.indigo[50]};
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;

	@media (min-width: ${theme.breakpoints.sm}) {
		padding: 0 1.5rem;
	}

	@media (min-width: ${theme.breakpoints.lg}) {
		padding: 0 2rem;
	}
`;

export const Header = styled.div`
	text-align: center;
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: bold;
	color: ${theme.colors.gray[900]};
	margin-bottom: 1rem;

	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 2.25rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 1.125rem;
	color: ${theme.colors.gray[600]};
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
`;

export const TestimonialsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const TestimonialCard = styled.div`
	background-color: ${theme.colors.white};
	padding: 2rem;
	border-radius: ${theme.borderRadius.lg};
	box-shadow: ${theme.shadows.sm};
`;

export const TestimonialHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;

export const Avatar = styled.img`
	height: 3rem;
	width: 3rem;
	border-radius: 9999px;
`;

export const TestimonialInfo = styled.div`
	margin-left: 1rem;
`;

export const Name = styled.h4`
	font-size: 1.125rem;
	font-weight: 500;
	color: ${theme.colors.gray[900]};
`;

export const Role = styled.p`
	color: ${theme.colors.primary};
`;

export const TestimonialContent = styled.p`
	color: ${theme.colors.gray[600]};
	font-style: italic;
	margin-bottom: 1rem;
`;

export const Rating = styled.div`
	display: flex;
`;

export const StarIcon = styled.i<{ $filled?: boolean }>`
	width: 1.25rem;
	height: 1.25rem;
	color: ${(props) => (props.$filled ? "#fbbf24" : "#d1d5db")};

	${(props) =>
		props.$filled &&
		`
    fill: currentColor;
  `}
`;
