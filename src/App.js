import ScrollBtn from 'components/ScrollBtn/ScrollBtn';
import Additional from 'components/additional/Additional';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
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
        {/* <ScrollBtn /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/us' element={<Us />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/additional' element={<Additional />} />
        </Routes>
        <ScrollBtn />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
