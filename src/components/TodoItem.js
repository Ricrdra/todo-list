import React from 'react';

function TodoItem({todo, completeTodo, deleteTodo}) {

    return (
        <li className="bg-white shadow-2xl text-gray-700 py-5 px-5 transition hover:translate-y-1 hover:scale-105 ease-in relative overflow-visible">
            <span
                className="absolute -top-5 left-3 icon-clickable bg-cover bg-deny"
                onClick={deleteTodo}
            />
            <p className={`${todo.completed && `line-through`} ${!todo.completed && `no-underline`} `}>{todo.text}
            </p>

            <span
                className={`${todo.completed ? `grayscale-0 hover` : `grayscale`} hover:grayscale-[50%] absolute -top-3 right-2 icon-clickable bg-accept bg-cover`}
                onClick={completeTodo}
            />
        </li>
    );
}

export default TodoItem;
