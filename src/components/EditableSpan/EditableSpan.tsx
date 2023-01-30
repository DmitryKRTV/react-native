import React, {useState} from 'react';
import {StyleSheet, Text, TextInput} from "react-native";

export const EditableSpan = ({value, onChange}:InputType) => {
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
            ? <TextInput value={title} onChangeText={setValue} autoFocus={true} onEndEditing={activateViewMode} style={styles.input}/>
            : <Text onPress={activateEditMode} style={styles.input}>{value}</Text>
    );
};

const styles = StyleSheet.create({
    input: {
        minWidth: 150,
        minHeight: 30
    },
    text: {
        minWidth: 150,
        minHeight: 30
    }
})

type InputType = {
    value: string
    onChange: (value: string)=> void
}
