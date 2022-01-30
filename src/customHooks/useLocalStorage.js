import React from "react";

function useLocalStorage(itemName, defaultValue = [], withSync = true) {

    const [sync, setSync] = React.useState(false)
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState(defaultValue);
    const [error, setError] = React.useState(false);

    if (withSync) {
        window.addEventListener("storage", (change) => {

            if (change.key === itemName) {
                setSync(sync + 1);
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
                setItems(parsedItems);
                setLoading(false);
            } catch (e) {
                setError(true);
            }
        }, 0);
    }, [sync]);


    const saveItem = (newItems) => {
        const stringifyItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifyItems);
        setItems(newItems);
    }

    return {
        items,
        saveItem,
        loading,
        error,
        sync,
        setSync
    };
}


export default useLocalStorage;
