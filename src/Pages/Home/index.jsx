import React, { useEffect, useState } from "react";
import LifeStatus from "onebitlife/src/assets/Components/Commun/LifeStatus/index.jsx"
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import StatusBar from "../../assets/Components/Home/StatusBar";
import CreateHabit from "../../assets/Components/Home/CreateHabit";
import EditHabit from "../../assets/Components/Home/EditHabit";

export default function Home() {
    const navigation = useNavigation();

    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation() {
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
                    <StatusBar />

                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit.habitFrequency}`}
                            habitArea={mindHabit?.habitArea}
                            checkColor="#90B7F3" />
                    ) : (
                        <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                    )}

                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit.habitFrequency}`}
                            habitArea={moneyHabit?.habitArea}
                            checkColor="#85BB65" />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    )}

                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit?.habitName}
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit.habitFrequency}`}
                            habitArea={bodyHabit?.habitArea}
                            checkColor="#FF0044" />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
                    )}

                    {funHabit ? (
                        <EditHabit
                            habit={funHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit.habitFrequency}`}
                            habitArea={funHabit?.habitArea}
                            checkColor="#FE7F23" />
                    ) : (
                        <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
                    )}

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
        marginBottom: 20,
    },
});