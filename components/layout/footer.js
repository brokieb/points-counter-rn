import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
export default function Footer() {
    const [data, setData] = useState(0)

    return (
        <View style={styles.footer}>
            {["+1", "+2", "+5"].map((item, index) => {
                return <Pressable key={index} style={styles.buttonSuccess} onPress={() => { }}>
                    <Text style={styles.text}>{item}</Text>
                </Pressable>
            })}
            {["-1", "-2", "-5"].map((item, index) => {
                return <Pressable key={index} style={styles.buttonDanger} onPress={() => { }}>
                    <Text style={styles.text}>{item}</Text>
                </Pressable>
            })}
            <Pressable style={styles.buttonSuccess} onPress={() => { }}>
                <Text style={styles.text}>NEXT</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: { display: "flex", backgroundColor: "black", justifyContent: "space-around", flexDirection: "row", width: "100%", paddingHorizontal: 10 },
    buttonSuccess: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 40,
        borderRadius: 4,

        backgroundColor: 'green',
    },
    buttonDanger: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
