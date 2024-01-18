
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalProvider'; // Import the ModalContext

export const Modal = () => {
    const {showModal, toggleShowModal} =  useContext(ModalContext);
    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal')) {
            toggleShowModal('');
        }
    };
    return (
        <div className={`modal ${showModal.show ? 'd-block' : 'd-none'}`} onClick={handleModalClick} >
            <div className='modal__content'>
                {showModal.children}
            </div>
        </div>
    );
}