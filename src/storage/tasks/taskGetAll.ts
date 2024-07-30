import AsyncStorage from '@react-native-async-storage/async-storage';

import {TasksStorageDTO} from "@storage/tasks/TasksStorageDTO";

import {TASK_COLLECTION} from "@storage/storageConfig";

export async function taskGetAll() {
    try {
        const stored = await AsyncStorage.getItem(TASK_COLLECTION);

        const storedTasks: TasksStorageDTO[] = stored ? JSON.parse(stored) : [];

        console.log("O que está salvo:", storedTasks);

        // await AsyncStorage.clear()

        return storedTasks
    } catch (error) {
        throw error;
    }
}

