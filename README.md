<h1 align="center">Todo | react-native-js</h1>

<div align="center" id="top"> 
  <img src="./src/assets/print.png" alt="print"/>

&#xa0;

</div>

## :dart: About ##

The ToDo List is a mobile application developed during the React Native formation of [Rocketseat](https://rocketseat.com.br/).

The application is a basic ToDo list.

## :rocket: Technologies ##

The following tools were used in this project:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Diagram ##
```mermaid
    sequenceDiagram
        actor User
        participant App as React Native App
        participant HomeScreen as Home Screen
        participant TaskScreen as Task Screen
        participant StatusBar as StatusBar Component
        participant TaskList as Task List Component
        participant TaskItem as Task Item Component
        participant AddTaskButton as Add Task Button Component
        participant Storage as Storage Service
    
        User ->> App: Launch App
        App ->> Storage: Load Initial Data
        Storage -->> App: Initial Data Loaded
        App ->> HomeScreen: Render Home Screen
        HomeScreen ->> StatusBar: Render StatusBar
        HomeScreen ->> TaskList: Render Task List
        TaskList ->> TaskItem: Render Task Item
        HomeScreen ->> AddTaskButton: Render Add Task Button
        AddTaskButton -->> User: Button Rendered
        User ->> AddTaskButton: Click Add Task Button
        AddTaskButton -->> User: Button Clicked
        HomeScreen ->> TaskScreen: Navigate to Task Screen
        TaskScreen ->> StatusBar: Render StatusBar
        StatusBar -->> TaskScreen: StatusBar Rendered
        User ->> TaskScreen: Save Task
        TaskScreen ->> Storage: Save Task to Storage
        Storage -->> TaskScreen: Task Saved in Storage
        TaskScreen -->> User: Task Saved
        TaskScreen ->> HomeScreen: Navigate back to Home Screen
        HomeScreen ->> StatusBar: Update StatusBar
        StatusBar -->> HomeScreen: StatusBar Updated
        HomeScreen ->> TaskList: Update Task List
        TaskList ->> TaskItem: Update Task Item
        TaskItem -->> TaskList: Task Item Updated
        TaskList ->> Storage: Update Task List in Storage
        Storage -->> TaskList: Task List Updated in Storage
        TaskList -->> HomeScreen: Task List Updated
        HomeScreen -->> User: Home Screen Updated
```

Made by <a href="https://github.com/Adriano-Santtos" target="_blank">Adriano Santtos</a>

&#xa0;

<a href="#top">Back to top</a>
