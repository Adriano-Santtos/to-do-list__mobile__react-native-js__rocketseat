import {useEffect, useState} from "react";
import {Alert, FlatList} from "react-native";

import {Header} from "@components/Header";
import {Input} from "@components/Input";
import {ButtonIcon} from "@components/ButtonIcon";
import {Filter} from "@components/Filter";
import {TaskCard} from "@components/TaskCard";
import {ListEmpty} from "@components/ListEmpty";

import {taskGetAll} from "@storage/tasks/taskGetAll";
import {taskCreate} from "@storage/tasks/taskCreate";
import {TasksStorageDTO} from "@storage/tasks/TasksStorageDTO";

import {
    BottomSection,
    ButtonFormShape,
    Container,
    TaskCardList,
    FilterOptions,
    Form,
    TopSection
} from './styles'

import theme from "../../theme";

export function Home() {
    const [tasks, setTasks] = useState<TasksStorageDTO[]>([]);
    const [newTaskDescription, setNewTaskDescription] = useState<string>("");
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const tasksCreatedCount = tasks.filter(task => !task.isChecked).length;
    const tasksCheckedCount = tasks.filter(task => task.isChecked).length;

    async function handleAddTask() {

        if (newTaskDescription.trim().length === 0) {
            return Alert.alert('Tarefas', 'Informe a descrição da tarefa para adicionar.');
        }


        const newTask: TasksStorageDTO = {
            id: String(Date.now()),
            description: newTaskDescription,
            isChecked: false,
        };

        try {
            await taskCreate(newTask);

            setNewTaskDescription('');

            await fetchTasks()
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            Alert.alert('Erro', 'Não foi possível adicionar tarefa.');
        }
    }

    async function fetchTasks() {
        try {
            const data = await taskGetAll();
            setTasks(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [tasks]);

    return (
        <Container>
            <TopSection>
                <Header/>
            </TopSection>

            <BottomSection>
                <Form>
                    <Input
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={theme.COLORS.GRAY_300}
                        selectionColor={theme.COLORS.GRAY_100}
                        value={newTaskDescription}
                        onChangeText={setNewTaskDescription}
                        onSubmitEditing={handleAddTask}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        isFocused={isFocused}
                    />

                    <ButtonFormShape>
                        <ButtonIcon
                            icon="add-circle-outline"
                            size={28}
                            color={theme.COLORS.GRAY_100}
                            onPress={handleAddTask}
                        />
                    </ButtonFormShape>
                </Form>

                <FilterOptions>
                    <Filter
                        title={"Criadas"}
                        color={theme.COLORS.BLUE}
                        tasksCounter={tasksCreatedCount}
                    />

                    <Filter
                        title={"Concluídas"}
                        color={theme.COLORS.PURPLE}
                        tasksCounter={tasksCheckedCount}
                    />
                </FilterOptions>

                <TaskCardList>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <TaskCard
                                task={item}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <ListEmpty
                                message={"Você ainda não tem tarefas cadastradas"}
                                subtitle={"Crie tarefas e organize seus itens a fazer"}
                            />
                        )}
                    />
                </TaskCardList>
            </BottomSection>
        </Container>
    );
}
