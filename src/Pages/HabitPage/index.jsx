import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import SelectHabit from "../../assets/Components/HabitPage/SelectHabit";
import SelectFrequency from "../../assets/Components/HabitPage/SelectFrequency";
import Notification from "../../assets/Components/HabitPage/Notification"
import TimeDataPicker from "../../assets/Components/TimeDataPicker";
import UpdadeExcludeButtons from "../../assets/Components/HabitPage/UpdateExcludeButtons"
import DefaultButton from "../../assets/Components/Commun/DefaultButton"
import HabitsService from "../../Services/HabitsService";

export default function HabitPage({ route }) {
    const navigation = useNavigation();
    const [habitInput, setHabitInput] = useState();
    const [frequencyInput, setFrequencyInput] = useState();
    const [notificationToggle, setNotificationToggle] = useState();
    const [dayNotification, setDayNotification] = useState();
    const [timeNotification, setTimeNotification] = useState();
    const { create, habit } = route.params;

    const HabitCreated = new Date();
    const formatDate = `${HabitCreated.getFullYear}-${HabitCreated.getMonth() + 1}-${HabitCreated.getDate()}`;

    function handleCreateHabit() {
        if (habitInput === undefined ||
            frequencyInput === undefined) {
            Alert.alert(
                "Você precisa selecionar um hábito para continuar"
            );
        } else if (
            notificationToggle === true &&
            frequencyInput === "Diário" &&
            timeNotification === undefined
        ) {
            Alert.alert("Você precisa informar o horário da notificação");
        } else if (
            notificationToggle === true &&
            frequencyInput === "Diário" &&
            dayNotification === undefined &&
            timeNotification === undefined
        ) {
            Alert.alert("Você precisa informar a frequência e o horário da notificação");
        } else {

            HabitsService.createHabit({
                habitArea: habit?.habitArea,
                habitName: habitInput,
                habitFrequency: frequencyInput,
                habitHasNotification: notificationToggle,
                habitNotificationFrequency: dayNotification,
                habitNotificationTime: timeNotification,
                lastCheck: formatDate,
                daysWithoutChecks: 0,
                habitIsChecked: 0,
                progressBar: 1,
            }).then(() => {
                Alert.alert("Sucesso na criação do hábito!");

                navigation.navigate("Home", {
                    createHabit: `Created in ${habit?.habitArea}`,
                });
            });
        }
    }

    function handleUpdateHabit() {
        if (notificationToggle === true && !dayNotification && !timeNotification) {
          Alert.alert("Você precisa informar a frequência e o horário da notificação");
            } else {
          HabitsService.updateHabit({
            habitArea: habit?.habitArea,
            habitName: habitInput,
            habitFrequency: frequencyInput,
            habitHasNotification: notificationToggle,
            habitNotificationFrequency: dayNotification,
            habitNotificationTime: timeNotification,
            habitNotificationId: notificationToggle ? habitInput : null,
          }).then(() => {
            Alert.alert("Sucesso na atualização do hábito");
            if (!notificationToggle) {
            
            } else {
         
            }
            navigation.navigate("Home", {
              updatedHabit: `Updated in ${habit?.habitArea}`,
            });
          });
        }
      }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/icons/arrowBack.png")}
                            style={styles.arrowBack} />

                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Configurações {"\n"} de hábito</Text>
                        <Text style={styles.inputText}>Área</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>

                        <Text style={styles.inputText}>Hábito</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput} />

                        <Text style={styles.inputText}>Frequência</Text>
                        <SelectFrequency habitFrequency={habit?.habitFrequency} frequencyInput={setFrequencyInput} />

                        {frequencyInput === "Mensal" ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle} />
                        )}

                        {notificationToggle ? (
                            frequencyInput === "Mensal" ? null : (
                                <TimeDataPicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    setDayNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ) : null}

                        {create == false ? (
                            <UpdadeExcludeButtons
                                handleUpdate={handleUpdateHabit}
                                habitArea={habit?.habitArea}
                                habitInput={habitInput}
                            />
                        ) : (
                            <View style={styles.configButton}>
                                <DefaultButton
                                    buttonText={"Criar"}
                                    handlePress={handleCreateHabit}
                                    width={250}
                                    height={50}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21,0.98)"
    },

    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
    },

    arrowBack: {
        width: 40,
        height: 40,
    },

    mainContent: {
        width: 250,
        alignSelf: "center",
    },

    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 30,
    },

    inputText: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    area: {
        color: "#BBBBBB",
        fontSize: 15,
    }
});


