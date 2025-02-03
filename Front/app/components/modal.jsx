<Modal animationType="fade" transparent={true} visible={modalVisible}>
    <View style={styles.overlay}>
        <View style={styles.modalcontainer}>
            <View style={{ flex: 1 }} />
            <Text style={styles.modalTitle}>Añadir Cliente</Text>
            <View style={{ flex: 1 }} />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={inputNombre}
                onChangeText={setInputNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={inputEmail}
                onChangeText={setInputEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Dirección"
                value={inputDireccion}
                onChangeText={setInputDireccion}
            />
            <View style={{ flex: 1 }} />
            <View style={[styles.roww, { justifyContent: 'center' }]}>
                <TouchableOpacity style={styles.botonCerrar} onPress={() => {
                    setModalVisible(false);
                    setInputNombre('');
                    setInputEmail('');
                    setInputDireccion('');
                }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Cerrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonGuardar} onPress={postCliente}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
</Modal>

const styles = StyleSheet.create({
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
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        fontSize: 20,
    },
    roww: {
        flexDirection: 'row',
    },
    botonCerrar: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    botonGuardar: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
});