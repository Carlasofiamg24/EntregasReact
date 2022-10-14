import { collection,getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ImageListPelu from "./ImageListPelu";


const Peluqeria = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const imagenesPeluqueria = collection(db, 'imagenes-peluqueria');
        
        getDocs(imagenesPeluqueria).then((res)=>{
            const images = res.docs.map((image)=>{
                return{
                    id: image.id,
                    ...image.data()
                }
            })
            setItems(images);
        })

    }, [])

    return(
       <div>
        <ImageListPelu items={items} />
       </div> 
    )
};

export default Peluqeria;