import './App.css';
import Mainpage from './Mainpage';
import {Route,Routes} from 'react-router-dom';
import Mealinfo from './Mealinfo';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Mainpage />}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
    </>
  )
}

export default App;
