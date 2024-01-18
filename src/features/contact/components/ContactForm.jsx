import  InputLabel  from '../../../shared/components/InputLabel';
import  {InputAreaLabel}  from '../../../shared/components/InputAreaLabel';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { FiSend } from "react-icons/fi";
export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        mensaje: '',
    });

    const onFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);  
        setFormData({
            name: '',
            email: '',
            phone: '',
            mensaje: '',
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
                <InputLabel
                    type="text"
                    label="Nombre"
                    placeholder=""
                    name="name"
                    onChange={(e) => onFormChange(e)}
                    value={formData.name}
                    className={'mb-1'}
                />
                <InputLabel
                    type="email"
                    label="Email"
                    placeholder=""
                    name="email"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-1'}
                    value={formData.email}
                />
                <InputLabel
                    type="number"
                    label="Telefono"
                    placeholder=""
                    name="phone"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-1'}
                    value={formData.phone}
                />        
                <InputAreaLabel
                    type="text"
                    label="Mensaje"
                    placeholder=""
                    name="mensaje"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-1'}
                    value={formData.mensaje}
                />
            <br />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className='btn btn-danger'><FiSend /> Enviar</button>
                <br />
            </div>
        </Form>
    );
    }