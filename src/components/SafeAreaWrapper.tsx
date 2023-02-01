import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";

export const SafeAreaWrapper = ({children}: {children: React.ReactNode}) => {

    return (
        <SafeAreaView
            // style={styles.container}
        >
            <ScrollView
                // style={styles.scrollView}
            >
            {children}
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     paddingTop: StatusBar.currentHeight,
    // },
    scrollView: {},
    text: {
        fontSize: 42,
    },
});
