import { getFirestore, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const categoriasCollection = collection(db,'categorias')
          
        getDocs(categoriasCollection).then((res)=>{
          const categorias = res.docs.map((cat)=>{
                return{
                    id: cat.id,
                    ...cat.data()
                }
            })
            setCat(categorias);
        })
    }, [])
    
    return(
        <ul className="nav justify-content-center">
           <li className="nav-item">
                <NavLink className="nav-link active text-dark" to='/'>INICIO</NavLink>
            </li>
            {
                cat.map((categ)=><li className="nav-item" key={categ.id}>
                <NavLink className="nav-link text-dark" to={`/categoria/${categ.path}`}>{categ.name}</NavLink></li>
                )
            }
            <li className="nav-item">
                <CartWidget />
            </li>
        </ul>
    )
};

export default NavBar;

          