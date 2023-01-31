import React from 'react'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";


export function MainApp() {
    // const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
        <View style={{flex: 1}}>
            {/*<ErrorSnackbar/>*/}
            <View style={{flex: 1}}>
                <TodolistsList/>
            </View>
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
    },
    text: {
        fontSize: 42,
    },
});
