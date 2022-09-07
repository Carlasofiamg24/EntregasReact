import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ( props ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Royal Mini Adult", "descripcion":"Alimento para perros adultos de talla pequeña (peso adulto hasta 10 kg). De 10 meses a 8 años de edad.", "image":"https://cdn.royalcanin-weshare-online.io/1j8-73ABRYZmsWpck2u6/v9/ar-l-producto-mini-adult-size-health-nutrition-seco?w=250&", "precio":5500},
            {"id":2, "nombre":"Royal Medium Adult 7+", "descripcion":"Alimento para perros maduros de talla mediana (de 11 a 25 kg). Desde los 7 a los 10 años de edad.", "image":"https://cdn.royalcanin-weshare-online.io/Tud7qXIBaPOZra8qInUU/v11/ar-l-producto-medium-adult7-size-health-nutrition-seco?w=250&", "precio":7680},
            {"id":3, "nombre":"Royal Mini Puppy", "descripcion":"Alimento para perros cachorros de talla pequeña (peso adulto menor a 10 kg). De los 2 hasta los 10 meses.", "image":"https://cdn.royalcanin-weshare-online.io/p36m92wBGYYl5D-lqC_7/v2/ar-l-producto-mini-puppy-size-health-nutrition-seco?w=250&", "precio":9200},
            {"id":4, "nombre":"Adulto Razas Grandes", "descripcion":"Provee nutrición de avanzada que ayuda a los perros de razas grandes a mantenerse fuertes y llenos de vitalidad.", "image":"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_product_carousel_regular/public/purina-pro-plan-flagship-perros-adult-razas-grandes.png?itok=pkYiAI9L", "precio":10320},
            {"id":5, "nombre":"Puppy Razas Medianas", "descripcion":"Vitaminas y minerales esenciales, Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento.", "image":"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_product_carousel_regular/public/purina-pro-plan-flagship-perros-puppy-razas-medianas.png?itok=xZEh6YaO", "precio":13510},
            {"id":6, "nombre":"Gato Adulto", "descripcion":"Es una tecnología exclusiva, con una combinación de prebióticos y antioxidantes naturales. Alimento completo.", "image":"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_product_carousel_regular/public/purina-pro-plan-gatos-adult_0.png?itok=Kssc1X5z", "precio":17500}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return(
        <div className="container">
            <p className="d-flex justify-content-center text-danger">{props.greeting}</p>
            <ItemList items={items} />
           <ItemCount stock={5} initial={1} onAdd={0}  />
        </div>
    )
};

export default ItemListContainer;