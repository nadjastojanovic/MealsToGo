import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
