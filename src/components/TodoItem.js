import React from 'react';

function TodoItem(todo) {
    const onComplete = () => {
        todo.onComplete();
    };
    const onDelete = (e) => {
        e.preventDefault();
    }

    return (
        <li className="cursor-pointer bg-white shadow-2xl text-gray-700 py-5 px-5 transition hover:translate-y-1 hover:scale-110 ease-in-out ">

            <span
                className={`${todo.completed && `line-through`} ${!todo.completed && `no-underline`}`}>X</span>
            <p>{todo.text}</p>
        </li>
    );
}

export default TodoItem;
