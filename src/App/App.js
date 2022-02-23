import CardList from '../components/CardList';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';
import Navbar from '../components/Navbar';
import { useList } from '../components/providers/ListProvider';
import { useEffect } from 'react';

function App() {
  const list = useList();

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);


  return (
    <>
      <Navbar />
      <main className='main'>
        {list.length ? <CardList /> :
          <div className='emptyList_logo'>
            <img src={logo} alt='to do list' />
          </div>}
      </main>
    </>
  );
}

export default App;
