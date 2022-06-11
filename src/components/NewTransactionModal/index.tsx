import { FormEvent, ReactNode, useContext, useState } from 'react';
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TrasactionTypeContainer } from './styles';
import { api } from '../../services/api';
import { useTransaction } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const {createTransaction} = useTransaction()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type      
    })

    setAmount(0);
    setCategory('');
    setTitle('');
    setCategory('deposit');
    onRequestClose();
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
          <input placeholder='Value' type="number" value={amount} onChange={ event => setAmount(Number(event.target.value))} />

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
