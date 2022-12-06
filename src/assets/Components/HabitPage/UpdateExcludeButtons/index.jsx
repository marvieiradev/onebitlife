import React from "react";
import { Alert, TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UpdateExcludeButtons({
    habitInput, handleUpdate, habitArea,
}) {
    const navigation = useNavigation();

    function handleDeleteHabit(){
        navigation.navigate("Home", {
            excludeArea: `${habitArea}`,
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.updateButton}
                activeOpacity={0.8}
                onPress={() => {
                    Alert.alert(
                        "Ao prosseguir você vai atualizar o hábito, tem certeza?",
                        "Ao fazer isso você pode mudar o hábito, frequencia e notificação.",
                        [{
                            text: "Cancelar",
                        },
                        {
                            text: "Atualizar",
                            onPress: handleUpdate,
                        }
                        ]
                    );
                }}
            >
                <Text style={styles.updateButtonText}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.trashButton}
                activeOpacity={0.8}
                onPress={() => {
                    Alert.alert(
                        "Você tem certeza que quer excluir o hábito?",
                        "Ao fazer isso perderá todo o progresso do hábito.",
                        [{
                            text: "Cancelar",
                            onPress: () => {
                                Alert.alert("Exclusão cancelada");
                            }
                        },
                        {
                            text: "Excluir",
                            onPress: handleDeleteHabit,
                        }
                        ]
                    );
                }}
            >
                <Image source={require("onebitlife/src/assets/icons/trash.png")}
                    style={styles.trashIcon}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom: 20,

    },
    updateButton: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        width: 150,
        height: 50,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    updateButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },

    trashButton: {
        borderWidth: 1,
        borderColor: "#FF0044",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 90, 
    },

    trashIcon: {
        width: 25,
        height: 25,
    },
});
