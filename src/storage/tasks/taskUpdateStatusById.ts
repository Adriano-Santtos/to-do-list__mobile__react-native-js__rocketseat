import AsyncStorage from "@react-native-async-storage/async-storage";

import {taskGetAll} from "@storage/tasks/taskGetAll";

import {TASK_COLLECTION} from "@storage/storageConfig";

export async function taskUpdateStatusById(taskId: string) {
    try {
        const storedTasks = await taskGetAll()

        const index = storedTasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            storedTasks[index].isChecked = !storedTasks[index].isChecked
        }

        await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify([...storedTasks]));
    } catch (error) {
        throw error;
    }
}
