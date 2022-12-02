import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";


export default function EditHabit({ habit, frequency, habitArea, checkColor }) {

    function handleEdit() {
        console.log(`Clicou editar: ${habitArea}`)
    }

    function handleCheck() {
        console.log(`Clicou check: ${habitArea}`)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleEdit}>

            <View style={styles.habitText}>
                <Text style={styles.habitText}>{habit}</Text>
                <Text style={styles.habitFrequency}>{frequency}</Text>
            </View>

            <TouchableOpacity
                style={[styles.check, { borderColor: checkColor }]}
                onPress={handleCheck}>
            </TouchableOpacity>
        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#151515",
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    habitText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    habitFrequency: {
        color: "#FFFFFF"
    },

    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
    }
});
