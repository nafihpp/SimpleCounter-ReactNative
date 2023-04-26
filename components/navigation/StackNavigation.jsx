import React, { useState } from "react";
import Homepage from "../screens/Homepage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Accordion from "../screens/Accordion";
import UserList from "../screens/UserList";
import Slider from "../screens/Slider";
import counter from "../screens/Counter";

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
                <Stack.Screen name="Detail" component={Slider} />
                <Stack.Screen name="Accordion" component={Accordion} />
                <Stack.Screen name="userList" component={UserList} />
                <Stack.Screen name="counter" component={counter} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
