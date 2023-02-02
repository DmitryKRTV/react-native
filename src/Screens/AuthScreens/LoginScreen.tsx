import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../../../globalStyles";
import {RootAuthScreenParamList} from "../../components/NavigationsTypes";

export const LoginScreen = ({navigation}: RootAuthScreenParamList) => {
    return (
        <View style={globalStyles.center}>
            <Text>Login Screen</Text>
            <Button
                title="Go to Registration... again"
                onPress={() => navigation.navigate('Auth', {screen: "Registration", params: {id: 1, name: "sdsd"}})}
            />
        </View>
    );
};
