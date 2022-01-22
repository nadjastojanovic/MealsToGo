import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "La Lupita",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/10/f1/bf/b2/authentic-mexican-dishes.jpg",
    ],
    address = "West 4th Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ url: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={16} height={16} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED</Text>}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={16} height={16} />}
            <Spacer position="left" size="large" />
            <Icon source={{ url: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
