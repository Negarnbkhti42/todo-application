import CardList from '../components/CardList';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';
import Navbar from '../components/Navbar';
import { useList, useListActions } from '../components/ListProvider';
import Modal from '../components/Modal';
import TodoForm from '../components/TodoForm';
import { useState } from 'react';

function App() {
  const list = useList();
  const dispatch = useListActions();
  const [isOpen, setIsOpen] = useState(true);

  const addNewTodo = (event, title, description) => {
    event.preventDefault();
    setIsOpen(false);
    dispatch({
      type: 'addItem',
      payload: {
        id: list.length,
        title,
        description,
        completed: false
      }
    });
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
      <Modal title='hi' open={isOpen} onClose={() => setIsOpen(false)}><TodoForm onSubmit={addNewTodo} /></Modal>
    </>
  );
}

export default App;
