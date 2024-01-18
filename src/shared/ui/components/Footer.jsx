import Logo from "../../components/Logo";

export const Footer = () => {

    return (
     <>
     <footer>
        <div className="gotop">
            <a href="#" className="btn text-white my-1">Regresar</a>
        </div>
            <div className="d-flex justify-content-around align-items-center mx-3 h-75">
                <div>
                    {/* <div className="d-flex justify-content-center"> */}
                        <div className="bg-white rounded"> <Logo/></div>
                    {/* </div> */}
                    <p>
                        &copy; 2023, Todos los derechos reservados <br />
                        <strong>
                            Loves Cakes by July
                        </strong>
                    </p>
                </div>
                <div>
                    <div className="text-center">Siguenos en:</div>
                    <ul className="mt-2">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Whatsapp</a></li>
                        <li><a href="#">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     </>   
   );

}
    