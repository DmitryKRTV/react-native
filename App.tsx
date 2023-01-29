import {Button, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode, useState} from "react";
import Checkbox from "expo-checkbox";
import {Input} from "./components/Input";

export default function App() {

    const [value, setValue] = useState('')

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'HTML',
            isDone: true,
        },
        {
            id: 2,
            title: 'CSS',
            isDone: true,
        },
        {
            id: 3,
            title: 'JS',
            isDone: false,
        },
        {
            id: 4,
            title: 'React-native',
            isDone: true,
        },
        {
            id: 5,
            title: 'Angular',
            isDone: false,
        },
    ])

    const addTask = () => {
        if (value) {
            setTasks((prevState) => ([...prevState, {id: new Date().getMilliseconds(), title: value, isDone: false}]))
            setValue("")
        }
    }

    const changeStatus = (id: number, value: boolean) => {
        setTasks((prevState) => prevState.map(i => i.id === id ? {id: i.id, title: i.title, isDone: value} : i))
    }

    const changeTaskTitle = (id: number, title: string) => {
        setTasks((prevState) => prevState.map(i => i.id === id ? {id: i.id, title: title, isDone: i.isDone} : i))
    }

    const deleteTask = (id: number) => {
        setTasks((prevState) => prevState.filter(i => i.id !== id))
    }

    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[{width: "80%", flexDirection: "row" , alignItems: "center"}]}>
                    <TextInput value={value} onChangeText={setValue} style={[styles.input, globalStyles.border]}/>
                    <Button title={"Add task"} onPress={addTask}/>
                </View>
            </HideKeyboard>
            <View style={{width: "50%"}}>
                {tasks.map((task, index) => {
                    return <View key={index} style={[styles.boxTask]}>
                        <Checkbox value={task.isDone} onValueChange={(value) => changeStatus(task.id, value)}/>
                        <Input taskTitle={task.title} onChange={(value: string) => changeTaskTitle(task.id, value)}/>
                        <Button title={"delete"} onPress={()=>deleteTask(task.id)}/>
                    </View>
                } )}
            </View>
        </View>
    );
}

const HideKeyboard = ({children} : {children: ReactNode}) : ReactElement => (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "60%",
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#fffffe',
        fontSize: 20
    },
    boxTask: {
        flexDirection: "row",
        backgroundColor: "#fffffe",
        justifyContent: "space-between",
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
    }
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white5*"
    }
})
