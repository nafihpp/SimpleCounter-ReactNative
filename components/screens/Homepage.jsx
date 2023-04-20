import {
    View,
    Text,
    Pressable,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
} from "react-native";
import React, { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Counter from "../includes/counter";

export default function Homepage() {
    const navigation = useNavigation();

    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        }
    };
    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <Fragment>
            <View style={styles.mainContainer}>
                <Text style={styles.MainHeading}>Homepage</Text>
                <Pressable onPress={() => navigation.navigate("Detail")}>
                    <Text style={styles.buttonDetail}>Press to go Detail</Text>
                </Pressable>
            </View>
            <Counter
                count={count}
                increment={increment}
                decrement={decrement}
            />
        </Fragment>
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
    mainContainer: {
        backgroundColor: "#fff",
        padding: 10,
    },
});
