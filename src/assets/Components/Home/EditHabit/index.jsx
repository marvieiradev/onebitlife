import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"
import HabitsService from "../../../../Services/HabitsService"

export default function EditHabit({ habit, frequency, habitArea, checkColor }) {
    const navigation = useNavigation();
    const [habitCheck, setHabitCheck] = useState();
    const [checkImage, setCheckImage] = useState(
        require("onebitlife/src/assets/icons/Mind.png")
    );
    function handleEdit() {
        navigation.navigate("HabitPage", {
            create: false,
            habit,
        });
    }

    function handleCheck() {
        if (habitCheck === 0) {
            setHabitCheck(1);
        }
    }

    useEffect(() => {
        setHabitCheck(habit?.habitIsChecked);
        if (habit?.habitArea === "Financeiro") {
            setCheckImage(require("onebitlife/src/assets/icons/Money.png"));
        }
        if (habit?.habitArea === "Corpo") {
            setCheckImage(require("onebitlife/src/assets/icons/Body.png"));
        }
        if (habit?.habitArea === "Humor") {
            setCheckImage(require("onebitlife/src/assets/icons/Fun.png"));
        }
    }, []);

    const textNotification =
        habit?.habitNotificationTime == null
            ? `Sem notificação - ${habit?.habitFrequency}`
            : `${habit?.habitNotificationTime} - ${habit?.habitFrequency}`;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleEdit}>

            <View style={styles.habitText}>
                <Text style={styles.habitText}>{habit?.habitName}</Text>
                <Text style={styles.habitFrequency}>{textNotification}</Text>
            </View>

            {habitCheck === 0 ? (
                <TouchableOpacity
                    style={[styles.check, { borderColor: checkColor }]}
                    onPress={handleCheck}
                />
            ) : (
                <TouchableOpacity onPress={handleCheck}>
                    <Image source={checkImage} style={styles.checked} />
                </TouchableOpacity>
            )}
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
    },

    checked: {
        width: 25,
        height: 25,
      },
});
