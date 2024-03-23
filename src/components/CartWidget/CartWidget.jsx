import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";

// <div style={{marginLeft: 'auto'}}>
//     <a href="#"><img src="/carrito.png" alt="icono del carrito de compras" /></a>
// </div>

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    
      <div className="h-25">
        <BiCart size={28} />
        <strong> {totalItems} </strong>
      </div>

  )
}