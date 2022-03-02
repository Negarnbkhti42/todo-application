import CardList from '../components/CardList';
import logo from './undraw_to_do_re_jaef.svg';
import './App.scss';
import Navbar from '../components/Navbar';
import { useList } from '../components/providers/ListProvider';
import { useTheme } from '../components/providers/ThemeProvider';
import { useEffect } from 'react';

function App() {
  const list = useList();
  const { isLight } = useTheme();

  useEffect(() => {
    document.body.style.background = isLight ? "none" : "#1a1a1a";
  }, [isLight]);


  return (
    <>
      <Navbar />
      <main className={`main ${isLight ? "" : "main-dark"}`}>
        {list.length ? <CardList /> :
          <div className='emptyList_logo'>
            <img src={logo} alt='no todo' />
          </div>}
      </main>
    </>
  );
}

export default App;
