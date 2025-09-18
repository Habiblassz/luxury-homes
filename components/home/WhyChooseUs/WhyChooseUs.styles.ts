import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Section = styled.section`
	padding: 4rem 0;
	background-color: ${theme.colors.white};
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

export const FeaturesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const FeatureCard = styled.div`
	text-align: center;
	padding: 1.5rem;
	border-radius: ${theme.borderRadius.lg};
	background-color: ${theme.colors.gray[50]};
	transition: all 0.3s ease;

	&:hover {
		background-color: ${theme.colors.indigo[50]};
	}
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3rem;
	width: 3rem;
	border-radius: ${theme.borderRadius.default};
	background-color: ${theme.colors.indigo[100]};
	color: ${theme.colors.primary};
	margin: 0 auto 1rem;

	i {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const FeatureTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: 500;
	color: ${theme.colors.gray[900]};
	margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
	color: ${theme.colors.gray[600]};
`;
