import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { colors } from "../constants/colors";
import { Localhost } from "../constants/Localhost";
import { Picker } from '@react-native-picker/picker';

export default function AddRents({ modalVisible, setModalVisible, fetchData }) {
    const [precio, setPrecio] = useState('');
    const [vehiculoID, setVehiculoID] = useState('');
    const [formaPagoID, setFormaPagoID] = useState('');
    const [clienteID, setClienteID] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const validDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString);
    };

    const postRent = async () => {
        // Validación de campos vacíos
        if (
            !clienteID.trim() ||
            !vehiculoID.trim() ||
            !precio.trim() ||
            !formaPagoID ||
            !fechaInicio.trim() ||
            !fechaFin.trim()
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        // Validación de valores numéricos para identificadores y precio
        if (isNaN(Number(clienteID)) || isNaN(Number(vehiculoID)) || isNaN(Number(precio))) {
            Alert.alert('Error', 'Cliente, Vehículo e Importe deben ser números válidos.');
            return;
        }

        // Validación del formato de fechas
        if (!validDate(fechaInicio) || !validDate(fechaFin)) {
            Alert.alert('Error', 'Las fechas deben tener el formato YYYY-MM-DD.');
            return;
        }

        try {
            await axios.post(`http://${Localhost}:8080/alquileres`, {
                precio: Number(precio),
                vehiculoID: Number(vehiculoID),
                formaPagoID: Number(formaPagoID),
                clienteID: Number(clienteID),
                fechaInicio,
                fechaFin,
                entregado: false
            });
            fetchData();
            setPrecio('');
            setVehiculoID('');
            setFormaPagoID('');
            setClienteID('');
            setFechaInicio('');
            setFechaFin('');
            setModalVisible(false);
        } catch (error) {
            console.error('Error posting rent:', error);
            Alert.alert('Error', 'No se pudo agregar el alquiler. Inténtelo de nuevo.');
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
                        placeholder="Identificador Cliente"
                        value={clienteID}
                        onChangeText={setClienteID}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Identificador Vehículo"
                        value={vehiculoID}
                        onChangeText={setVehiculoID}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Importe"
                        value={precio}
                        onChangeText={setPrecio}
                        keyboardType="numeric"
                    />
                    <Picker
                        selectedValue={formaPagoID}
                        style={styles.input}
                        onValueChange={(itemValue) => setFormaPagoID(itemValue)}
                    >
                        <Picker.Item label="Seleccione una forma de pago" value="" />
                        <Picker.Item label="Efectivo" value="1" />
                        <Picker.Item label="Tarjeta de Crédito" value="2" />
                        <Picker.Item label="Transferencia Bancaria" value="3" />
                    </Picker>
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