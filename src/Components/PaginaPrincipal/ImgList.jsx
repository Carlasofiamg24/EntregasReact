import React from "react";
import Images from "./Images";

const ImgList = ({items}) => {
    return(
        <div className="container">
            <div className="row">
            {items.map((item)=>{
                return <div className="col-md-12 d-flex justiy-content-center" key={item.id}><Images key={item.id} item={item} /></div>
            })}
            </div>
        </div>
    )
};

export default ImgList;