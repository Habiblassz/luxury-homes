import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Section = styled.section`
	padding: 4rem 0;
	background-color: ${theme.colors.gray[50]};
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

export const PropertiesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-bottom: 3rem;

	@media (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${theme.breakpoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ViewAllButton = styled.button`
	background-color: ${theme.colors.white};
	color: ${theme.colors.primary};
	border: 1px solid ${theme.colors.primary};
	font-weight: 600;
	padding: 0.75rem 2rem;
	border-radius: ${theme.borderRadius.default};
	cursor: pointer;
	transition: all 0.3s ease;
	display: block;
	margin: 0 auto;
	box-shadow: ${theme.shadows.default};

	&:hover {
		background-color: ${theme.colors.gray[100]};
		transform: scale(1.05);
	}
`;
