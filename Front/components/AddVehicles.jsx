import axios from 'axios';
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { colors } from "../constants/colors";
import { Localhost } from "../constants/Localhost";
import { Picker } from '@react-native-picker/picker';

export default function AddVehicles({ modalVisible, setModalVisible, fetchData }) {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [matricula, setMatricula] = useState('');
    const [anio, setAnio] = useState('');
    const [nombreExtra, setNombreExtra] = useState('');
    const [color, setColor] = useState('');
    const [motor, setMotor] = useState('');
    const [tipoMotor, setTipoMotor] = useState('');
    const [vehiculoID, setVehiculoID] = useState('');
    const [extrasID, setExtrasID] = useState('');

    const extrasList = [
        { nombre: "Aire Acondicionado", extraID: 1 },
        { nombre: "GPS", extraID: 2 },
        { nombre: "Asientos de Cuero", extraID: 3 },
        { nombre: "Bluetooth", extraID: 4 },
        { nombre: "Cámara de Reversa", extraID: 5 },
        { nombre: "Sensores de Estacionamiento", extraID: 6 },
        { nombre: "Techo Solar", extraID: 7 },
        { nombre: "Control de Crucero", extraID: 8 },
        { nombre: "Faros LED", extraID: 9 },
        { nombre: "Sistema de Sonido Premium", extraID: 10 }
    ];
    const tipoMotorList = [
        { nombre: "Gasolina", tipoMotorID: 1 },
        { nombre: "Diesel", tipoMotorID: 2 },
        { nombre: "Eléctrico", tipoMotorID: 3 },
        { nombre: "Híbrido", tipoMotorID: 4 },
    ];

    const postVehicle = async () => {
        if (
            !marca.trim() ||
            !modelo.trim() ||
            !matricula.trim() ||
            !anio.trim() ||
            !color.trim() ||
            !motor.trim() ||
            !tipoMotor.trim() ||
            !extrasID
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        if (isNaN(Number(anio))) {
            Alert.alert('Error', 'El año de fabricación debe ser numérico.');
            return;
        }

        try {
            await axios.post(`http://${Localhost}:8080/vehiculo`, {
                marca: marca,
                modelo: modelo,
                matricula: matricula,
                anio: anio,
                nombreExtra: nombreExtra,
                color: color,
                motor: motor,
                tipoMotor: tipoMotor,
                vehiculoID: vehiculoID,
                extrasID: extrasID
            });
            fetchData();
            setMarca('');
            setModelo('');
            setMatricula('');
            setAnio('');
            setNombreExtra('');
            setColor('');
            setMotor('');
            setTipoMotor('');
            setVehiculoID('');
            setExtrasID('');
            setModalVisible(false);
        } catch (error) {
            console.error('Error posting vehicle:', error);
            Alert.alert('Error', 'No se pudo agregar el vehículo. Inténtelo de nuevo.');
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
                    <TextInput
                        style={styles.input}
                        placeholder="Año de Fabricación"
                        value={anio}
                        onChangeText={setAnio}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Color"
                        value={color}
                        onChangeText={setColor}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Motor"
                        value={motor}
                        onChangeText={setMotor}
                    />
                    <Picker
                        selectedValue={tipoMotor}
                        onValueChange={(itemValue) => setTipoMotor(itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Seleccione un tipo de motor..." value="" key={-1} />
                        {tipoMotorList.map(tipo => (
                            <Picker.Item
                                label={tipo.nombre}
                                value={tipo.nombre}
                                key={tipo.tipoMotorID}
                            />
                        ))}
                    </Picker>
                    <Picker
                        selectedValue={extrasID}
                        onValueChange={(itemValue) => setExtrasID(itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Seleccione un extra..." value="" key={-1} />
                        {extrasList.map(extra => (
                            <Picker.Item
                                label={extra.nombre}
                                value={extra.extraID}
                                key={extra.extraID}
                            />
                        ))}
                    </Picker>
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