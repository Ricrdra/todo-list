import React from 'react';

function TodoHeader({children, loading}) {
    //Convert the children to an array
    const childClone = React.Children.toArray(children);


    return (
        <header className="flex flex-col justify-center items-center">
            {childClone.map(child => {
                //For each children, we set the loading state with the value given to the father component
                //In this way, some children can have the same prop and just its declared once
                return React.cloneElement(child, {

                    loading: loading
                });

            })

            }
        </header>
    );
}

export default TodoHeader;