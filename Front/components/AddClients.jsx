import axios from 'axios';
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../constants/colors";
import { Localhost } from "../constants/Localhost";
import { useEffect } from 'react';

export default function DetailsClient({ modalVisible, setModalVisible, fetchData }) {
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Email, setEmail] = useState('');
    const [Dni, setDni] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Direccion, setDireccion] = useState('');



    const postCliente = async () => {
        try {
            await axios.post(`http://${Localhost}:8080/clientes`, {
                nombre: Nombre,
                apellido: Apellido,
                email: Email,
                dni: Dni,
                telefono: Telefono,
                direccion: Direccion,
            });
            fetchData();
            setNombre('');
            setApellido('');
            setEmail('');
            setDni('');
            setTelefono('');
            setDireccion('');
            setModalVisible(false);
        } catch (error) {
            console.error('Error posting client:', error);
        }
    };


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Agregar Cliente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={Nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        value={Apellido}
                        onChangeText={setApellido}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={Email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="DNI"
                        value={Dni}
                        onChangeText={setDni}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={Telefono}
                        onChangeText={setTelefono}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        value={Direccion}
                        onChangeText={setDireccion}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={postCliente}>
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
    modalText: {
        fontSize: 18,
        marginBottom: 20,
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