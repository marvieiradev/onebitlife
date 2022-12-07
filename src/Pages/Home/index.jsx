import React, { useEffect, useState } from "react";
import HabitsService from "../../Services/HabitsService";
import LifeStatus from "onebitlife/src/assets/Components/Commun/LifeStatus/index.jsx"
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import StatusBar from "../../assets/Components/Home/StatusBar";
import CreateHabit from "../../assets/Components/Home/CreateHabit";
import EditHabit from "../../assets/Components/Home/EditHabit";
import ChangeNavigationService from "onebitlife/src/Services/ChangeNavigationService.js";


export default function Home({ route }) {
    const navigation = useNavigation();

    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();
    const [robotDaysLife, setRobotDaysLife] = useState();
    const today = new Date();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation");
    }

    useEffect(() => {

        HabitsService.findByArea("Mente").then((mind) => {
            setMindHabit(mind[0]);
        });
        HabitsService.findByArea("Financeiro").then((money) => {
            setMoneyHabit(money[0]);
        });
        HabitsService.findByArea("Corpo").then((body) => {
            setBodyHabit(body[0]);
        });
        HabitsService.findByArea("Humor").then((fun) => {
            setFunHabit(fun[0]);
        });



        ChangeNavigationService.checkShowHome(1)
            .then((showHome) => {
                const formDate = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
                const checkDays = new Date(formDate) - new Date(showHome.appStartData) + 1;
                setRobotDaysLife(checkDays.toString().padStart(2, "0"));

            })
            .catch((err) => console.log(err));
    }, [route.params]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>

                    <Text style={styles.dailyChecks}>
                        ❤ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"}  -  ✔ 80 checks
                    </Text>

                    <LifeStatus />
                    <StatusBar />

                    {mindHabit ? (
                        <EditHabit habit={mindHabit} checkColor="#90B7F3" />
                    ) : (
                        <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                    )}
                    {moneyHabit ? (
                        <EditHabit habit={moneyHabit} checkColor="#85BB65" />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    )}
                    {bodyHabit ? (
                        <EditHabit habit={bodyHabit} checkColor="#FF0044" />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
                    )}
                    {funHabit ? (
                        <EditHabit habit={funHabit} checkColor="#FE7F23" />
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