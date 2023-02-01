import React from 'react'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaWrapper} from "../components/SafeAreaWrapper";
import {HomeProps, ProfileProps, RootStackParamList, UserProps} from "../components/NavigationsTypes";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";


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

//-----------------react-navigation---------------
// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>(); //Tab
// const Drawer = createDrawerNavigator<RootStackParamList>(); //Drawer



function HomeScreen({navigation}: HomeProps) {
    return (
        <SafeAreaWrapper>
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <TodolistsList/>
                    <Button
                        title="Go to Profile... again"
                        onPress={() => navigation.navigate('Profile', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })}
                    />
                </View>
            </View>
        </SafeAreaWrapper>
    );
}

function ProfileScreen({route, navigation}: ProfileProps) {
    let params;
    if (route.params?.otherParam) {
        params = route.params
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>Profile Screen</Text>
            <Text>{params?.itemId}</Text>
            <Text>{params?.otherParam}</Text>
            <Button
                title="Go to User... again"
                onPress={() => navigation.navigate('User')}
            />
        </View>
    );
}

function UserScreen({navigation}: UserProps) {
    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Home... again"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
        ;
}

export function NavMainApp() {
    // const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <SafeAreaProvider>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="User" component={UserScreen}/>
                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {},
    text: {
        fontSize: 42,
    },
});
