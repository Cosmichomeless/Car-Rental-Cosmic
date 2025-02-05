import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, TextInput } from "react-native";
import { colors } from "../../constants/colors";
import { Localhost } from "../../constants/Localhost";
import axios from "axios";
import ItemVehicle from "../../components/ItemVehicle";
import DetailsVehicles from "../../components/DetailsVehicles";
import AddVehicles from "../../components/AddVehicles";

export default function VehiclesView() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisibleDetails, setDetailsVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://${Localhost}:8080/vehiculo`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteVehicle = async () => {
        if (!selectedItem || !selectedItem.vehiculoID) return;
        try {
            await axios.delete(`http://${Localhost}:8080/vehiculo/${selectedItem.vehiculoID}`);
            fetchData();
            setDetailsVisible(false);
        } catch (error) {
            console.error("Error deleting vehicle:", error);
        }
    };

    const filteredData = data.filter(item => {
        return (
            (item.marca && item.marca.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.modelo && item.modelo.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.matricula && item.matricula.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <View style={styles.card}>

                    <DetailsVehicles
                        modalVisible={modalVisibleDetails}
                        setModalVisible={setDetailsVisible}
                        selectedItem={selectedItem}
                        onDelete={deleteVehicle}
                    />
                    <AddVehicles
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        fetchData={fetchData}
                    />
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                            <Ionicons name="add-circle-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.cardTextTop}>Vehículos</Text>
                        <TouchableOpacity style={styles.button} onPress={fetchData}>
                            <Ionicons name="refresh" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                    <FlatList
                        style={{ width: '100%', marginTop: 10 }}
                        data={filteredData}
                        renderItem={({ item }) => (
                            <ItemVehicle
                                title={`Modelo: ${item.marca} ${item.modelo}`}
                                subtitle={`Matrícula: ${item.matricula}`}
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