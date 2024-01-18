import { useState } from 'react';
import InputLabel  from '../../../shared/components/InputLabel';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useContext } from 'react';
export const RegisterForm = () => {
    const navigate = useNavigate();
    const {signup} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await signup({email: formData.email, password: formData.password, name: formData.name});
            setFormData({
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            });
            navigate('/login');
        } catch (error) {
            console.log(error);
            navigate('/register');
        }
    };
    
    return (
        <Form onSubmit={handleSubmit}>
                <InputLabel
                    type="text"
                    label="Name"
                    placeholder="Escribe tu nombre"
                    name="name"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-3'}
                    value={formData.name}
                />
                <InputLabel
                    type="email"
                    label="Email"
                    placeholder="Escribe tu email"
                    name="email"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-3'}
                    value={formData.email}
                />            
                <InputLabel
                    type="password"
                    label="Password"
                    placeholder="Escribe tu password"
                    name="password"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-3'}
                    value={formData.password}
                />
                <InputLabel
                    type="password"
                    label="Repeat Password"
                    placeholder="Repite tu password"
                    name="repeatPassword"
                    onChange={(e) => onFormChange(e)}
                    className={'mb-3'}
                    value={formData.repeatPassword}
                />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className='btn btn-danger'>Registrarme</button>
                <br />
            </div>
        </Form>
    );
    };
