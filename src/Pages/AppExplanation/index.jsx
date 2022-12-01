import React from "react";
import ExplanationCard from "../../assets/Components/Explanation/ExplanationCard";
import DefaultButton from "../../assets/Components/Commun/DefaultButton";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";


export default function AppExplanation() {

    function handleSetShowHome() {
        console.log("BBBBBBB");
    };

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <ExplanationCard/>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na próxima tela você vai poder escolher {"\n"}
                        seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center",
        marginVertical: 40,
        marginBottom: 20,
        marginTop: 30,
    },

    descriptionCta: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },

    description: {
        color: '#FFFFFF',
        textAlign: "center",
        marginBottom: 20,
    },
})