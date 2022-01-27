import React from 'react';
import {TodoContext} from "../TodoContext/TodoContext";


function TodoCounter({totalTodos, completedTodos}) {


    const text = totalTodos === completedTodos ? 'You don\'t have tasks, Awesome!' : `You have completed ${completedTodos} of ${totalTodos} task`;
    return (
        <h2 className="todo_counter text-white my-5 text-3xl font-bold">
            {text}

        </h2>
    );
}

export default TodoCounter;