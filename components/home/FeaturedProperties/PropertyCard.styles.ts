import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 2rem;
	padding: 2rem 0;
`;

export const Card = styled.div`
	background-color: ${theme.colors.white};
	border-radius: ${theme.borderRadius.lg};
	overflow: hidden;
	box-shadow: ${theme.shadows.default};
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: translateY(-0.3125rem);
		box-shadow: ${theme.shadows.xl};
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 16rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const StatusBadge = styled.div<{ type: "sale" | "rent" }>`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background-color: ${(props) =>
		props.type === "sale" ? theme.colors.primary : "#10b981"};
	color: ${theme.colors.white};
	padding: 0.25rem 0.75rem;
	border-radius: ${theme.borderRadius.full};
	font-size: 0.75rem;
	font-weight: 500;
`;

export const PriceBadge = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	background-color: ${theme.colors.white};
	color: ${theme.colors.primary};
	padding: 0.25rem 0.75rem;
	border-radius: ${theme.borderRadius.full};
	font-size: 0.75rem;
	font-weight: 500;
`;

export const CardContent = styled.div`
	padding: 1.5rem;
`;

export const Title = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: ${theme.colors.gray[900]};
	margin-bottom: 0.5rem;
`;

export const Location = styled.div`
	display: flex;
	align-items: center;
	color: ${theme.colors.gray[600]};
	margin-bottom: 1rem;
	font-size: 0.875rem;

	i {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}
`;

export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${theme.colors.gray[600]};
	border-bottom: 1px solid ${theme.colors.gray[200]};
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	font-size: 0.875rem;
`;

export const DetailItem = styled.div`
	display: flex;
	align-items: center;

	i {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}
`;

export const ViewDetailsButton = styled.button`
	width: 100%;
	background-color: ${theme.colors.indigo[100]};
	color: ${theme.colors.primary};
	padding: 0.5rem 1rem;
	border-radius: ${theme.borderRadius.default};
	border: none;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${theme.colors.indigo[200]};
	}
`;
