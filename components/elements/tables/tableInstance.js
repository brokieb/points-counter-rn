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
export default function TableInstance({ heads, body }) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#ffa1d2" }}>
        <Row
          data={heads}
          style={styles.HeadStyle}
          textStyle={styles.TableText}
        />
        <Rows data={body} textStyle={styles.TableText} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: "#ffffff",
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: "#ffe0f0",
  },
  TableText: {
    margin: 10,
  },
});
