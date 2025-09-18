import React from "react";
import * as S from "./PropertyCard.styles";
import { Property } from "@/types";

interface PropertyCardProps {
	property: Property;
	delay?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, delay = 0 }) => {
	return (
		<S.Card data-aos="fade-up" data-aos-delay={delay}>
			<S.ImageContainer>
				<img src={property.image} alt={property.title} loading="lazy" />
				<S.StatusBadge type={property.type}>
					{property.type === "sale" ? "For Sale" : "For Rent"}
				</S.StatusBadge>
				<S.PriceBadge>{property.price}</S.PriceBadge>
			</S.ImageContainer>

			<S.CardContent>
				<S.Title>{property.title}</S.Title>
				<S.Location>
					<i data-feather="map-pin" />
					{property.location}
				</S.Location>

				<S.Details>
					<S.DetailItem>
						<i data-feather="home" />
						<span>{property.sqft}</span>
					</S.DetailItem>
					<S.DetailItem>
						<i data-feather="square" />
						<span>{property.beds} Beds</span>
					</S.DetailItem>
					<S.DetailItem>
						<i data-feather="droplet" />
						<span>{property.baths} Baths</span>
					</S.DetailItem>
				</S.Details>

				<S.ViewDetailsButton>View Details</S.ViewDetailsButton>
			</S.CardContent>
		</S.Card>
	);
};

export default PropertyCard;
