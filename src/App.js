import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className='bg-white '>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
