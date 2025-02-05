import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../constants/colors";

export default function DetailsVehicles({ modalVisible, setModalVisible, selectedItem, onDelete }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Detalles del Vehículo</Text>
                    <Text style={styles.modalText}>Identificador Vehiculo: {selectedItem?.vehiculoID}</Text>
                    <Text style={styles.modalText}>Marca: {selectedItem?.marca}</Text>
                    <Text style={styles.modalText}>Modelo: {selectedItem?.modelo}</Text>
                    <Text style={styles.modalText}>Matrícula: {selectedItem?.matricula}</Text>
                    <Text style={styles.modalText}>Extras: {selectedItem?.nombreExtra}</Text>
                    <Text style={styles.modalText}>Color: {selectedItem?.color}</Text>
                    <Text style={styles.modalText}>Año: {selectedItem?.anio}</Text>
                    <Text style={styles.modalText}>Motor y combustible: {selectedItem?.motor} {selectedItem?.tipoMotor}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={onDelete}
                        >
                            <Text style={styles.deleteButtonText}>Borrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
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
    deleteButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    }, buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
    },
});