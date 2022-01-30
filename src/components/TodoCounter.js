import React from 'react';


function TodoCounter({totalTodos, completedTodos, loading}) {


    let text = totalTodos === completedTodos ? 'You don\'t have tasks, Awesome!' : `You have completed ${completedTodos} of ${totalTodos} task`;
    text = loading ? 'Waiting for tasks...' : text;

    return (
        <h2 className="todo_counter text-white my-5 text-3xl font-bold text-center">
            {text}
        </h2>
    );
}

export default TodoCounter;