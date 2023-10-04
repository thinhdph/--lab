import './App.css';
import Header from './components/header';
import  Footer  from './components/footer';
import Main from './components/main';
import Contact from './components/contact';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
<Route path='/src/components/contact.js' element={<Contact/>}/>
{/* <Route path='' element={<Contact/>}/>
<Route path='' element={<Contact/>}/> */}
    </Routes>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
