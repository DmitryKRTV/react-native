import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Profile: {
        itemId: number,
        otherParam: string,
    } | undefined;
    User: { sort: 'latest' | 'top' } | undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;