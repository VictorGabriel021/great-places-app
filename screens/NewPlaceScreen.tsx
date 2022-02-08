import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/PlacesNavigator";

type rootScreenProp = StackNavigationProp<RootStackParamList, "NewPlace">;

const NewPlaceScreen = () => {
  const navigation = useNavigation<rootScreenProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Add Place",
    });
  }, [navigation]);

  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
