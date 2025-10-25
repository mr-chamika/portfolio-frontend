import './App.css'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Learnet from './Pages/Learnet'
import BookWorm from './Pages/BookWorm'
import UniHelp from './Pages/UniHelp';
import Ecommerce from './Pages/Ecommerce';

function App() {

  return (

    <BrowserRouter>

      <AppWrapper />

    </BrowserRouter>

  )
}

const AppWrapper = () => {

  const location = useLocation();

  return (
    <>

      {!(location.pathname == '/') && <Navbar />}

      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/learnet' element={<Learnet />} />
        <Route path='/home/bookworm' element={<BookWorm />} />
        <Route path='/home/unihelp' element={<UniHelp />} />
        <Route path='/home/ecommerce' element={<Ecommerce />} />

      </Routes>
    </>
  );

}

export default App
