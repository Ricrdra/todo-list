import React from 'react';
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

// import './App.css';

let defTodos = [
    {
        key: 1,
        text: 'Learn React',
        completed: true,
        onComplete: () => {
            this.completed = true;
        }
    },
    {
        key: 2,
        text: 'Learn Redux',
        completed: false

        , onComplete: () => {
            this.completed = true;
        }
    },
    {
        key: 3,
        text: 'Learn React Router',
        completed: false, onComplete: () => {
            this.completed = true;
        }

    },
    {
        key: 4,
        text: 'Learn React Redux',
        completed: false, onComplete: () => {
            this.completed = true;
        }

    },
    {
        key: 5,
        text: 'Learn React Router Redux',
        completed: false, onComplete: () => {
            this.completed = true;
        }

    },
    {
        key: 6,
        text: 'Learn Node.js',
        completed: true,
        onComplete: () => {
            this.completed = true;
        }

    }
];

function App() {
    const [todos, setTodos] = React.useState(defTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;


    const completeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.key === key);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }


    let searchedTodos = [];

    if (searchValue.length <= 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }


    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem todo={todo} key={todo.key} completeTodo={() => completeTodo(todo.key)}

                              deleteTodo={() => deleteTodo(todo.key)}/>
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>

    );
}

export default App;
