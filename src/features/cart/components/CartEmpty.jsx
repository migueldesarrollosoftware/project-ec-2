// import { NavLink } from "react-router-dom";
import { ImConfused2 } from "react-icons/im";
export const CartEmpty = () => {
    return (
        <div className="container w-100 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <ImConfused2 />
                <h2>Tu carro se encuentra vacio</h2>
                <p>!te esperamos en la tienda!</p>
                {/* <NavLink to={'../'} className="btn">Continuar comprando</NavLink> */}
            </div>
        </div>
    );
};