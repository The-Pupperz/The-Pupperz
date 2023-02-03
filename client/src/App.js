import './App.css';
import Nav from './components/Nav';
import Support from './components/Support';
import Settings from './components/Settings';
import Footer from './components/Footer';


function App() {
  return (
    <div className=' w-full h-screen bg-[#040F16]'>
      <Nav />
      
      <Support />
      <Settings/>
      <Footer/>


    </div>

  );
}

export default App;
