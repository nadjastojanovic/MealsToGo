import { Platform, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  margin-top: ${Platform.OS === "ios" ? 0 : StatusBar.currentHeight}px;
  flex: 1;
`;
