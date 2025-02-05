import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View, StatusBar, ActivityIndicator, Modal} from "react-native";
import {useRouter} from "expo-router";
import {colors} from "../constants/colors";
import Axios from "axios";
import {BarChart} from "react-native-gifted-charts";
import { Ionicons } from '@expo/vector-icons';
import {Localhost} from "../constants/Localhost";

export default function Index() {
    const valueMin = 800;
    const [data, setData] = useState([]);
    const [barData, setBarData] = useState([]);
    const [datalist, setDatalist] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await Axios.get(`http://${Localhost}:8080/dashboard`);
            const data = response.data;
            setData(data);
            setLoading(false);
            setBarData([
                {value: data.mesEnero, label: 'E', frontColor: data.mesEnero < valueMin ? colors.red : colors.green},
                {value: data.mesFebrero, label: 'F', frontColor: data.mesFebrero < valueMin ? colors.red : colors.green},
                {value: data.mesMarzo, label: 'M', frontColor: data.mesMarzo < valueMin ? colors.red : colors.green},
                {value: data.mesAbril, label: 'A', frontColor: data.mesAbril < valueMin ? colors.red : colors.green},
                {value: data.mesMayo, label: 'M', frontColor: data.mesMayo < valueMin ? colors.red : colors.green},
                {value: data.mesJunio, label: 'J', frontColor: data.mesJunio < valueMin ? colors.red : colors.green},
                {value: data.mesJulio, label: 'J', frontColor: data.mesJulio < valueMin ? colors.red : colors.green},
                {value: data.mesAgosto, label: 'A', frontColor: data.mesAgosto < valueMin ? colors.red : colors.green},
                {value: data.mesSeptiembre, label: 'S', frontColor: data.mesSeptiembre < valueMin ? colors.red : colors.green},
                {value: data.mesOctubre, label: 'O', frontColor: data.mesOctubre < valueMin ? colors.red : colors.green},
                {value: data.mesNoviembre, label: 'N', frontColor: data.mesNoviembre < valueMin ? colors.red : colors.green},
                {value: data.mesDiciembre, label: 'D', frontColor: data.mesDiciembre < valueMin ? colors.red : colors.green},


            ]);
            if (data.ultimosAlquileres) {
                const alquileres = data.ultimosAlquileres.map(alquiler => ({
                    title: alquiler.nombreCliente,  
                    subtitle: `${alquiler.vehiculo} - Importe: ${alquiler.precio} €`,
                }));
                setDatalist(alquileres);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalclients = data.totalClientes || 0;
    const totalrents = data.totalAlquileres || 0;
    const totalVehicles = data.totalVehiculos || 0;
    const totalIncome = data.totalIngresos || 0;

    const router = useRouter();

    return (
        <View style={indexStyles.container}>
            <View style={indexStyles.graphCard}>
                <View style={indexStyles.header}>
                    <Text style={indexStyles.graphtext}>Ingresos por mes</Text>
                    <TouchableOpacity style={indexStyles.button} onPress={fetchData}>
                        <Ionicons name="refresh" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={indexStyles.graph}>
                    {loading? <ActivityIndicator size="large" color={'black'} /> :  <BarChart
                        barWidth={22}
                        noOfSections={3}
                        barBorderRadius={4}
                        frontColor="lightgray"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                    />}
                   
                </View>
            </View>
            <View style={indexStyles.grid}>
                <TouchableOpacity style={indexStyles.card} onPress={() => router.push('./views/clientsView')}>
                    <Text style={indexStyles.cardTextTop}>Clientes</Text>
                    <View style={indexStyles.card2}>
                        <Text style={indexStyles.cardTextBotton}>{totalclients}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={indexStyles.card} onPress={() => router.push('./views/rentsView')}>
                    <Text style={indexStyles.cardTextTop}>Alquileres</Text>
                    <View style={indexStyles.card2}>
                        <Text style={indexStyles.cardTextBotton}>{totalrents}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={indexStyles.grid}>
                <TouchableOpacity style={indexStyles.card}>
                    <Text style={indexStyles.cardTextTop}>Total Ingresos</Text>
                    <View style={indexStyles.card2}>
                        <Text style={indexStyles.cardTextBotton}>{totalIncome + " €"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={indexStyles.card} onPress={() => router.push('./views/vehiclesView')} >
                    <Text style={indexStyles.cardTextTop}>Vehículos</Text>
                    <View style={indexStyles.card2}>
                        <Text style={indexStyles.cardTextBotton}>{totalVehicles}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={indexStyles.listcard}>
                <Text style={indexStyles.cardTextTop}>Últimos alquileres</Text>
                <FlatList
                    data={datalist}
                    renderItem={({item}) => (
                        <TouchableOpacity style={indexStyles.listItem}>
                            <Text style={indexStyles.listItemTitle}>{item.title}</Text>
                            <Text style={indexStyles.listItemSubtitle}>{item.subtitle}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

export const indexStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    graphCard: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '85%',
        minheight: '40%',
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
    graph: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        minWidth: '100%',
        minHeight: '25%',
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "87%",
    },
    button: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
    },
    card: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: 315,
        height: 175,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    listcard: {
        backgroundColor: colors.background,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '85%',
        height: '28%',
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    card2: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: 280,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    graphtext: {
        marginStart: '37%',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    cardTextTop: {
        marginBottom: 5,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    cardTextBotton: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
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
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: '100%',
        flexDirection: 'row',
    },
    listItemTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    listItemSubtitle: {
        color: "black",
        fontSize: 18,
        textAlign: 'right',
    },
});