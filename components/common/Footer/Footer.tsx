import React, { useEffect } from "react";
import * as S from "./Footer.styles";

const Footer: React.FC = () => {
	useEffect(() => {
		// Initialize Feather Icons after component mounts
		if (typeof window !== "undefined") {
			import("feather-icons").then((feather) => {
				feather.replace();
			});
		}
	}, []);

	return (
		<S.Footer>
			<S.Container>
				<S.FooterGrid>
					<S.FooterColumn>
						<S.LogoContainer>
							<S.HomeIcon data-feather="home" />
							<S.LogoText>LuxuryHomes</S.LogoText>
						</S.LogoContainer>
						<S.FooterDescription>
							The premier destination for luxury real estate worldwide
						</S.FooterDescription>
						<S.SocialLinks>
							<S.SocialLink href="#">
								<i data-feather="facebook" />
							</S.SocialLink>
							<S.SocialLink href="#">
								<i data-feather="twitter" />
							</S.SocialLink>
							<S.SocialLink href="#">
								<i data-feather="instagram" />
							</S.SocialLink>
							<S.SocialLink href="#">
								<i data-feather="linkedin" />
							</S.SocialLink>
						</S.SocialLinks>
					</S.FooterColumn>

					<S.FooterColumn>
						<S.FooterTitle>Quick Links</S.FooterTitle>
						<S.FooterList>
							<S.FooterListItem>
								<S.FooterLink href="#">Home</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Properties</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Agents</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">About Us</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Contact</S.FooterLink>
							</S.FooterListItem>
						</S.FooterList>
					</S.FooterColumn>

					<S.FooterColumn>
						<S.FooterTitle>Services</S.FooterTitle>
						<S.FooterList>
							<S.FooterListItem>
								<S.FooterLink href="#">Buying</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Selling</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Renting</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Property Management</S.FooterLink>
							</S.FooterListItem>
							<S.FooterListItem>
								<S.FooterLink href="#">Investment</S.FooterLink>
							</S.FooterListItem>
						</S.FooterList>
					</S.FooterColumn>

					<S.FooterColumn>
						<S.FooterTitle>Contact Us</S.FooterTitle>
						<S.ContactList>
							<S.ContactListItem>
								<i data-feather="map-pin" />
								<span>123 Luxury Ave, Beverly Hills, CA 90210</span>
							</S.ContactListItem>
							<S.ContactListItem>
								<i data-feather="mail" />
								<span>info@luxuryhomes.com</span>
							</S.ContactListItem>
							<S.ContactListItem>
								<i data-feather="phone" />
								<span>(555) 123-4567</span>
							</S.ContactListItem>
						</S.ContactList>
					</S.FooterColumn>
				</S.FooterGrid>

				<S.FooterBottom>
					<S.Copyright>
						&copy; 2023 LuxuryHomes. All rights reserved.
					</S.Copyright>
					<S.LegalLinks>
						<S.LegalLink href="#">Privacy Policy</S.LegalLink>
						<S.LegalLink href="#">Terms of Service</S.LegalLink>
						<S.LegalLink href="#">Sitemap</S.LegalLink>
					</S.LegalLinks>
				</S.FooterBottom>
			</S.Container>
		</S.Footer>
	);
};

export default Footer;
