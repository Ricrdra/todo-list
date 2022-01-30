import React from 'react';
import Modal from './Modal';
import {TodoContext} from '../customHooks/useTodos';
import CreateTodoButton from "./CreateTodoButton";

function CreateTodoModal({creating, setCreating, addTodo}) {


    const onClickButton = () => {
        const text = document.getElementById('newTodo').value;
        addTodo(text);
    };

    return (
        <Modal>
            <div id="modal-container"
                 className={`${creating ? 'block' : 'hidden'} top-0 left-0 absolute bg-gray-900/[0.4]  w-screen h-screen  z-10`}>
                <div className={`absolute top-1/4 lg:left-1/3 bg-white lg:w-1/3 lg:h-3/6  shadow-white shadow-sm rounded-xl
                w-11/12 h-11/12 left-5 
                `}>
                    <span onClick={() => setCreating(false)}
                          className="absolute -left-2 -top-2 bg-deny icon-clickable bg-contain bg-center bg-no-repeat overflow-visible"/>
                    <div className="flex flex-col justify-center items-center space-y-4 h-full">
                        <p className="text-xl text-black font-bold mt-2">Create a new Todo!</p>
                        <textarea id="newTodo" cols="26" rows="6"
                                  className="border-2 border-gray-600 rounded-xl px-4 py-2 focus:outline-none"
                                  placeholder="What do you have to do?"/>

                        <button id="createTodo"
                                className="bg-blue-600 rounded-3xl text-gray-50  px-2 py-2 h-auto my-5 transition ease-in-out hover:scale-110 hover:bg-blue-400"
                                onClick={() => onClickButton()}>

                            <span className="">Create Todo</span>
                        </button>

                    </div>
                </div>
            </div>

        </Modal>
    )
        ;
}


export default CreateTodoModal;