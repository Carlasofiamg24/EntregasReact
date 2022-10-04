import React, { useEffect } from "react";
import { useState } from "react";
import { imagenesInicio } from "./ImagenesInicio";
import ImgList from "./ImgList";


const PaginaPrincipal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = () => 
            new Promise ((res,rej) => {
                setTimeout(()=>{
                    res(imagenesInicio)
                },100)
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
        <>
        <ImgList items={images}/>
        </>
    )
};

export default PaginaPrincipal;