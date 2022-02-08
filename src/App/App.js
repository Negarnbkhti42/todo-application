import Card from '../components/Card';
import { list } from '../components/work_list';
import './App.scss';

function App() {
  return (
    <div>
    {
      list.map(item => <Card key={item.id} {...item} />)
    }
    </div>
  );
}

export default App;
