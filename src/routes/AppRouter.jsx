import { Route, Routes } from 'react-router-dom';
// import LoginPage from '../features/auth/pages/Login';
// import RegisterPage from '../features/auth/pages/Register';
import AuthRouter from '../features/auth/routes/AuthRouter';
import { HomePage } from '../features/products/pages/Home';
// import { NotFoundPage } from '../shared/public/pages/NotFound';
import { AboutPage } from '../features/about/pages/About';
import { ContactPage } from '../features/contact/pages/Contact';

const AppRouter = () => {
        return (
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="contact" element={<ContactPage/>} />
                {/* <Route path="auth" element={<AuthRouter/>} /> */}
                {/* <Route path="register" element={<RegisterPage/>} /> */}
                {/* <Route path="not-found" element={<NotFoundPage/>} /> */}
                {/* <Route path="/*" element={<Navigate to={'not-found'} />} /> */}
                <Route path="/*" element={<AuthRouter/>} />
            </Routes>
        )
}
export default AppRouter;