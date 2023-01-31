import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import {StyleSheet, Text, TextInput, View} from "react-native";

export const EditableSpan = ({value, onChange}: InputType) => {
    const [title, setValue] = useState(value);
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
        setValue(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }

    return (
        editMode
            ? <View style={{flexDirection: "row"}}>
                <TextInput value={title} onChangeText={setValue} autoFocus={true} onEndEditing={activateViewMode}
                           style={styles.input}/>
                <AntDesign name="check" size={24} color="black" onPress={activateViewMode} style={{marginRight: 20}}/>
                </View>
            : <Text onLongPress={activateEditMode} style={styles.text}>{value}</Text>
    );
};

const styles = StyleSheet.create({
    input: {
        minWidth: 100,
    },
    text: {
        marginHorizontal: 8
    }
})

type InputType = {
    value: string
    onChange: (value: string) => void
}
