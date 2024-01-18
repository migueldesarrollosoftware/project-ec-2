import PropTypes from 'prop-types';
import { MdAddShoppingCart } from "react-icons/md";
import { ModalContext } from '../../../contexts/ModalProvider';
import { CartContext } from '../../../contexts/CartProvider';
import { useContext } from 'react';
export const Product = ({ product }) => {
    const {addToCart} = useContext(CartContext)
    const {toggleShowModal} = useContext(ModalContext);
    const { id, name, price, path, description } = product;
    const showDetails = () => {
        console.log('show details', product);
        toggleShowModal({children: imgProduct()})
    }
    const imgProduct = () => {
        return (
            <img src={path} alt={name} className='img-fluid'/>
        )
    }
    const handleAddCart = () => {
        console.log('add cart', product);
        addToCart(product);
    }
    return (
        <div className="product m-2">
            <div className="card p-3">
                <div className='w-100 h-100 d-flex flex-column justify-content-between align-items-center'>
                    <div className="">
                        <button key={id} className='btn m-0 p-0' onClick={(e)=> showDetails(e)}>
                            <img src={path} alt={name} className='img-fluid'/>
                        </button>
                    </div>
                    <div className="product__info w-100">
                        <hr />
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <p>Nombre: </p>
                            <p>{name}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <p>Precio: </p>
                            <p className='text-danger'>${price}</p>
                        </div>
                        <div className='d-flex flex-column justify-content-between align-items-center w-100'>
                            <p>Descripcion: </p>
                            <p>{description}</p>
                        </div>
                        <br />
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <p></p>
                            <button className='btn btn-danger' onClick={handleAddCart}><MdAddShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};
