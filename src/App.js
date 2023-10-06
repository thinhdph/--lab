import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail';
import Info from './components/info';
import Test from './components/test';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Main />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/info' element={<Test/>}/>
        <Route path='/*' element={<Main />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;
