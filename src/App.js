import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import {BrowserRouter,Routes ,Route,Link} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <Link to='/about'>about</Link>
    <br/>
    <Link to='/profile'>Profile</Link>
    <br/>
    <Routes>
        <Route element={<About/>} path='/about' />
        <Route element={<Profile/>} path='/profile' />
        <Route element={<About/>} path='/hello' />
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
