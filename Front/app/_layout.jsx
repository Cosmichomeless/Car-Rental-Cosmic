import { Stack } from "expo-router";
import { colors } from "../constants/colors";
export default function Layout() {
    return (
        <Stack
            screenOptions={({ route }) => ({
                headerTitle: route.name,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: colors.background,
                },
            })}
            style={{ flex: 1, padding: 10, alignItems: "center" }}
        >
            <Stack.Screen
                name="index"
                options={{ headerTitle: 'Inicio' }}
            />
            <Stack.Screen
                name="views/clientsView"
                options={{ headerTitle: 'Clientes' }}
            />
            <Stack.Screen
                name="views/rentsView"
                options={{ headerTitle: 'Alquileres' }}
            />
            <Stack.Screen
                name="views/vehiclesView"
                options={{ headerTitle: 'Vehículos' }}
            />
        </Stack>
    );
} 