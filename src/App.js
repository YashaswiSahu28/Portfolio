import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar/></div>
      <div className='min-h-screen'>
        <div className='absolute'>
          <Main/>
        </div>
          <div className='relative'>
            <About/>
          </div>
        
      </div>
      
      <div className='flex flex-col relative bg-white'>
        <Overview/>  
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
