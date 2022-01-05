import { StyleSheet, Text, Pressable, View } from "react-native";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  PlayersContext,
  EditModeContext,
} from "nativeapp/components/store/contextStore";
export const Header = (props) => {
  const { editMode, setEditMode } = useContext(EditModeContext);
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <FontAwesomeIcon icon={faCheck} size={22} />
        <Text>GRA NAZWA</Text>
      </View>
      <Pressable
        onPress={() => {
          setEditMode((prev) => {
            if (prev) {
              return false;
            } else {
              return true;
            }
          });
        }}
      >
        {editMode ? (
          <FontAwesomeIcon icon={faCheck} size={22} />
        ) : (
          <FontAwesomeIcon icon={faEdit} size={22} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    width: "100%",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
