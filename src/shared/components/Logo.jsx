import logopng from '../assets/images/logo.png';
const Logo = () => {
    return (
        <div className="px-5 d-flex justify-content-center align-items-center ">
            <img src={logopng} alt="logo" className="img-fluid logo"/>
        </div>
    );
}
export default Logo;