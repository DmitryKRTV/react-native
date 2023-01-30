import React from 'react'
// import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {View} from "react-native";


export function MainApp() {
    // const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <View style={{flex: 1}}>
            {/*<ErrorSnackbar/>*/}
            <View style={{flex: 1}}>
                <TodolistsList/>
            </View>
        </View>
    )
}
