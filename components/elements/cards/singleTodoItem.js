import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useContext } from "react";
import {
  PlayersContext,
  EditModeContext,
} from "nativeapp/components/store/contextStore";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCode, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export const SingleTodoItem = ({ item }) => {
  const { players, setPlayers } = useContext(PlayersContext);
  const { editMode, setEditMode } = useContext(EditModeContext);
  function highestScore(players) {
    let topScore = 0;
    let currentTop = null;
    players.map((singleItem) => {
      if (singleItem.points > topScore) {
        currentTop = singleItem.name;
        topScore = singleItem.points;
      }
    });
    return currentTop;
  }
  return (
    <View style={item.active ? styles.listItemActive : styles.listItem}>
      <View>
        <Text>Imię: {item.name}</Text>
        <Text>
          Punkty: {item.points}
          {highestScore(players) == item.name && " * * *"}
        </Text>
      </View>
      <View style={styles.listItemEditButton}>
        {editMode && (
          <Pressable
            onPress={async () => {
              setPlayers((players) => {
                return players.filter((user) => {
                  return item.name != user.name;
                });
              });
            }}
          >
            <FontAwesomeIcon icon={faTimes} size={22} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemActive: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lime",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemEditButton: {
    display: "flex",
    justifyContent: "center",
  },
});
