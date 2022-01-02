import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Modal, Pressable } from 'react-native';
import { useState, createContext, useMemo } from 'react';
import MainLayout from './components/layout/mainLayout'
import SingleTodoItem from './components/elements/cards/singleTodoItem';

export const PlayersContext = createContext({
  Players: [],
  setPlayers: () => { },
});

export default function App() {
  const [data, setData] = useState(0)
  const [input, setInput] = useState('')
  const [players, setPlayers] = useState([]);
  const playersData = useMemo(
    () => ({ players, setPlayers }),
    [players]
  );

  return (
    <PlayersContext.Provider value={playersData}>
      <MainLayout>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Dodaj gracza"
            onChangeText={setInput}
            value={input}
            style={styles.formContainerInput} />
          <View style={styles.formContainerButtonContainer}>
            <Button title="DODAJ" onPress={() => {
              setPlayers((last) => {
                return [...last, { name: input, points: 0, active: false }]
              })
              setInput("")
            }} />
          </View>
        </View>
        {players.map((item, index) => {
          return <Pressable key={index} onPress={() => { console.log("TO DZIAŁ!", index) }}>
            <SingleTodoItem item={item} />
          </Pressable>
        })}
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ backgroundColor: "red", flex: 1 }}><Text>A</Text></View>
          <View style={{ backgroundColor: "cyan", flex: 1 }}><Text>B</Text></View>
          <View style={{ backgroundColor: "magenta", flex: 1 }}><Text>C</Text></View>
        </View>
      </MainLayout>
    </PlayersContext.Provider>
  );
}

const styles = StyleSheet.create({
  formContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: 5, width: "100%" },
  formContainerInput: { paddingRight: 50, borderBottomWidth: 2, borderColor: "green", flex: 1 },
  formContainerButtonContainer: { paddingHorizontal: 5 },
});
