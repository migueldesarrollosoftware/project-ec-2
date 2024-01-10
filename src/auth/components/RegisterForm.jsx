import { useState } from 'react';

export const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
        console.log(formData);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => onFormChange(e)}
            placeholder='Name'
        />
        <label htmlFor="lastName">Last Name</label>
        <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => onFormChange(e)}
            placeholder='Last Name'
        />
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
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
            name="repeatPassword"
            type="password"
            value={formData.repeatPassword}
            onChange={(e) => onFormChange(e)}
            placeholder='Repeat Password'
        />
        </form>
    );
    };
