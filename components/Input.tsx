import React, {useState} from 'react';
import {Text, TextInput} from "react-native";

export const Input = ({taskTitle, onChange}:InputType) => {
    const [title, setTitle] = useState(taskTitle);
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(taskTitle);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }

    return (
        editMode
            ? <TextInput value={title} onChangeText={setTitle} autoFocus={true} onEndEditing={activateViewMode}/>
            : <Text onPress={activateEditMode} style={{backgroundColor: "red"}}>{taskTitle}</Text>
    );
};

type InputType = {
    taskTitle: string
    onChange: (value: string)=> void
}
