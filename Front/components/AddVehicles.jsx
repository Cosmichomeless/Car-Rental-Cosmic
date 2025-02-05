import axios from 'axios';
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../constants/colors";
import { Localhost } from "../constants/Localhost";

export default function AddVehicles({ modalVisible, setModalVisible, fetchData }) {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [matricula, setMatricula] = useState('');

    const postVehicle = async () => {
        try {
            await axios.post(`http://${Localhost}:8080/vehiculo`, {
                marca: marca,
                modelo: modelo,
                matricula: matricula,
            });
            fetchData();
            setMarca('');
            setModelo('');
            setMatricula('');
            setModalVisible(false);
        } catch (error) {
            console.error('Error posting vehicle:', error);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Agregar Vehículo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Marca"
                        value={marca}
                        onChangeText={setMarca}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Modelo"
                        value={modelo}
                        onChangeText={setModelo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Matrícula"
                        value={matricula}
                        onChangeText={setMatricula}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={postVehicle}>
                        <Text style={styles.addButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
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