import { Modal, Overlay } from './Modal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ closeModal, user }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={user.name} />
          <label htmlFor="number">Number</label>
          <input type="text" id="number" name="number" value={user.number} />
          <button type="submit">Edit Contact</button>
        </form>
      </Modal>
    </Overlay>,
    modalRoot
  );
};
