import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { colors } from '../../constants/colors';
import { Localhost } from '../../constants/Localhost';
import axios from 'axios';
import ItemRents from '../../components/ItemRents';
import DetailsRents from '../../components/DetailsRents';
import AddRents from '../../components/AddRent';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Función para formatear la fecha (Día Mes Año)
const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default function RentsView() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisibleDetails, setDetailsVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://${Localhost}:8080/alquileres`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteRent = async () => {
        if (!selectedItem || !selectedItem.alquilerID) return;
        try {
            await axios.delete(`http://${Localhost}:8080/alquileres/${selectedItem.alquilerID}`);
            fetchData();
            setDetailsVisible(false);
        } catch (error) {
            console.error("Error deleting rent:", error);
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <View style={styles.card}>
                    <DetailsRents
                        modalVisible={modalVisibleDetails}
                        setModalVisible={setDetailsVisible}
                        selectedItem={selectedItem}
                        onDelete={deleteRent}
                    />
                    <AddRents
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        fetchData={fetchData}
                    />
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                            <AntDesign name="addfile" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.cardTextTop}>Alquileres</Text>
                        <TouchableOpacity style={styles.button} onPress={fetchData}>
                            <Ionicons name="refresh" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ width: '100%', marginTop: 10 }}
                        data={data}
                        renderItem={({ item }) => (
                            <ItemRents
                                title={`Cliente: ${item.nombreCliente} | Coche: ${item.matricula}`}
                                subtitle={`Importe: ${item.precio}€ | Fecha Inicio: ${formatDate(item.fechaInicio)} | Fecha Fin: ${formatDate(item.fechaFin)}`}
                                estado={item.entregado}
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
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    card: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '90%',
        minHeight: '90%',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});