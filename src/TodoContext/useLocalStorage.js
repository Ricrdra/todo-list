import React from "react";

function useLocalStorage(itemName, defaultValue = []) {
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState(defaultValue);
    const [error, setError] = React.useState(false);
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
                setItems(parsedItems);
                setLoading(false);
            } catch (e) {
                setError(true);
            }


        }, 1000);
    },);


    const saveItem = (newItems) => {
        const stringifyItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifyItems);
        setItems(newItems);
    }

    return {
        items,
        saveItem,
        loading,
        error
    };
}


export default useLocalStorage;
