import styled from "styled-components";
import { theme } from "@/styles/themes";

export const HeroContainer = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeroGradient = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(
		135deg,
		rgba(0, 0, 0, 0.8) 0%,
		rgba(0, 0, 0, 0.4) 100%
	);
`;

export const HeroContent = styled.div`
	position: relative;
	z-index: 10;
	padding: 0 1rem;
	max-width: 1200px;
	margin: 0 auto;
	text-align: center;
	width: 100%;

	@media (min-width: ${theme.breakpoints.sm}) {
		padding: 0 1.5rem;
	}

	@media (min-width: ${theme.breakpoints.lg}) {
		padding: 0 2rem;
	}
`;

export const HeroTitle = styled.h1`
	font-size: 2.25rem;
	font-weight: 800;
	color: ${theme.colors.white};
	margin-bottom: 1rem;

	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 4rem;
	}
`;

export const HeroSubtitle = styled.p`
	font-size: 1.125rem;
	color: ${theme.colors.white};
	margin-bottom: 2rem;
	line-height: 1.6;
	max-width: 48rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 1.5rem;
	}
`;

export const SearchContainer = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.lg};
	backdrop-filter: blur(12px);
	padding: 2rem;
	max-width: 56rem;
	margin: 0 auto;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: 2fr 1fr 1fr auto;
	}
`;

export const SearchField = styled.div`
	label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: ${theme.colors.gray[700]};
		margin-bottom: 0.25rem;
	}

	select,
	input {
		width: 100%;
		border-radius: ${theme.borderRadius.default};
		border: 1px solid ${theme.colors.gray[300]};
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		box-shadow: ${theme.shadows.sm};

		&:focus {
			outline: none;
			border-color: ${theme.colors.primary};
			box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
		}
	}
`;

export const InputContainer = styled.div`
	position: relative;

	i {
		position: absolute;
		left: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		color: ${theme.colors.gray[400]};
	}

	input {
		padding-left: 2.5rem;
	}
`;

export const SearchButtonContainer = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const SearchButton = styled.button`
	width: 100%;
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	padding: 0.5rem 1rem;
	border-radius: ${theme.borderRadius.default};
	border: none;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	&:hover {
		background-color: ${theme.colors.primaryDark};
		transform: scale(1.05);
	}
`;

export const ScrollDown = styled.div`
	margin-top: 3rem;
	color: white;
	cursor: pointer;
	animation: bounce 2s infinite;

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}
`;
