import { Modal, Overlay } from './Modal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { EditorForm } from 'components/EditorForm/EditorForm';
import { editContacts } from 'redux/operations';

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
        <EditorForm
          action={editContacts}
          user={user}
          title="edit"
          closeModal={closeModal}
          buttonTitle="Edit Contact"
        />
      </Modal>
    </Overlay>,
    modalRoot
  );
};
