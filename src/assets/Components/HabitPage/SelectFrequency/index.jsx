import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list"

export default function SelectFrequency({ habitFrequency, frequencyInput }) {

    const [selected, setSelected] = useState(
        habitFrequency ? habitFrequency : "-"
    );

    const data = [
        { key: "Diário", value: "Diário" },
        { key: "Semanal", value: "Semanal" },
        { key: "Mensal", value: "Mensal" },
    ];

    useEffect(() => {
        frequencyInput(habitFrequency ? habitFrequency : undefined);
    }, []);

    return (
        <>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={() => {
                    frequencyInput(selected);
                }}
                placeholder={selected}
                boxStyles={styles.boxStyle}
                inputStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownStyle}
                dropdownItemStyles={styles.dropdownItemStyle}
                dropdownTextStyles={styles.dropdownTextStyle}
                arrowicon={
                    <Image
                        source={require("onebitlife/src/assets/icons/arrowDropdown.png")}
                        style={styles.arrow}
                    />
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    boxStyle: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    inputStyle: {
        color: "#FFFFFF",
    },

    dropdownStyle: {
        borderWidth: 0,
    },

    dropdownItemStyle: {
        borderWidth: 1,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        marginBottom: 15,
    },

    dropdownTextStyle: {
        color: "#BBBBBB",
    },

    arrow: {
        width: 20,
        height: 20,
    }
});
