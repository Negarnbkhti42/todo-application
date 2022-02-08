import CardList from '../components/CardList';
import { list } from '../components/work_list';
import './App.scss';

function App() {
  return (
    <CardList list={list} />
  );
}

export default App;
