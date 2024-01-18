import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState({ show: false, children: null});
    const toggleShowModal = ({children}) => {
        setShowModal({ show: !showModal.show, children: children});
    }

    return (
        <ModalContext.Provider value={{ showModal, toggleShowModal }}>
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
};