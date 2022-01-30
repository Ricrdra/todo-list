import React from 'react';
import {useTodos} from '../customHooks/useTodos';
import TodoHeader from "./TodoHeader";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import CreateTodoModal from "./CreateTodoModal";

function App() {

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
        setCreating,

    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            </TodoHeader>
            <TodoList
                onError={() => <p>And error has occurred, sorry</p>}
                onLoading={() => <p className="text-white font-bold text-center text-xl">Loading...</p>}
                onEmptyTodos={() => <p className='text-white font-bold text-center'>Create your first todo!</p>}
                onEmptySearch={() => <p className='text-white font-bold text-center'> No results
                    for <b className="text-green-300">{searchValue}</b></p>}
                error={error}
                loading={loading}
                empty={totalTodos === 0}
                searchedTodos={searchedTodos}
            >
                {todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.text}
                        completeTodo={() => completeTodo(todo.text)}
                        deleteTodo={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>
            <CreateTodoButton creating={creating} setCreating={setCreating}/>
            <CreateTodoModal creating={creating} setCreating={setCreating} addTodo={addTodo}/>
        </React.Fragment>);
}

export default App;