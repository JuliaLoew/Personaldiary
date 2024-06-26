import './index.css';
import Diaries from './components/Diaries.jsx';
import Adddiarybtn from './components/Adddiarybtn.jsx';


const App = () => {
  return (
  <> 
  <div className='text-2xl text-red-500 '>Personal Diary</div>
  <button className="btn-secondary">Secondary</button>
  <Diaries />
  </> )
};

export default App;
