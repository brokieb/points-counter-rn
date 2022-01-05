import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";
import { useState, useContext, useEffect } from "react";
import { SingleTodoItem } from "nativeapp/components/elements/cards/singleTodoItem";
import {
  PlayersContext,
  EditModeContext,
  ActiveGameContext,
} from "nativeapp/components/store/contextStore";
import storage from "@react-native-async-storage/async-storage";
import { rootStyle, buttonsStyle } from "nativeapp/components/styles/rootStyle";
export const PrepareGameScreen = ({ navigation }) => {
  const { players, setPlayers } = useContext(PlayersContext);
  const { activeGame, setActiveGame } = useContext(ActiveGameContext);
  const [selectedPlayers, SetSelectedPlayers] = useState([]);

  return (
    <View style={rootStyle.root}>
      <View style={rootStyle.center}>
        <Text style={rootStyle.mainTitle}>Wybierz graczy do rozgrywki</Text>
        <View style={rootStyle.inlineItems}>
          {players.map((item, key) => {
            let include = selectedPlayers.includes(item.name) ? true : false;
            return (
              <Button
                title={item.name}
                buttonStyle={{
                  backgroundColor: include ? "#82dd55" : "red",
                  borderRadius: 3,
                }}
                containerStyle={{
                  margin: 15,
                }}
                onPress={() => {
                  if (!include) {
                    SetSelectedPlayers((items) => {
                      return [...items, item.name];
                    });
                  } else {
                    SetSelectedPlayers((items) => {
                      return items.filter((filtered) => {
                        return filtered != item.name;
                      });
                    });
                  }
                }}
                key={key}
              />
            );
          })}
        </View>
        <Button
          title="Rozpocznij grę!"
          buttonStyle={{
            backgroundColor: "#28a745",
            borderRadius: 3,
          }}
          onPress={() => {
            setActiveGame({
              rounds: 5,
              players: selectedPlayers.map((item) => {
                return {
                  name: item,
                  points: [5, 3, 7, 6, 3],
                };
              }),
            });
            navigation.navigate("Game");
          }}
          containerStyle={{
            margin: 15,
            marginVertical: 50,
            width: 200,
          }}
        />
      </View>
    </View>
  );
};
