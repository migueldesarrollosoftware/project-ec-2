import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AuthService from '../features/auth/services/AuthService';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInProgress, setIsInProgress] = useState(false);

    const login = async ({email, password}) => {
        try {
            setIsInProgress(true);
            const result = await AuthService.login({email, password})
            console.log(result);
            localStorage.setItem('token', result.token);
            setUser({email, password});
            setIsAuthenticated(true);
            setIsInProgress(false);
        } catch (error) {
            console.log('Error al iniciar sesión');
            setIsInProgress(false);
            setIsAuthenticated(false);
            setUser({});
            throw new Error('Error al iniciar sesión');
        }
    };

    const signup = async ({email, password, name}) => {
        try {
            setIsInProgress(true);
            await AuthService.signup({email, password,name}); 
            setIsInProgress(false);
        }catch (error) {
            console.log('Error al registrar usuario');
            setIsInProgress(false);
            throw new Error('Error al registrar usuario');
        }
    }
    
    const logout = () => {
        console.log('logout');
        localStorage.removeItem('token');
        setUser({});
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, signup, logout, isInProgress}}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

