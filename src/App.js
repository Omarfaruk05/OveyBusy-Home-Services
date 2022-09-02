import './App.css';
import {Routes, Route} from 'react-router-dom'
import CareerFuideline from './components/CareerFuideline';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CareerFuideline></CareerFuideline>}></Route>
        <Route path='category/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
