import {Alert} from "react-native";

import {CheckBox} from "@components/CheckBox";
import {ButtonIcon} from "@components/ButtonIcon";

import {taskDeleteById} from "@storage/tasks/taskDeleteById";
import {taskGetAll} from "@storage/tasks/taskGetAll";

import {TasksStorageDTO} from "@storage/tasks/TasksStorageDTO";

import {Container, Description} from "@components/TaskCard/styles";

import theme from "@theme/index";

type Props = {
    task: TasksStorageDTO;
}

export function TaskCard({task}: Props) {
    async function handleRemoveTask(task: TasksStorageDTO) {
        try {
            await taskDeleteById(task.id);
            await taskGetAll()

        } catch (error){
            console.log(error)
            Alert.alert('Tarefas', 'Não foi possível excluir a tarefa selecionada.');
        }
    }

    return (
        <Container isChecked={task.isChecked}>
            <CheckBox
                task={task}
            />

            <Description isChecked={task.isChecked}>
                {task.description}
            </Description>

            <ButtonIcon
                size={24}
                icon="trash-outline"
                color={theme.COLORS.GRAY_300}
                onPress={() => handleRemoveTask(task)}
            />
        </Container>
    )
}

