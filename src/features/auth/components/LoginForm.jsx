import { useContext, useState } from 'react';
import  InputLabel  from '../../../shared/components/InputLabel';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
export const LoginForm = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            await login(formData);
            navigate('/two-factor');
        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    };
    
    return (
        <Form onSubmit={handleSubmit}>
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
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className='btn btn-danger'>Acceder</button>
                <br />
            </div>
        </Form>
    );
    };
