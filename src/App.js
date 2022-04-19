import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Checkout from './component/Checkout/Checkout';
import Home from './component/Home/Home';
import Footer from './component/Shared Component/Footer/Footer';
import Header from './component/Shared Component/Header/Header';
import Login from './component/User/Login/Login';
import Signup from './component/User/Signup/Signup';
import ReqAuth from './component/User/RequiredAuth/ReqAuth'
import PageNotFound from './component/PageNotFount/PageNotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout' element={
          <ReqAuth>
            <Checkout></Checkout>
          </ReqAuth>
        }>
         
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
