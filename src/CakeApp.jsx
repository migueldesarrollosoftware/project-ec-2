import AppRouter from './routes/AppRouter'; 
import './shared/sass/style.scss';
import { ModalProvider } from './contexts/ModalProvider';
import { CartProvider } from './contexts/CartProvider';
import { Modal } from './shared/components/Modal';
import { AuthProvider } from './contexts/AuthProvider';
function CakeApp() {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <Modal />
          <AppRouter />
        </ModalProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default CakeApp
