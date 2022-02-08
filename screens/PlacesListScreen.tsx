import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/PlacesNavigator";

type rootScreenProp = StackNavigationProp<RootStackParamList, "NewPlace">;

const PlacesListScreen = () => {
  const navigation = useNavigation<rootScreenProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      ),
      headerTitle: "All Places",
    });
  }, [navigation]);

  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
