import { AntDesign, Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, TextInput } from "react-native";
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
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredData = data.filter(item => {
        const fullName = `${item.nombre} ${item.apellido}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase()) ||
            (item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase()));
    });

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
                    <TextInput
                        style={styles.input}
                        placeholder="Busca cliente"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                    <FlatList
                        style={{ width: '100%', marginTop: 10 }}
                        data={filteredData}
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
        minHeight: '80%',
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
    input: {
        width: '100%',
        height: '6%',
        padding: 10,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.data,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
    },
});