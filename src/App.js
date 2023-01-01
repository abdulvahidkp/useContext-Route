import { useState } from 'react';
import './App.css';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  const [state, setState] = useState('')
  let component;
  if(state === 'about'){
    component = <About />
  }
  if(state === 'profile') {
    component = <Profile />
  }
  return (
    <div className="App">
      <button onClick={()=>setState('about')}>about</button>
      <button onClick={()=>setState('profile')}>Profile</button>
      {component}
        
    </div>
  );
}

export default App;
