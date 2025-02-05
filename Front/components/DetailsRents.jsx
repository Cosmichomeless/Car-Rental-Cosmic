import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../constants/colors";

export default function DetailsRents({ modalVisible, setModalVisible, selectedItem, onDelete, updateState }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Detalles del Alquiler</Text>
                    <Text style={styles.modalText}>Identificador Alquiler: {selectedItem?.alquilerID}</Text>
                    <Text style={styles.modalText}>Nombre: {selectedItem?.nombreCliente}</Text>
                    <Text style={styles.modalText}>Matrícula: {selectedItem?.matricula}</Text>
                    <Text style={styles.modalText}>Importe: {selectedItem?.precio}€</Text>
                    <Text style={styles.modalText}>Fecha de Inicio: {formatDate(selectedItem?.fechaInicio)}</Text>
                    <Text style={styles.modalText}>Fecha de Salida: {formatDate(selectedItem?.fechaFin)}</Text>
                    <Text style={styles.modalText}>Tipo de pago: {selectedItem?.nombreFormaPago}</Text>
                    <Text style={styles.modalText}>Estado: {selectedItem?.entregado ? 'Entregado' : 'Pendiente'}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                            <Text style={styles.deleteButtonText}>Borrar</Text>
                        </TouchableOpacity>
                        {selectedItem?.entregado ? (
                            <TouchableOpacity
                                style={[styles.updateButton, { backgroundColor: colors.red }]}
                                onPress={updateState}
                            >
                                <Text style={styles.updateButtonText}>Marcar No Entregado</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={[styles.updateButton, { backgroundColor: colors.green }]}
                                onPress={updateState}
                            >
                                <Text style={styles.updateButtonText}>Marcar Entrega</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    deleteButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    updateButton: {
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
    },
    updateButtonText: {
        color: 'white',
        fontSize: 16,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});