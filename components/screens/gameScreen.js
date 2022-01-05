import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "react-native-elements";

import { useState, useContext, useEffect } from "react";
import { SingleTodoItem } from "nativeapp/components/elements/cards/singleTodoItem";
import { ActiveGameContext } from "nativeapp/components/store/contextStore";
import storage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
export const GameScreen = ({ navigation }) => {
  const [active, SetActive] = useState("");
  const { activeGame, setActiveGame } = useContext(ActiveGameContext);
  // const { players, setPlayers } = useContext(PlayersContext);

  return (
    <View style={styles.root}>
      <View style={styles.usersTitle}>
        <View style={styles.singlePlayerTitleCell}>
          <Text>Runda</Text>
        </View>
        {activeGame.players.map((item, index) => {
          return (
            <View style={styles.singlePlayerTitleCell}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.scoresArea}>
        <View style={styles.playersArea}>
          <View>
            {[...Array(activeGame.rounds)].map((x, i) => {
              console.log(activeGame.players[0].points[1]);
              return (
                <View style={styles.singlePlayerTitleCell}>
                  {activeGame.players.map((player) => {
                    return <Text>{player.points[i]}</Text>;
                  })}
                </View>
              );
            })}
          </View>

          {/* <View style={styles.singlePlayerTitleCell}>
              <Text>a</Text>
            </View>
            <View style={styles.singlePlayerTitleCell}>
              <Text>b</Text>
            </View>
            <View style={styles.singlePlayerTitleCell}>
              <Text>c</Text>
            </View>
            <View style={styles.singlePlayerTitleCell}>
              <Text>d</Text>
            </View> */}
        </View>
        <View style={styles.scoreButtonArea}>
          {[+1, +2, +5, -1, -2, -5, "NEXT"].map((item) => {
            return <Button title={item} buttonStyle={{ padding: 25 }} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  scoreButtonArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "10%",
    paddingVertical: 10,
    backgroundColor: "red",
  },
  usersTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "10%",
  },
  scoresArea: {
    height: "80%",
  },
  playersArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  singlePlayerArea: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  singlePlayerNameArea: {
    fontSize: 24,
    height: 26,
    overflow: "scroll",
  },
  active: {
    backgroundColor: "purple",
  },
  singlePlayerTitleCell: {
    backgroundColor: "orange",
    display: "flex",
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  singlePlayerPointCell: {
    backgroundColor: "yellow",
    display: "flex",
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
});
