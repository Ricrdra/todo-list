import React from 'react';

function CreateTodoButton() {
    const onClickButton = () => {
    };

    return (
        <button id="createTodo"
                className="bg-white rounded-3xl px-2 py-2 h-auto my-5 transition ease-in-out hover:scale-110 hover:bg-blue-400"
                onClick={onClickButton}>

            <span className="">Create Todo</span>
        </button>
    );
}

export default CreateTodoButton;