import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restauran-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
