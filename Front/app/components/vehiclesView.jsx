import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Modal } from "react-native";
import { colors } from "../../constants/colors";
import Axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { Localhost } from "../../constants/Localhost";

export default function VehiclesView() {
    const [datalist, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await Axios.get(`http://${Localhost}:8080/vehiculo`);
            const vehiculos = response.data;
            const formattedData = vehiculos.map(vehiculo => ({
                title: `${vehiculo.marca} ${vehiculo.modelo}`,
                subtitle: `Matrícula: ${vehiculo.matricula}, Año: ${vehiculo.anio}, Color: ${vehiculo.color}, Motor: ${vehiculo.motor}, Tipo de Motor: ${vehiculo.tipoMotor}`,
                ...vehiculo
            }));
            setData(formattedData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.cardTextTop}>Vehículos</Text>
                        <TouchableOpacity style={styles.button} onPress={fetchData}>
                            <Ionicons name="refresh" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={datalist}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.listItem} onPress={() => handleItemPress(item)}>
                                <Text style={styles.listItemTitle}>{item.title}</Text>
                                <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
            {selectedItem && (
                <Modal animationType="fade" transparent={true} visible={modalVisible}>
                    <View style={styles.overlay}>
                        <View style={styles.modalcontainer}>
                            <Text style={styles.modalTitle}>Detalles del Vehículo</Text>
                            <Text style={styles.modalText}>Marca: {selectedItem.marca}</Text>
                            <Text style={styles.modalText}>Modelo: {selectedItem.modelo}</Text>
                            <Text style={styles.modalText}>Matrícula: {selectedItem.matricula}</Text>
                            <Text style={styles.modalText}>Año: {selectedItem.anio}</Text>
                            <Text style={styles.modalText}>Color: {selectedItem.color}</Text>
                            <Text style={styles.modalText}>Motor: {selectedItem.motor}</Text>
                            <Text style={styles.modalText}>Tipo de Motor: {selectedItem.tipoMotor}</Text>
                            <TouchableOpacity style={styles.botonCerrar} onPress={() => setModalVisible(false)}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        width: '85%',
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
        backgroundColor: colors.data,
        padding: 10,
        borderRadius: 10,
    },
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
    listItemSubtitle: {
        color: "black",
        fontSize: 14,
        textAlign: 'right',
    },
    cardTextTop: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        height: '50%',
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 20,
        marginVertical: 10,
    },
    botonCerrar: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
});