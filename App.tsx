import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode} from "react";
import {MainApp} from "./src/app/App";
import {Provider} from "react-redux";
import {store} from "./src/app/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <MainApp/>
            </View>
        </Provider>

    );
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffffe',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: "60%",
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#fffffe',
        fontSize: 20
    },
    boxTask: {
        flexDirection: "row",
        backgroundColor: "#fffffe",
        justifyContent: "space-between",
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
    }
});

