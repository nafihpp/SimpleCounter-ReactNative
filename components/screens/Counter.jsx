import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Counter({ route }) {
    const { count, increment, decrement } = route.params;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.countContainer}>
                <Text style={styles.MainHeading}>{count}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={increment}>
                    <Text style={styles.buttonDetail}>Increment</Text>
                </Pressable>
                <Pressable onPress={decrement} style={styles.decrementButton}>
                    <Text style={styles.buttonDetail}>Decrement</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonDetail: {
        fontSize: 20,
        padding: 20,
        backgroundColor: "#000",
        color: "#fff",
        width: 150,
        textAlign: "center",
    },
    MainHeading: {
        fontWeight: 600,
        fontSize: 30,
    },
    decrementButton: {
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    countContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        backgroundColor: "#fff",
        padding: 10,
        flex: 1,
    },
});
