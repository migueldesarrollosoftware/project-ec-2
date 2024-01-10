import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../auth/pages/Login';
import RegisterPage from '../auth/pages/Register';
import { HomePage } from '../products/pages/Home';
import { NotFoundPage } from '../public/pages/NotFound';

const AppRouter = () => {
        return (
            <Routes>
                <Route path="home" element={<HomePage/>} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>} />
                <Route path="not-found" element={<NotFoundPage/>} />
                <Route path="/*" element={<Navigate to={'not-found'} />} />
            </Routes>
        )
}
export default AppRouter;