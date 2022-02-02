import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utils/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
