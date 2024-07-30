import {taskGetAll} from "@storage/tasks/taskGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TASK_COLLECTION} from "@storage/storageConfig";

export async function taskDeleteById(taskId: string) {
    try {
        const storedTasks = await taskGetAll()

        console.log("=====|||||=====|||||=====|||||=====|||||=====|||||")

        console.log("Como era: ", storedTasks)

        const index = storedTasks.findIndex(item => item.id = taskId)

        if (index !== -1) {
            storedTasks.splice(index, 1)
        }

        const listToBeSaved = storedTasks

        console.log("Como ficou: ", listToBeSaved)
        console.log("=====|||||=====|||||=====|||||=====|||||=====|||||")

        await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify([...listToBeSaved]));

    } catch (error) {
        console.error(error);
    }

}



