import PropTypes from 'prop-types';
import ImageContainer from '../../../shared/components/ImageContainer';
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartProvider';
export const CartItemCard = ({Item}) => {
    const {name, price, quantity, path} = Item;
    const {removeFromCart} = useContext(CartContext);
    const handleRemoveOne = () => {
        console.log('remove one');
        removeFromCart(Item.id);
    }
    return (
        <>
            <div className="cart-item-card m-1">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className=''> 
                        <ImageContainer imageUrl={path} altText={name} height='100px' width='150px'/>
                    </div>
                    <div className="mx-1">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Cantidad: {quantity}</p>
                    </div>
                    <button className='btn' onClick={handleRemoveOne}><FaTrashAlt /></button>
                </div>
            </div>
        </>
    );
};

CartItemCard.propTypes = {
      Item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,  
    }).isRequired,
};

export default CartItemCard;