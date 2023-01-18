import Navigation from './components/Navigation';
import About from './pages/About'
import Catalog from './pages/Catalog'
import Landing from './pages/Landing'
import Detail from './pages/Detail'

import {
  Routes,
  Route
} from 'react-router-dom';


function App() {


  return (
    <div>
      <Navigation />
      <div className='core'>
        <Routes>
          <Route path='/' element=<Landing /> />
          <Route path='/Catalog' element=<Catalog /> />
          <Route path='/About' element=<About /> />
          <Route path='/Detail' element=<Detail /> />
        </Routes>
      </div>
    </div>
  );
}

export default App;
