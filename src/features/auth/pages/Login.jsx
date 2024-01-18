// import ImageFluid from "../../../shared/components/ImageFluid";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../shared/components/Logo";
import { LoginForm } from "../components/LoginForm";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
const LoginPage = () => {
    const {isInProgress} = useContext(AuthContext);
    return (
        <>
            { isInProgress ? <>Estamos evaluando sus datos..</> : <div className="card p-5">  
                <Logo />
            <div >
                <h1 className="text-center">Login</h1>
                <LoginForm />
                <br />
                <p> No tienes cuenta? <NavLink to={'../register'}>Registrate</NavLink></p>
            </div>
        </div>}
        </>
    );
}
export default LoginPage;