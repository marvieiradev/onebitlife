import React from "react";
import { ProgressBar } from "react-native-paper"
import { View, StyleSheet, Image } from "react-native";

export default function StatusBar({
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit,
}) {

    return (

        <View style={styles.container}>
            <View style={styles.stausBarContainer}>
                <Image source={require("onebitlife/src/assets/icons/educationIcon.png")}
                    style={styles.icon} />
                <ProgressBar progress={mindHabit} color={"#90B7F3"} style={styles.progress} />
            </View>

            <View style={styles.stausBarContainer}>
                <Image source={require("onebitlife/src/assets/icons/moneyIcon.png")}
                    style={styles.icon} />
                <ProgressBar progress={moneyHabit} color={"#85BB65"} style={styles.progress} />
            </View>

            <View style={styles.stausBarContainer}>
                <Image source={require("onebitlife/src/assets/icons/bodyIcon.png")}
                    style={styles.icon} />
                <ProgressBar progress={bodyHabit} color={"#FF0044"} style={styles.progress} />
            </View>

            <View style={styles.stausBarContainer}>
                <Image source={require("onebitlife/src/assets/icons/funIcon.png")}
                    style={styles.icon} />
                <ProgressBar progress={funHabit} color={"#FE7F23"} style={styles.progress} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: 350,
        borderRadius: 25,
        padding: 20,
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center",
    },

    stausBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },

    progress: {
        borderRadius: 10,
        width: 250,
        height: 8,
    },

    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
});
