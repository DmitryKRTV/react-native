import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import {LoginScreen} from "./LoginScreen";
import {RegistrationScreen} from "./RegistrationScreen";
import {RootAuthParamList} from "../../components/NavigationsTypes";

const Stack = createStackNavigator<RootAuthParamList>()

export const RootAuth = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
            <Stack.Screen name={"Registration"} component={RegistrationScreen}/>
        </Stack.Navigator>
    );
};
