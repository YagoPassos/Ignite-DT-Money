import { FormEvent, ReactNode, useState } from 'react';
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
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    console.log({
      title,
      category,
      type,
      value
    })
  }

  return (
    <Container onSubmit={handleCreateNewTransaction}>
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
          <input placeholder='Title' type="text" value={title} onChange={ event => setTitle(event.target.value)}/>
          <input placeholder='Value' type="number" value={value} onChange={ event => setValue(Number(event.target.value))} />

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
          <input placeholder='Category' value={category} onChange={ event => setCategory(event.target.value)}/>

          <button type='submit'>
            Register
          </button>

        </Container>
      </Modal>
    </Container>
  );
};

export default NewTransactionModal;
