import React, { useEffect } from "react";
import { useState } from "react";
import { imagenesInicio } from "./ImagenesInicio";
import ImgList from "./ImgList";


const PaginaPrincipal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = () => 
            new Promise ((res) => {
                res(imagenesInicio)
            });

        getImages()
        .then((data)=> {
            setImages(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    return(
        <div>
        <ImgList items={images}/>
        </div>
    )
};

export default PaginaPrincipal;