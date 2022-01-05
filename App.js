import "react-native-gesture-handler";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  Button,
  ButtonGroup,
  withTheme,
  Text,
  Icon,
} from "react-native-elements";
import { useState, createContext, useMemo, useEffect } from "react";
import { MainLayout } from "nativeapp/components/layout/mainLayout";
import {
  PlayersContext,
  EditModeContext,
  ActiveGameContext,
} from "nativeapp/components/store/contextStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameScreen } from "nativeapp/components/screens/gameScreen";
import { PlayersScreen } from "nativeapp/components/screens/playersScreen";
import { HomeScreen } from "nativeapp/components/screens/homeScreen";
import { PrepareGameScreen } from "nativeapp/components/screens/prepareGameScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import storage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

export default function App() {
  const [players, setPlayers] = useState([]);
  const playersData = useMemo(() => ({ players, setPlayers }), [players]);

  const [editMode, setEditMode] = useState(false);
  const editModeData = useMemo(() => ({ editMode, setEditMode }), [editMode]);

  const [activeGame, setActiveGame] = useState(false);
  const activeGameData = useMemo(
    () => ({ activeGame, setActiveGame }),
    [activeGame]
  );

  useEffect(() => {
    storage.getItem("@players").then((item) => {
      const readyData = JSON.parse(item);
      if (Array.isArray(readyData)) {
        setPlayers(readyData);
      }
    });
  }, []);

  useEffect(() => {
    console.log(activeGame);
  }, [activeGame]);

  useEffect(async () => {
    await storage.setItem("@players", JSON.stringify(players));
  }, [players]);

  return (
    <PlayersContext.Provider value={playersData}>
      <EditModeContext.Provider value={editModeData}>
        <ActiveGameContext.Provider value={activeGameData}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
              <Stack.Screen name="Prepare" component={PrepareGameScreen} />
              <Stack.Screen
                name="Players"
                component={PlayersScreen}
                options={{
                  headerRight: () => (
                    <Icon
                      name={editMode ? "check" : "edit"}
                      type="font-awesome"
                      color="#f50"
                      onPress={() =>
                        setEditMode((prev) => {
                          return prev ? false : true;
                        })
                      }
                      containerStyle={{ margin: 10 }}
                    />
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ActiveGameContext.Provider>
      </EditModeContext.Provider>
    </PlayersContext.Provider>
  );
}
