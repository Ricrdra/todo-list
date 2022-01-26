import React from 'react';
import {TodoContext} from "../TodoContext/TodoContext";


function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div className="text-white">
            <input type="text"
                   className="placeholder-amber-50 px-3 py-1 outline-none rounded-xl  shadow-violet-300 shadow-sm bg-blue-300 text-white border border-white
                   transition focus:scale-125 hover:scale-105"
                   placeholder="Search" value={searchValue}
                   onChange={onSearchValueChange}/>
        </div>
    );
}

export default TodoSearch;

