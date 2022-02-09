import CardList from '../components/CardList';
import { list } from '../components/work_list';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';

function App() {
  return (
    list ? <CardList list={list} /> :
    <div className='emptyList_logo'>
      <img src={logo} alt='to do list' />
    </div>
  );
}

export default App;
