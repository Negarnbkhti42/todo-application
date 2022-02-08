import Card from '../components/Card';
import { list } from '../components/work_list';
import './App.scss';

function App() {
  return (
    <div className='list-container'>
    {
      list.map(item => <Card key={item.id} className="list_card" {...item} />)
    }
    </div>
  );
}

export default App;
