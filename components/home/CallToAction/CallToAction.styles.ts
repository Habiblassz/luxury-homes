import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Section = styled.section`
	padding: 4rem 0;
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	text-align: center;
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

export const Title = styled.h2`
	font-size: 1.875rem;
	font-weight: bold;
	margin-bottom: 1.5rem;

	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 2.25rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 1.125rem;
	margin-bottom: 2rem;
	max-width: 48rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 1.5rem;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;

	@media (min-width: ${theme.breakpoints.sm}) {
		flex-direction: row;
	}
`;

export const PrimaryButton = styled.button`
	background-color: ${theme.colors.white};
	color: ${theme.colors.primary};
	font-weight: 600;
	padding: 0.75rem 2rem;
	border-radius: ${theme.borderRadius.default};
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: ${theme.shadows.default};

	&:hover {
		background-color: ${theme.colors.gray[100]};
		transform: scale(1.05);
	}
`;

export const SecondaryButton = styled.button`
	background-color: transparent;
	color: ${theme.colors.white};
	font-weight: 600;
	padding: 0.75rem 2rem;
	border-radius: ${theme.borderRadius.default};
	border: 2px solid ${theme.colors.white};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};
		transform: scale(1.05);
	}
`;
