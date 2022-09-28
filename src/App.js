import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Planes/Plans';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top: '10%',left:'0%'}}></div>
      <div className='blur' style={{top: '140%',left:'0%'}}></div>
      <div className='blur' style={{top: '270%',left:'0%'}}></div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
