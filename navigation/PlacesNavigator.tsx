import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import Colors from "../constants/Colors";

export type RootStackParamList = {
  NewPlace: undefined;
  Places: undefined;
  PlaceDetail: undefined;
  Map: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen name="Places" component={PlacesListScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
