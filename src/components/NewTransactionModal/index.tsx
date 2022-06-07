import { ReactNode } from 'react';
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TrasactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >

        <button
          type='button'
          onClick={onRequestClose}
          className='react-modal-close'>
          <img src={closeImg} alt="close Modal" />
        </button>
        <Container>
          <h2>Register Trasaction</h2>
          <input placeholder='Title' type="text" />
          <input placeholder='Value' type="number" />

          <TrasactionTypeContainer>
            <button type='button'>
              <img src={incomeImg} alt="" />
              <span>Income</span>
            </button>

            <button type='button'>
              <img src={outcomeImg} alt="" />
              <span>Outcome</span>
            </button>
        
          </TrasactionTypeContainer>
          <input placeholder='Category' />

          <button type='submit'>
            Register
          </button>

        </Container>
      </Modal>
    </Container>
  );
};

export default NewTransactionModal;
