import { Footer } from "../../../shared/ui/components/Footer";
import { Header } from "../../../shared/ui/components/Header";
import { CartDetails } from "../../cart/components/CartDetails";
import img1 from "../../../shared/assets/images/offers/pastel-1.jpg";
import img2 from "../../../shared/assets/images/offers/pastel-2.jpg";
import img3 from "../../../shared/assets/images/offers/pastel-3.jpg";
import ImageContainer from "../../../shared/components/ImageContainer";
export const AboutPage = () => {
    return (
        <>
        <div>
            <CartDetails/>
            <Header />
            <div className="about">
                <div className="">
                    <div className="about__img p-5">
                        {/* <div className="d-flex justify-content-center">
                            <div className="bg-white rounded"> <Logo/></div>
                        </div> */}
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="bg-dark2 p-3">
                            {/* <h1 className="text-center">Sobre nosotros</h1> */}
                            <p className="text-center">Somos una empresa dedicada a la pasteleria, con mas de 20 años de experiencia en el mercado.</p>
                            <p className="text-center">Nostros realizamos pasteles para cualquier tipo de evento, desde cumpleaños, bodas, bautizos, etc.</p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <ul className="about__imgs">
                                <div className="m-1 card shadow">
                                    <ImageContainer imageUrl={img1} altText="img1" height="300px" width="300px"/>
                                </div>
                                <div className="m-1 card shadow">
                                    <ImageContainer imageUrl={img2} altText="img1" height="300px" width="300px"/>
                                </div>
                                <div className="m-1 card shadow">
                                    <ImageContainer imageUrl={img3} altText="img1" height="300px" width="300px"/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}