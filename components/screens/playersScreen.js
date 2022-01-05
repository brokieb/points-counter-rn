import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { SingleTodoItem } from "nativeapp/components/elements/cards/singleTodoItem";
import {
  PlayersContext,
  EditModeContext,
} from "nativeapp/components/store/contextStore";
import storage from "@react-native-async-storage/async-storage";
export const PlayersScreen = ({ navigation }) => {
  const [data, setData] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const { players, setPlayers } = useContext(PlayersContext);

  return (
    <View style={styles.root}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Dodaj gracza"
          onChangeText={setInput}
          value={input}
          style={styles.formContainerInput}
        />
        <View style={styles.formContainerButtonContainer}>
          <Button
            title="DODAJ"
            onPress={async () => {
              let playersArray = [
                ...players,
                { name: input, points: 0, active: false },
              ];
              setPlayers(playersArray);
              setInput("");
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {players.map((item, index) => {
          return <SingleTodoItem item={{ ...item }} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    width: "100%",
  },
  formContainerInput: {
    paddingRight: 50,
    borderBottomWidth: 2,
    borderColor: "green",
    flex: 1,
  },
  formContainerButtonContainer: { paddingHorizontal: 5 },
  scrollView: {
    marginVertical: 20,
  },
});
