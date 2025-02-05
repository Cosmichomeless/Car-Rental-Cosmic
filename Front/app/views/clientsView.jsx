import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { colors } from "../../constants/colors";
import { Localhost } from "../../constants/Localhost";
import axios from "axios";
import ItemClient from "../../components/ItemClient";
import DetailsClient from "../../components/DetailsClient";
import AddClients from "../../components/AddClients";

export default function ClientsView() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisibleDetails, setDetailsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://${Localhost}:8080/clientes`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const deleteClient = async () => {
        if (!selectedItem || !selectedItem.clienteID) return;
        try {
            await axios.delete(`http://${Localhost}:8080/clientes/${selectedItem.clienteID}`);
            fetchData();
            setDetailsVisible(false);
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <View style={styles.card}>
                    <DetailsClient
                        modalVisible={modalVisibleDetails}
                        setModalVisible={setDetailsVisible}
                        selectedItem={selectedItem}
                        onDelete={deleteClient}
                    />
                    <AddClients
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        fetchData={fetchData}
                    />
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                            <AntDesign name="addusergroup" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.cardTextTop}>Clientes</Text>
                        <TouchableOpacity style={styles.button} onPress={fetchData}>
                            <Ionicons name="refresh" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ width: '100%', marginTop: 10 }}
                        data={data}
                        renderItem={({ item }) => (
                            <ItemClient
                                title={`Cliente: ${item.nombre} ${item.apellido}`}
                                subtitle={`Contacto: ${item.email}`}
                                onPress={() => {
                                    setSelectedItem(item);
                                    setDetailsVisible(true);
                                }}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    card: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '90%',
        minHeight: '90%',
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
    },
    cardTextTop: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
    },
});