import React from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../components/utils/safe-area.component";

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="account" backgroundColor="#FF6347" />
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
      </List.Section>
    </SafeArea>
  );
};
