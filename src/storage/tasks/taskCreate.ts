import AsyncStorage from "@react-native-async-storage/async-storage";

import {TasksStorageDTO} from "@storage/tasks/TasksStorageDTO";

import {TASK_COLLECTION} from "@storage/storageConfig";
import {taskGetAll} from "@storage/tasks/taskGetAll";


export async function taskCreate(newTask: TasksStorageDTO) {
    try {
        const storedTask = await taskGetAll()


            await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify([...storedTask, newTask]));
    } catch (error) {
        throw error;
    }
}
