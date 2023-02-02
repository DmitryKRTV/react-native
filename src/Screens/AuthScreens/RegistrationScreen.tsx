import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../../../globalStyles";
import {RootAuthScreenParamList} from "../../components/NavigationsTypes";

export const RegistrationScreen = ({navigation}: RootAuthScreenParamList) => {
    return (
        <View style={globalStyles.center}>
            <Text>Registration Screen</Text>
            <Button
                title="Go to User... again"
                onPress={() => navigation.navigate('User')}
            />
        </View>
    );
};
