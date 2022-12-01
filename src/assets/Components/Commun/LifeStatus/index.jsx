import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus() {
    return (
        <View style={StyleSheet.container}>
            <Lottie
                source={require("onebitlife/src/assets/education/education-100.json")}
                autoPlay
                loop
                style={styles.educacaoAnimacao}
            />

            <Lottie
                source={require("onebitlife/src/assets/money/money-100.json")}
                autoPlay
                loop
                style={styles.financasAnimacao}
            />

            <Lottie
                source={require("onebitlife/src/assets/robot/robot-100-100.json")}
                autoPlay
                loop
                style={styles.roboAnimacao}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 0,
    },

    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: -20,
        position: "absolute",
    },

    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 70,
        position: "absolute",
    },
});