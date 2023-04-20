import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StackNavigation from "./components/navigation/StackNavigation";

export default function App() {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <StackNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: "#000",
    },
});
