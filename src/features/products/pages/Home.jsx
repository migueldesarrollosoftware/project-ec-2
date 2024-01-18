import { Product } from "../components/Product"
// import { Modal } from "../../../shared/components/Modal"
import { Header } from "../../../shared/ui/components/Header"
import { CartDetails } from "../../cart/components/CartDetails"
import { Footer } from "../../../shared/ui/components/Footer"
import InputLabel from "../../../shared/components/InputLabel"
import {Form} from "react-bootstrap"
import { useState, useEffect } from "react"
// import { Select } from "../../../shared/components/Select"
import producstInData  from "../../../database/products.json"

export const HomePage = () => {

    
    const [producst, setProducts] = useState([]);
    const [allProducts, setAllProducts]  = useState([]);
    useEffect(() => {
        setProducts(producstInData);
        setAllProducts(producstInData);
    }
    , []);

    const productosFilter = (value) => {
        console.log(value);
        const p = allProducts.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
        console.log('filtrado',p);
        setProducts(p);
    }

    const handleChangeSearch = (e) => {
        productosFilter(e.target.value);
    }

    
   

    const productsEmpty = () => {
        return producst.length === 0;
    }
    


    return (
        <>
            <CartDetails/>
            <Header/>
            <div className="offers">        
                <section className="container text-center">
                    <h1>Ofertas</h1>
                </section>
                <section className="container products ">
                    <div className="container p-4">
                        <div className="filters row">
                            <div className="col-8">
                                <InputLabel
                                    label="Buscador"
                                    type="text"
                                    placeholder="Busca algo que te guste"
                                    className="form-control"
                                    name="search"
                                    id="search"
                                    onChange={handleChangeSearch}
                                    
                                />
                            </div>
                            <div className="col-4">
                                <Form.Select aria-label="Selecciona" onChange={()=>{console.log('ha cambiado')}}>
                                    <option>Selecciona una opcion </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <div className="products-list my-4">
                        <div className="container-fluid">
                            <div className="row">
                                { productsEmpty() ? <><div className="text-center no-items">Producto no encontrado, intenta con otro nombre!</div></> : producst.map((product) => {
                                    return (<div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12"><Product product={product}/></div>)
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}