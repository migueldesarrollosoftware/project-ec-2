// import ImageFluid from "../../../shared/components/ImageFluid";
import Logo from "../../../shared/components/Logo";
import { NavLink } from "react-router-dom";
import { TwoFactorForm } from "../components/TwoFactorForm";
const TwoFactor = () => {
    return (
        <div className="card p-5">  
                <Logo />
            <div >
                <h1 className="text-center">Auth two factor</h1>
                <TwoFactorForm />
                <br />
                <p> No he recibido el codigo? <NavLink to={'../login'}>Regresar</NavLink></p>
            </div>
        </div>
    );
}
export default TwoFactor;