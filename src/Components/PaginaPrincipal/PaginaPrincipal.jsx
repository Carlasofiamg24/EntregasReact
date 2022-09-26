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
        <div className="container-fluid">
            <div className="card text-dark pb-3">
                <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_1680/public/PURINA-PROPLAN-BANNER-3-HOME.png?itok=nBa0N5et" className="card-img" alt="Donde encontrarnos" width={'100%'} height={'100%'} />
                <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_600/public/Pro-Plan-veterinary-diets%20%282%29.png?itok=X4VoxkLY" className="card-img" alt="Donde encontrarnos" width={'100%'} height={'100%'} />
                <div className="card-img-overlay">
                    <h5 className="card-title text-center">Nuestros Productos</h5>
                    <p className="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat animi, dolores commodi odio blanditiis id ipsa laudantium, sequi expedita quidem incidunt, dicta libero dolorum non beatae esse dignissimos? Dolorem.</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default PaginaPrincipal;