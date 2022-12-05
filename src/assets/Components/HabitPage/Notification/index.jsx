import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { SelectList } from "react-native-dropdown-select-list"

export default function Notification({ NotificationToggle, setNotificationToggle }) {

    const toggleSwitch = () => {
        setNotificationToggle((previousState) => !previousState);
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Notificação</Text>
                <Switch
                    trackColor={{ false: "#FF0044", true: "#2DBE56" }}
                    thumbColor={"#FFFFFF"}
                    ios_backgroundColor="#3E3E3E"
                    onValueChange={toggleSwitch}
                    value={NotificationToggle} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    titleDisabled: {
        color: "#BBBBBB",
        fontSize: 20,
        marginRight: 10,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 20,
        marginRight: 10,
    },
});
