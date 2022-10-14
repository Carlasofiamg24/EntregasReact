import React from "react";

const ImgPelu = ({item}) =>{
    return(

        <div className="card">
                <img src={item.imagen} alt={item.titulo} style={{width:200, height:280}}  />
        </div>
        
    )
};


export default ImgPelu;