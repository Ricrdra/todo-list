import React from 'react';
import {TodoContext} from "../customHooks/useTodos";


function TodoSearch({searchValue, setSearchValue, loading}) {

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div className="text-white">
            <input type="text"

                   disabled={loading}

                   className={`placeholder-amber-50 px-3 py-1 outline-none rounded-xl  shadow-violet-300 shadow-sm bg-blue-300 text-white border border-white
                   transition focus:scale-125 hover:scale-105 ${loading && 'opacity-50'}`}
                   placeholder="Search" value={searchValue}
                   onChange={onSearchValueChange}/>
        </div>
    );
}

export default TodoSearch;

