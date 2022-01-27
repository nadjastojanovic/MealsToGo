import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
  padding-top: 0;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.sizes[0]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
