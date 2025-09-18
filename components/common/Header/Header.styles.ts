import styled from "styled-components";
import { theme } from "@/styles/themes";

export const Nav = styled.nav`
	background-color: ${theme.colors.white};
	box-shadow: ${theme.shadows.sm};
	position: fixed;
	width: 100%;
	z-index: 99999;
	top: 0;
`;

export const NavContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;

	@media (min-width: ${theme.breakpoints.md}) {
		padding: 0 2rem;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	flex-shrink: 0;
`;

export const HomeIcon = styled.i`
	height: 2rem;
	width: 2rem;
	color: ${theme.colors.primary};
`;

export const LogoText = styled.span`
	margin-left: 0.5rem;
	font-size: 1.25rem;
	font-weight: bold;
	color: ${theme.colors.primary};
`;

export const NavLinks = styled.div`
	display: none;

	@media (min-width: ${theme.breakpoints.md}) {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
`;

export const NavLink = styled.a<{ $active?: boolean }>`
	color: ${(props) =>
		props.$active ? theme.colors.gray[900] : theme.colors.gray[500]};
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	font-weight: 500;
	border-bottom: 2px solid
		${(props) => (props.$active ? theme.colors.primary : "transparent")};

	&:hover {
		color: ${theme.colors.gray[900]};
	}
`;

export const SignInButton = styled.button`
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	padding: 0.5rem 1rem;
	border-radius: ${theme.borderRadius.default};
	font-size: 0.875rem;
	font-weight: 500;
	border: none;
	cursor: pointer;
	box-shadow: ${theme.shadows.default};

	&:hover {
		background-color: ${theme.colors.primaryDark};
	}
`;

export const MobileMenuButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: ${theme.borderRadius.default};
	color: ${theme.colors.gray[400]};
	background: none;
	border: none;
	cursor: pointer;

	&:hover {
		color: ${theme.colors.gray[500]};
		background-color: ${theme.colors.gray[100]};
	}

	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
	}
`;
