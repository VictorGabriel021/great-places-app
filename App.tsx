import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import PlacesNavigator from "./navigation/PlacesNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
