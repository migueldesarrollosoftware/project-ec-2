import { LoginForm } from "../components/LoginForm";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
    return (
        <div>
            <div>
                <img src="" alt="slogan" />
            </div>
            <div>
                <h1>Login</h1>
                <LoginForm />
                <p> No tienes cuenta? <NavLink to={'../register'}>Registrate</NavLink></p>
            </div>
        </div>
    );
}
export default LoginPage;