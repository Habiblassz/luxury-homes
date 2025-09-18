import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Footer = styled.footer`
	background-color: ${theme.colors.gray[900]};
	color: ${theme.colors.white};
	padding-top: 4rem;
	padding-bottom: 2rem;
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

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-bottom: 3rem;

	@media (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const FooterColumn = styled.div``;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;

export const HomeIcon = styled.i`
	height: 2rem;
	width: 2rem;
	color: ${theme.colors.indigo[400]};
`;

export const LogoText = styled.span`
	margin-left: 0.5rem;
	font-size: 1.25rem;
	font-weight: bold;
	color: ${theme.colors.white};
`;

export const FooterDescription = styled.p`
	color: ${theme.colors.gray[400]};
	margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 1rem;
`;

export const SocialLink = styled.a`
	color: ${theme.colors.gray[400]};

	&:hover {
		color: ${theme.colors.white};
	}

	i {
		width: 1.25rem;
		height: 1.25rem;
	}
`;

export const FooterTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const FooterList = styled.ul`
	list-style: none;
`;

export const FooterListItem = styled.li`
	margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
	color: ${theme.colors.gray[400]};

	&:hover {
		color: ${theme.colors.white};
	}
`;

export const ContactList = styled.ul`
	list-style: none;
`;

export const ContactListItem = styled.li`
	display: flex;
	align-items: flex-start;
	margin-bottom: 0.75rem;
	color: ${theme.colors.gray[400]};

	i {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
		flex-shrink: 0;
		margin-top: 0.125rem;
	}
`;

export const FooterBottom = styled.div`
	border-top: 1px solid ${theme.colors.gray[800]};
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: ${theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const Copyright = styled.p`
	color: ${theme.colors.gray[400]};
	font-size: 0.875rem;
	margin-bottom: 1rem;

	@media (min-width: ${theme.breakpoints.md}) {
		margin-bottom: 0;
	}
`;

export const LegalLinks = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const LegalLink = styled.a`
	color: ${theme.colors.gray[400]};
	font-size: 0.875rem;

	&:hover {
		color: ${theme.colors.white};
	}
`;
