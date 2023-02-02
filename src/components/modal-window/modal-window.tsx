import React, { useContext } from 'react';
import Modal from 'react-modal';
import { StoreProviderContext } from 'components/store/store-provider';

Modal.setAppElement('#root');

const ModalWindow = () => {
  const context = useContext(StoreProviderContext);
  const { modalIsOpen, closeModal, modalWindowContent } = context;

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button
          className="button button_colored"
          onClick={closeModal}
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            top: '0px',
            right: '0px',
            fontSize: '3rem',
            boxShadow: 'none',
            borderRadius: '0px 4px 0px 4px',
          }}
        >
          ✗
        </button>
        <div>{modalWindowContent}</div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
