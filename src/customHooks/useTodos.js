import React from 'react';
import useLocalStorage from "./useLocalStorage";

let defTodos = [
    {
        key: 1,
        text: 'Learn RunTodo',
        completed: true,
    },
    {
        key: 2,
        text: 'Create new Todos',
        completed: false,
    },

];

function useTodos() {
    const {
        items: todos,
        saveItem: saveTodos,
        loading,
        error,
        sync,
        setSync
    } = useLocalStorage('TODOS_V1', defTodos);


    const [searchValue, setSearchValue] = React.useState('');

    const [creating, setCreating] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;


    const completeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.text === key);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);

    };

    const deleteTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.text === key);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }


    const addTodo = (text) => {
        const newTodo = {
            key: todos.length + 1,
            text,
            completed: false,
        };
        const newTodos = [...todos, newTodo];
        saveTodos(newTodos);
        setCreating(false);
    };


    let searchedTodos = [];

    if (searchValue.length <= 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }


    return {
        loading,
        todos,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        completeTodo,
        deleteTodo,
        searchedTodos,
        error,
        creating,
        setCreating,
        addTodo
    };
}

export {useTodos};