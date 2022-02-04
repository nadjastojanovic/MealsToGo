import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

import { SafeArea } from "../../components/utils/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { Spacer } from "../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../restaurants/components/restaurant-info-card.component";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
})``;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
