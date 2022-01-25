import React from 'react';
import {AppUI} from './AppUI';

let defTodos = [
    {
        key: 1,
        text: 'Learn RunTodo',
        completed: true,
        onComplete: () => {
            this.completed = true;
        }
    },
    {
        key: 2,
        text: 'Create new Todos',
        completed: false

        , onComplete: () => {
            this.completed = true;
        }
    },

];


function useLocalStorage(itemName, defaultValue = []) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItems;


    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(defaultValue));
        parsedItems = defTodos;
    } else {
        parsedItems = JSON.parse(localStorageItem);
    }
    const [items, setItems] = React.useState(parsedItems);

    const saveItem = (newItems) => {
        const stringifyItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifyItems);
        setItems(newItems);
    }

    return [items,
        saveItem];
}


function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', defTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;


    const completeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);

    };

    const deleteTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }


    let searchedTodos = [];

    if (searchValue.length <= 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    React.useEffect(() => {
        console.log('Using efects')
    }, [totalTodos]);


    return (
        <AppUI
            todos={todos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            searchedTodos={searchedTodos}
        />
    );
}

export default App;
