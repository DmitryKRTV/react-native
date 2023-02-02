import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {StackScreenProps} from "@react-navigation/stack";

export type RootStackParamList = {
    Auth: NavigatorScreenParams<RootAuthParamList>
    Home: undefined;
    Profile: {
        itemId: number,
        otherParam: string,
    } | undefined;
    User: { sort: 'latest' | 'top' } | undefined;
};

export type RootAuthParamList = {
    Login: undefined
    Registration: {id: number, name: string}
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;

export type RootAuthScreenParamList = CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, "Auth">,
    StackScreenProps<RootAuthParamList>
>