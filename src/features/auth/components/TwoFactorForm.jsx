import { useState } from 'react';
import  InputLabel  from '../../../shared/components/InputLabel';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const TwoFactorForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
    });

    const onFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(formData);
        setFormData({
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
        });
        navigate('/');
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center align-items-center'>
                <InputLabel
                    type="text"
                    label=""
                    placeholder=""
                    name="one"
                    onChange={(e) => onFormChange(e)}
                    className={'m-1 text-center'}
                    value={formData.one}
                />
                <InputLabel
                    type="text"
                    label=""
                    placeholder=""
                    name="two"
                    onChange={(e) => onFormChange(e)}
                    className={'m-1 text-center'}
                    value={formData.two}
                />
                
                <InputLabel
                    type="text"
                    label=""
                    placeholder=""
                    name="three"
                    onChange={(e) => onFormChange(e)}
                    className={'m-1 text-center'}
                    value={formData.three}
                />
                <InputLabel
                    type="text"
                    label=""
                    placeholder=""
                    name="four"
                    onChange={(e) => onFormChange(e)}
                    className={'m-1 text-center'}
                    value={formData.four}
                />
                <InputLabel
                    type="text"
                    label=""
                    placeholder=""
                    name="five"
                    onChange={(e) => onFormChange(e)}
                    className={'m-1 text-center'}
                    value={formData.five}
                />
            </div>
            <br />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="submit" className='btn btn-danger'>Acceder</button>
                <br />
            </div>
        </Form>
    );
    };
