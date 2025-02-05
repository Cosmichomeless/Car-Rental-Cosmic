import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from "../constants/colors";

export default function ItemRents({ title, subtitle, estado, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.listItem, { backgroundColor: estado ? colors.green : colors.red }]}
            onPress={onPress}
        >
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.listItemTitle}>{title}</Text>
                    <Text style={styles.estadoText}>{estado ? 'Entregado' : 'Pendiente'}</Text>
                </View>
                <Text style={styles.listItemSubtitle}>{subtitle}</Text>
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
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: '100%',
    },
    content: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemTitle: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    listItemSubtitle: {
        color: colors.black,
        fontSize: 14,
        marginTop: 5,
    },
    estadoText: {
        fontSize: 14,
        color: colors.hite,
    },
});