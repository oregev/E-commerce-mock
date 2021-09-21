// Modal
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '300px',
    height: '200px',
  },
};

interface Props {
  isOpen: boolean;
  text: string | null;
  closeFunction: () => void;
}

export const GenericModal = ({ isOpen, text, closeFunction }: Props): JSX.Element => (
  <Modal isOpen={isOpen} style={customStyles}>
    <h3>{text}</h3>
    <button type="button" onClick={closeFunction}>
      close
    </button>
  </Modal>
);
