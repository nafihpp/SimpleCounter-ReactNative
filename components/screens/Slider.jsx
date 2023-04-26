import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { Fragment } from "react";

export default function Slider() {
    return (
        <Fragment>
            <Text style={styles.mainHeading}>Simple SLIDER</Text>
            <ScrollView>
                <View></View>
                <View></View>
            </ScrollView>
        </Fragment>
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
