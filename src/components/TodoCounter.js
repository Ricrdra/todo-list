import React from 'react';


function TodoCounter({total, completed}) {
    return (
        <h2 className="todo_counter text-white my-5 text-3xl font-bold">You have
            completed {completed} of {total} tasks</h2>
    );
}

export default TodoCounter;