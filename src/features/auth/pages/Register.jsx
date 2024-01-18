import { NavLink } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import Logo from "../../../shared/components/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
const RegisterPage = () => {
    const {isInProgress} = useContext(AuthContext);
    return (
        <>
        { isInProgress ? <>Estamos evaluando sus datos..</> : <div className="card p-5">  
                <Logo />
            <div>
                <h1 className="text-center">Register</h1>
                <RegisterForm />
                <br />
                <p> ya tienes cuenta? <NavLink to={'../login'}>Inicia sesión</NavLink></p>
            </div>
        </div>}
        </>
    );
}
export default RegisterPage;