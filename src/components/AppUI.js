import React from 'react';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import {TodoContext} from "../TodoContext/TodoContext";

import Modal from "./Modal";
import CreateTodoModal from "./CreateTodoModal";
import TodoHeader from "./TodoHeader";

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        completedTodos,
        setSearchValue,
        searchValue,
        addTodo,
        creating,
        setCreating
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </TodoHeader>

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


            <CreateTodoButton creating={creating} setCreating={setCreating}/>

            <CreateTodoModal creating={creating} setCreating={setCreating} addTodo={addTodo}/>
        </React.Fragment>
    );
}

export {AppUI};

