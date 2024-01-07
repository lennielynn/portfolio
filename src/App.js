import Home from './components/Home';
// import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/aboutme' element={<AboutMe/>}/> */}
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
