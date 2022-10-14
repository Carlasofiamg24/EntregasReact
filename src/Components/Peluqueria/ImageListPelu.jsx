import React from "react";
import ImgPelu from "./ImgPelu";

const ImageListPelu = ({items}) => {
    return(
        <div className="containerCard">
            {items.map(item =>{
                return <ul key={item.id}><ImgPelu key={items.id} item={item}/></ul>
            })}

        </div>
    )
};

export default ImageListPelu;