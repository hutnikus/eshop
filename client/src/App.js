import Navigation from './components/Navigation';
import About from './pages/About'
import Catalog from './pages/Catalog'
import Landing from './pages/Landing'
import Detail from './pages/Detail'
import background from './background.jpeg';
import {
  Routes,
  Route
} from 'react-router-dom';


function App() {


  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        marginLeft: '150px',
        marginRight: '150px',
        height: '100vh'
      }}>
        <Navigation className="nav" />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Catalog' element={<Catalog />} />
          <Route path='/About' element={<About />} />
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
