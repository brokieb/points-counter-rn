import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
export default function Header(props) {

    return (<View style={styles.header}>
        <Text>GRA NAZWA</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    header: { backgroundColor: "green", width: "100%", padding: 20 },
});
