import React from 'react';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import {TodoContext} from "../TodoContext/TodoContext";

import Modal from "./Modal";
import CreateTodoModal from "./CreateTodoModal";

function AppUI() {

    const {error, loading, searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {error && <p>And error has occurred, sorry</p>}

                {loading && <p className="text-white font-bold text-center text-xl">Loading...</p>}

                {(!loading && !searchedTodos.length) &&
                    <p className='text-white font-bold text-center'>Create your first todo!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem todo={todo} key={todo.key} completeTodo={() => completeTodo(todo.key)}
                              deleteTodo={() => deleteTodo(todo.key)}/>
                ))}
            </TodoList>
            <CreateTodoModal/>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};

