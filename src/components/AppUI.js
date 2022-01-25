import React from 'react';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";

function AppUI({totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}) {
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

export {AppUI};

