import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
export default function SingleTodoItem({ item }) {
    return (
        <View style={styles.listItem}>
            <Text>Imię: {item.name}</Text>
            <Text>Punkty: {item.points}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: { padding: 5, marginVertical: 5, backgroundColor: "orange" }
});
