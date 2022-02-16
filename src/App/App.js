import CardList from '../components/CardList';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';
import Navbar from '../components/Navbar';
import { useList, useListActions } from '../components/providers/ListProvider';
import Modal from '../components/Modal';
import TodoForm from '../components/TodoForm';
import { CLEAR_FORM, useForm, useFormActions } from '../components/providers/FormProvider';
import { CLOSE_MODAL, useModalActions } from '../components/providers/ModalProvider';

function App() {
  const list = useList();
  const { id, title, description, isAdding } = useForm();
  const dispatchList = useListActions();
  const dispatchForm = useFormActions();
  const dispatchModal = useModalActions();

  const addNewTodo = (event) => {
    event.preventDefault();

    if (isAdding) {
      dispatchList({
        type: 'addItem',
        payload: {
          id: list.length,
          title,
          description
        }
      });
    } else {
      dispatchList({
        type: 'updateItem',
        payload: {
          id,
          title,
          description
        }
      })
    }

    dispatchForm({ type: CLEAR_FORM });
    dispatchModal({ type: CLOSE_MODAL });
  }

  return (
    <>
      <Navbar />
      <main className='main'>
        {list ? <CardList /> :
          <div className='emptyList_logo'>
            <img src={logo} alt='to do list' />
          </div>}
      </main>
      <Modal><TodoForm onSubmit={addNewTodo} /></Modal>
    </>
  );
}

export default App;
