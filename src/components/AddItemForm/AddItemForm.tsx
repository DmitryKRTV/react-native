import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    // console.log('AddItemForm called')

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <View style={{flexDirection: "row"}}>
        {/*<TextField variant="outlined"*/}
        {/*           disabled={disabled}*/}
        {/*           error={!!error}*/}
        {/*           value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           label="Title"*/}
        {/*           helperText={error}*/}
        {/*/>*/}
        <TextInput
            style={[styles.input]}
            onChangeText={setTitle}
            value={title}
        />
        <View>
            <TouchableOpacity>
                <Ionicons name="add" size={28} color="black"/>
            </TouchableOpacity>
        </View>
        {/*<IconButton color="primary" onClick={addItemHandler} disabled={disabled}>*/}
        {/*    <AddBox/>*/}
        {/*</IconButton>*/}
    </View>
})

const styles = StyleSheet.create({
    input: {
        width: 150,
        height: 30,
        backgroundColor: '#dadada'
    }
})
