import { Footer } from "../../../shared/ui/components/Footer";
import { Header } from "../../../shared/ui/components/Header";
import { CartDetails } from "../../cart/components/CartDetails";
import { ContactForm } from "../components/ContactForm";
export const ContactPage = () => {
    return (
        <>
        <div>
            <CartDetails/>
            <Header />
            <div className="contact">
                <div className="container">
                    <div>
                        <h1 className="text-center">Contactanos</h1>
                        <p>Rellena el formulario para contactarnos y te responderemos lo mas pronto posible!</p>
                        <br />
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}