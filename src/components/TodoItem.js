import React from 'react';

function TodoItem({todo, completeTodo, deleteTodo}) {

    return (
        <li className="bg-white shadow-2xl text-gray-700 py-5 px-5 transition hover:translate-y-1 hover:scale-105 ease-in relative">
            <span
                className="absolute -top-5 left-3 icon-clickable  bg-deny bg-contain bg-center bg-no-repeat overflow-visible"
                onClick={deleteTodo}
            />
            <p className={`${todo.completed && `line-through`} ${!todo.completed && `no-underline`} -z-10 `}>{todo.text}
            </p>

            <span
                className={`${todo.completed ? `grayscale-0 hover` : `grayscale`} hover:grayscale-[50%] absolute -top-3 right-2 icon-clickable overflow-visible bg-accept bg-contain bg-center bg-no-repeat `}
                onClick={completeTodo}
            />
        </li>
    );
}

export default TodoItem;
