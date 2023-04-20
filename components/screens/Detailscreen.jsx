import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Detailscreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>Detailscreen</Text>
            <Text style={styles.mainHeading}>
                Write the details here now and get it right back!
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainHeading: {
        fontSize: 20,
        fontWeight: 600,
    },
});
