import React from 'react';


function TodoCounter({total, completed}) {
    const text = total === completed ? 'You don\'t have tasks, Awesome!' : `You have completed ${completed} of ${total} task`;
    return (
        <h2 className="todo_counter text-white my-5 text-3xl font-bold">
            {text}

        </h2>
    );
}

export default TodoCounter;