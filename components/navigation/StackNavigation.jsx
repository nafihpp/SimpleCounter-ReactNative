import React from "react";
import Homepage from "../screens/Homepage";
import Detailscreen from "../screens/Detailscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Homepage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detailscreen}
                    options={{
                        headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
