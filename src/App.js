import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNav from "./components/navbar/MainNav"
import Home from "./components/home/Home"
import NotFound from"./components/notfound/NotFound"
import Footer from "./components/footer/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route index element={<Home/>} />
          
          <Route path='/' >
           <Route path=":notfound" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
