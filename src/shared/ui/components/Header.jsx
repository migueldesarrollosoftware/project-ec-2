import { NavLink } from "react-router-dom"
import { BsCartCheckFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { RiTeamFill,RiMessage3Fill } from "react-icons/ri";
import Logo  from "../../components/Logo"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
import { IoLogIn, IoLogOut } from "react-icons/io5";
export const Header = () => {
    const navigate = useNavigate();
    const {user,logout,isAuthenticated} = useContext(AuthContext);
    const {getTotalItemsAdded, toggleShowCart} = useContext(CartContext)
    console.log(user)
    const showCart = () => {
         console.log('show cart')
         toggleShowCart()
    }
    const onLogout = () => {
        logout();
        navigate('/login')
    }
    const countCartItems = getTotalItemsAdded();
    return (
        <>
            <div className="d-flex justify-content-around align-items-center p-1 my-2">
                <Logo/>
                <div className="navigator d-flex align-items-center flex-column flex-md-row">
                    <div className="nav__pages d-flex align-items-center flex-column flex-md-row ">
                        <NavLink to={'../'} className={'mx-4 text-danger navigator'} ><FaHome /> Inicio</NavLink>
                        <NavLink to={'../about'} className={'mx-4 text-danger navigator'} ><RiTeamFill /> Nosotros</NavLink>
                        <NavLink to={'../contact'} className={'mx-4 text-danger navigator'} ><RiMessage3Fill /> Contacto</NavLink>
                        {isAuthenticated  ? <><button className="btn text-danger" onClick={onLogout}><IoLogOut /> Logout</button></> : <NavLink to={'../login'} className={'mx-4 text-danger navigator'} ><IoLogIn /> Login</NavLink>}
                        {isAuthenticated  ? <>{user.email}</>: <></>}
                    </div>
                    <div className="nav__cart -flex align-items-center mx-4">
                        <button onClick={showCart} className="btn border-1 border-danger">
                            <BsCartCheckFill className="text-danger"/> {countCartItems > 0 ? <div className="inline-block">{countCartItems}  </div>: null	 }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
