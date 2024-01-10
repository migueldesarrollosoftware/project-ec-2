import { useState } from 'react';

export const LoginForm = () => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(formData);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => onFormChange(e)}
            placeholder='Email'
        />
        <label htmlFor="password">Password</label>
        <input
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => onFormChange(e)}
            placeholder='Password'
        />
        <button type="submit">Submit</button>
        </form>
    );
    };
