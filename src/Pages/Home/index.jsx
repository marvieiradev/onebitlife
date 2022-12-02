import React from "react";
import LifeStatus from "onebitlife/src/assets/Components/Commun/LifeStatus/index.jsx"
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function Home() {
    const navigation = useNavigation();

    function handleNavExplanation(){
        navigation.navigate("AppExplanation");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>

                    <Text style={styles.dailyChecks}>
                    ❤ 20 dias  -  ✔ 80 checks
                    </Text>

                    <LifeStatus />
                </View>

                <Text style={styles.explanationText}
                    onPress={() => {
                        handleNavExplanation();
                    }}>
                    Ver explicação novamente </Text>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 30,
        marginBottom: -10,
    },

    explanationText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBotton: 25,
        marginTop: 20,
    },
});