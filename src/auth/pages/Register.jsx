import { NavLink } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div>
            <div>
                <img src="" alt="slogan" />
            </div>
            <div>
                <h1>Register</h1>
                <RegisterForm />
                <p> ya tienes cuenta? <NavLink to={'../login'}>Inicia sesión</NavLink></p>
            </div>
        </div>
    );
}
export default RegisterPage;