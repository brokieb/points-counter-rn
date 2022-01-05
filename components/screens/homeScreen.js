import { StyleSheet, View, TextInput } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import storage from "@react-native-async-storage/async-storage";
import { rootStyle, buttonsStyle } from "nativeapp/components/styles/rootStyle";
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={rootStyle.root}>
      <Text style={rootStyle.mainTitle}>Licznikator 3000</Text>
      <View style={buttonsStyle.buttons}>
        <Button
          title="Kontynuuj grę"
          onPress={async () => {
            navigation.navigate("Game");
          }}
          buttonStyle={{
            backgroundColor: "green",
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <Button
          title="Nowa gra"
          onPress={async () => {
            navigation.navigate("Prepare");
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "orange",
          }}
        />
        <Button
          title="Gracze"
          onPress={() => {
            navigation.navigate("Players");
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "blue",
          }}
        />
        <Button
          title="Ustawienia"
          onPress={() => {}}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "red",
          }}
        />
      </View>
    </View>
  );
};
