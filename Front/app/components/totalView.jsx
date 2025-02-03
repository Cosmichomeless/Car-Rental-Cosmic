import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
export default function TotalView() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Rents</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Text>Rents View</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: '95%',
        height: '95%',
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
    },
    button: {
        backgroundColor: colors.background,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
})


