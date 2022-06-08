import { ReactNode, useState } from 'react';
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TrasactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')


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
            <RadioBox type='button'
              onClick={() => {setType('deposit')}}
              isActive={type == 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="" />
              <span>Income</span>
            </RadioBox>

            <RadioBox type='button'
              onClick={() => {setType('withdraw')}}
              isActive={type =='withdraw'}
              activeColor="red"

            >
              <img src={outcomeImg} alt="" />
              <span>Outcome</span>
            </RadioBox>

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
