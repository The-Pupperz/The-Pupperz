import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Support from './components/Support';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className=' w-full h-screen bg-[#040F16]'>
      <Nav />
      <Home />
      <Profile />
    </div>

  );
}

export default App;
