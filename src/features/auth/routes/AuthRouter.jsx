import { Route, Routes } from 'react-router-dom';
import {Login,Register,TwoFactor} from '../pages/index';
import { AuthLayout } from '../layout/AuthLayout';
import { NotFoundPage } from '../../../shared/public/pages/NotFound';
const addLayout = ({child}) => {
    return (
        <div className='auth'>
            <AuthLayout>
                {child}
            </AuthLayout>
        </div>
    )
}
const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={addLayout({child: <Login/>})} />
            <Route path="/register" element={addLayout({child: <Register/>})} />
            <Route path="/two-factor" element={addLayout({child: <TwoFactor/>})} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
};

export default AuthRouter;