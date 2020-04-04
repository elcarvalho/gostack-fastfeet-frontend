import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: '450px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 20,
    },
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useImperativeHandle(ref, () => ({
    handleOpenModal,
  }));

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      style={style}
    >
      {children}
    </ReactModal>
  );
};

export default forwardRef(Modal);
