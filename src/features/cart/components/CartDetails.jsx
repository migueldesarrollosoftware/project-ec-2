import { CartEmpty } from "./CartEmpty";
import CartItemCard from "./CartItemCard";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartProvider";
export const CartDetails = () => {
    const {showCart, toggleShowCart, cart , getTotalPrice, getTotalItemsAdded} = useContext(CartContext);
    const productsInCart = cart;

    const isCartEmpty = productsInCart.length === 0;
    const handleOnClose = () => {
        console.log('close');
        toggleShowCart();
    }
    
    return (
        <div className={`cart overflow-scroll ${showCart ? 'show': 'hidden'}`}>
            <div className="container-fluid my-products d-flex flex-column justify-content-between  p-5">
                <div>
                    {isCartEmpty ? <CartEmpty /> : productsInCart.map((product) => {
                        return (<div key={product.id}><CartItemCard Item={product}/></div>);
                        })
                    }
                </div>
                <div>
                    {isCartEmpty ? <><br /></> : <><hr />
                    <div className="d-flex justify-content-between">
                        <p className="text-danger">Total products:</p> <p>{getTotalItemsAdded()}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total:</p> <p>{getTotalPrice()}</p>
                    </div>
                    <hr />
                    <br /></>}
                    
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={handleOnClose}> Cerrar </button>
                        { isCartEmpty ? null : <button className="btn btn-dark"> Comprar </button>}
                    </div>
                </div>
            </div>
        </div>
    );
}