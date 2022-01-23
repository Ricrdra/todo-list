import React from 'react';


function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');


    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        const todoList = document.getElementById('todo-list');

        for (const child of todoList.children) {
            if (child.textContent.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
                child.style.display = 'none';
            } else {
                child.style.display = 'block';
            }
        }
        console.log(e.target.value);
    }
    return [
        <div className="text-white">
            <input type="text"
                   className="placeholder-amber-50 px-3 py-1 outline-none rounded-xl  shadow-2xl bg-blue-300 text-white"
                   placeholder="Search" value={searchValue}
                   onChange={onSearchValueChange}/>
        </div>,
        <p className="text-white my-5">{searchValue}</p>,
    ];
}

export default TodoSearch;

