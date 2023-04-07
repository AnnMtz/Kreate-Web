// import logo from './logo.svg';
// import './App.css';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Us from 'components/us/Us';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="container">
        <Header />
        <Routes>
          <Route path='/us' element={<Us />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
         {/* <Us />    */}
      </div>
    </Router>
  );
}

export default App;
