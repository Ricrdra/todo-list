import React from 'react';

function TodoList(props) {
    return (
        <div className="w-11/12 xl:w-1/2 mt-5">
            <p className="text-3xl text-white mb-2 text-center font-bold">Todo List</p>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(props.empty && !props.loading) && props.onEmptyTodos()}
            {(props.searchedTodos.length === 0 && !props.empty) && props.onEmptySearch()}
            <ul id="todo-list" className="flex flex-col space-y-4">
                {!props.loading && props.searchedTodos.map(
                    props.children
                )}
            </ul>
        </div>
    );
}

export default TodoList;

