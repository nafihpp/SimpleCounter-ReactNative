import {
    View,
    Text,
    Pressable,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Alert,
} from "react-native";
import React, { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Homepage() {
    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        } else {
            Alert.alert("Value greater than 10 is not allowed");
        }
    };
    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        } else {
            Alert.alert("value less than zero not allowed");
        }
    };

    const navigation = useNavigation();

    return (
        <Fragment>
            <View style={styles.mainContainer}>
                <Text style={styles.MainHeading}>Homepage</Text>
                <Pressable onPress={() => navigation.navigate("Detail")}>
                    <Text style={styles.buttonDetail}>Detail Page</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Accordion")}
                    style={styles.button}
                >
                    <Text style={styles.buttonDetail}>Accordion</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("userList")}
                    style={styles.button}
                >
                    <Text style={styles.buttonDetail}>UserList</Text>
                </Pressable>
                <Pressable
                    onPress={() =>
                        navigation.navigate("counter", {
                            count: count,
                            increment: increment,
                            decrement: decrement,
                        })
                    }
                    style={styles.button}
                >
                    <Text style={styles.buttonDetail}>Counter</Text>
                </Pressable>
            </View>

            {/* <Counter
                count={count}
                increment={increment}
                decrement={decrement}
            /> */}
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
    button: {
        marginTop: 10,
    },
});
