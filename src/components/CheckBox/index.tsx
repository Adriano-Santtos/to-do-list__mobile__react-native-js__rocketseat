import {Alert, TouchableOpacityProps} from "react-native";

import {taskUpdateStatusById} from "@storage/tasks/taskUpdateStatusById";
import {taskGetAll} from "@storage/tasks/taskGetAll";

import {TasksStorageDTO} from "@storage/tasks/TasksStorageDTO";

import {Container, Icon} from "@components/CheckBox/styles";

type Props = TouchableOpacityProps & {
    task: TasksStorageDTO;
}

export function CheckBox({task, ...rest}: Props) {

    async function handlePress() {
        try {
            await taskUpdateStatusById(task.id)
            await taskGetAll()
        } catch(error){
            console.log(error)
            Alert.alert('Tarefas', 'Não foi possível atualizar a tarefa.');
        }
    }

    return (
        <Container
            {...rest}
            onPress={() => handlePress()}
        >
            <Icon
                size={24}
                name={task.isChecked ? "check-circle-fill" : "circle"}
                isChecked={task.isChecked}
            />
        </Container>
    );
}
