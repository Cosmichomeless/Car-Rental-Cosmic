import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from "../constants/colors";

export default function ItemVehicle({ title, subtitle, onPress }) {
    return (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Text style={styles.listItemTitle}>{title}</Text>
                <Text style={styles.listItemTitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: '100%',
        flexDirection: 'row',
    },
    listItemTitle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});