import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../CartContext/CartContext'
import Success from '../Success/Success';


const Checkout = () => {
    const { cart, deleteAll, precioTotal , totalUnidades} = useContext(CartContext);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = {name:nombre, email:email, phone:telefono, direccion:direccion};

            const items = [];
            cart.forEach(item => {
                items.push({id:item.id, title:item.title, price:item.price, stock:item.stock});
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items:items, date:now, total:precioTotal()};
            
            const db = getFirestore();
            const orderCollection =  collection(db, "pedidos-petShop");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                deleteAll();
            });
        }
    }

    return (
        <div className="container py-5">
            {totalUnidades() > 0 ?
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div className="mb-2">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label for="telefono" className="form-label">Direccion</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setDireccion(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => {sendOrder()}}>Generar Orden</button>
                </div>
                <div className="col-md-2">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.img} alt={item.title} title={item.title} width="120" /></td>
                                    <td className="text-start align-middle">{item.title}</td>
                                    <td className="text-end align-middle">X {item.cantidad}</td>
                                    <td className="text-end align-middle">${item.cantidad * item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                <td className="text-end fw-bold">${precioTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <Success id={orderId} direccion={direccion} /> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Checkout;