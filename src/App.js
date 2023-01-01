import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'

function App() {
 
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<About/>} path='/about' />
        <Route element={<Profile/>} path='profile' />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
