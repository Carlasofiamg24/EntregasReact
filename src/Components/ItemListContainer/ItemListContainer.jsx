import React from "react";

const ItemListContainer = ( props ) => {
    return(
        <div className="container">
            <p className="d-flex justify-content-center text-danger">{props.greeting}</p>
        </div>
    )
};

export default ItemListContainer;