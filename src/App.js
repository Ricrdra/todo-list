import React from 'react';
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

// import './App.css';

const todos = [
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
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.key} text={todo.text} onComplete={todo.onComplete}
                              completed={todo.completed}/>
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>

    );
}

export default App;
