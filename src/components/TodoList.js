import React from 'react';

function TodoList(props) {
    return (
        <div className="w-11/12 xl:w-1/2 mt-5">
            <p className="text-3xl text-gray-300 text-center font-bold">Todo List</p>
            <ul id="todo-list" className="flex flex-col space-y-4">
                {props.children}
            </ul>
        </div>
    );
}

export default TodoList;

