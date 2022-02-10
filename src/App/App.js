import CardList from '../components/CardList';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';
import Navbar from '../components/Navbar';
import { useList } from '../components/ListProvider';
import Modal from '../components/Modal';

function App() {
  const list = useList();

  return (
    <>
      <Navbar />
      <main className='main'>
        {list ? <CardList /> :
          <div className='emptyList_logo'>
            <img src={logo} alt='to do list' />
          </div>}
      </main>
      <Modal title='hi' open={true}></Modal>
    </>
  );
}

export default App;
