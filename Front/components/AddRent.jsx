import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { colors } from "../constants/colors";
import { Localhost } from "../constants/Localhost";

export default function AddRents({ modalVisible, setModalVisible, fetchData }) {
    const [precio, setPrecio] = useState('');
    const [vehiculoID, setVehiculoID] = useState('');
    const [formaPagoID, setFormaPagoID] = useState('');
    const [clienteID, setClienteID] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const postRent = async () => {
        try {
            await axios.post(`http://${Localhost}:8080/alquileres`, {
                precio: Number(precio),
                vehiculoID: Number(vehiculoID),
                formaPagoID: Number(formaPagoID),
                clienteID: Number(clienteID),
                fechaInicio, // Debe tener formato ISO o YYYY-MM-DD según lo requiera el backend
                fechaFin,   // Debe tener formato ISO o YYYY-MM-DD según lo requiera el backend
                entregado: false
            });
            fetchData();
            // Reinicia los campos
            setPrecio('');
            setVehiculoID('');
            setFormaPagoID('');
            setClienteID('');
            setFechaInicio('');
            setFechaFin('');
            setModalVisible(false);
        } catch (error) {
            console.error('Error posting rent:', error);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Agregar Alquiler</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Precio"
                        value={precio}
                        onChangeText={setPrecio}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Vehículo ID"
                        value={vehiculoID}
                        onChangeText={setVehiculoID}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Forma de Pago ID"
                        value={formaPagoID}
                        onChangeText={setFormaPagoID}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cliente ID"
                        value={clienteID}
                        onChangeText={setClienteID}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha Inicio (YYYY-MM-DD)"
                        value={fechaInicio}
                        onChangeText={setFechaInicio}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha Fin (YYYY-MM-DD)"
                        value={fechaFin}
                        onChangeText={setFechaFin}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={postRent}>
                        <Text style={styles.addButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});