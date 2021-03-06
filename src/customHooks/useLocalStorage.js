import React from "react";

const actions = {
    error: "ERROR",
    changeItems: "CHANGE_ITEMS",
    increaseCount: "INCREASE_COUNT",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.changeItems:
            return {...state, items: action.payload, loading: false};
        case actions.error:
            return {...state, error: true};
        case actions.increaseCount:
            return {...state, sync: state.sync + 1};
        default:
            console.error('Not action type found in reducer: useLocalStorage');
            throw state;
    }
}

const getInitialState = (defaultValue = []) => ({
    sync: false,
    loading: false,
    items: defaultValue,
    error: false
})


function useLocalStorage(itemName, defaultValue = [], withSync = true) {
    const initialState = getInitialState(defaultValue);
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const {sync, loading, items, error} = state;
    if (withSync) {
        window.addEventListener("storage", (change) => {
            if (change.key === itemName) {
                dispatch({type: actions.increaseCount})
            }
        });
    }
    React.useEffect(() => {
        setTimeout(() => {
            try {

                const localStorageItem = localStorage.getItem(itemName);
                let parsedItems;


                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(defaultValue));
                    parsedItems = defaultValue;
                } else {
                    parsedItems = JSON.parse(localStorageItem);
                }
                dispatch({type: actions.changeItems, payload: parsedItems});
            } catch (e) {
                dispatch({type: actions.error});
            }
        }, 0);
    }, [sync]);


    const saveItem = (newItems) => {
        const stringifyItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifyItems);
        dispatch({type: actions.changeItems, payload: newItems});
    }

    return {
        items,
        saveItem,
        loading,
        error,
        sync,
    };
}


export default useLocalStorage;
