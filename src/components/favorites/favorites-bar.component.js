import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";

import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restauran-info.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <>
      <FavoritesWrapper>
        <Spacer variant="left.large">
          <Text variant="label">Favorites</Text>
        </Spacer>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favorites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FavoritesWrapper>
    </>
  );
};
