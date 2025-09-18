import React, { useState } from "react";
import * as S from "./Header.styles";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<S.Nav>
			<S.NavContainer>
				<S.LogoContainer>
					<S.HomeIcon data-feather="home" />
					<S.LogoText>LuxuryHomes</S.LogoText>
				</S.LogoContainer>

				<S.NavLinks>
					<S.NavLink href="#" $active>
						Home
					</S.NavLink>
					<S.NavLink href="#">Properties</S.NavLink>
					<S.NavLink href="#">Agents</S.NavLink>
					<S.NavLink href="#">About</S.NavLink>
					<S.NavLink href="#">Contact</S.NavLink>
					<S.SignInButton>Sign In</S.SignInButton>
				</S.NavLinks>

				<S.MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<i data-feather="menu"></i>
				</S.MobileMenuButton>
			</S.NavContainer>
		</S.Nav>
	);
};

export default Header;
