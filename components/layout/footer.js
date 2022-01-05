import { StatusBar } from "expo-status-bar";
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
export const Footer = () => {
  const [data, setData] = useState(0);
  const { players, setPlayers } = useContext(PlayersContext);
  function updateScore(currentPlayers, points) {
    return currentPlayers.map((singlePlayer, index) => {
      if (singlePlayer.active) {
        singlePlayer.points = singlePlayer.points + points;
      }
      return singlePlayer;
    });
  }
  return (
    <View style={styles.footer}>
      {[1, 2, 5].map((item, index) => {
        return (
          <Pressable
            key={index}
            style={styles.buttonSuccess}
            onPress={() => {
              setPlayers((currentPlayers) => {
                return updateScore(currentPlayers, item);
              });
            }}
          >
            <Text style={styles.text}>+{item}</Text>
          </Pressable>
        );
      })}
      {[-1, -2, -5].map((item, index) => {
        return (
          <Pressable
            key={index}
            style={styles.buttonDanger}
            onPress={() => {
              setPlayers((currentPlayers) => {
                return updateScore(currentPlayers, item);
              });
            }}
          >
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        );
      })}
      <Pressable
        style={styles.buttonSuccess}
        onPress={() => {
          setPlayers((currentPlayers) => {
            let updateNext = false;
            currentPlayers.map((item, index) => {
              if (updateNext) {
                updateNext = false;
                item.active = true;
              } else if (item.active) {
                if (index == currentPlayers.length - 1) {
                  currentPlayers[0].active = true;
                } else {
                  updateNext = true;
                }
                item.active = false;
              }

              return item;
            });
            return [...currentPlayers];
          });
        }}
      >
        <Text style={styles.text}>NEXT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonSuccess: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 40,
    borderRadius: 4,

    backgroundColor: "green",
  },
  buttonDanger: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
