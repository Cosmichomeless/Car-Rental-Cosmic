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
                name="components/clientsView"
                options={{ headerTitle: 'Clientes' }}
            />
            <Stack.Screen
                name="components/rentsView"
                options={{ headerTitle: 'Alquileres' }}
            />
            <Stack.Screen
                name="components/vehiclesView"
                options={{ headerTitle: 'Vehículos' }}
            />
        </Stack>
    );
} 