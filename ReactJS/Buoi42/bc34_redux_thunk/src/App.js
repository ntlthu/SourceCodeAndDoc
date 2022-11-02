import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import DemoUseState from './components/DemoUseState';
import UseEffect from './components/UseEffect';
import UseCallback from './components/demo_usecallback/UseCallback';
import UseRef from './components/UseRef';
import DemoRedux from './components/demo_redux/DemoRedux';
import ChatApp from './components/demo_redux/ChatApp';
import DanhSachGiay from './components/demo_redux_thunk/DanhSachGiay';
import ChiTietGiay from './components/shop_giay/ChiTietGiay';
import DemoCustomHook from './components/DemoCustomHook';
import DemoLogin from './components/demo_login/DemoLogin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <Routes>
          {/* nơi định nghĩa những đường dẫn để trỏ tới đúng component */}
          <Route path='/usestate' element={<DemoUseState />} />
          <Route path='/useeffect' element={<UseEffect />} />
          <Route path='/usecallback' element={<UseCallback />} />
          <Route path='/useref' element={<UseRef />} />
          <Route path='/demoredux' element={<DemoRedux />} />
          <Route path='/chatapp' element={<ChatApp />} />
          <Route path='/danhsachgiay' element={<DanhSachGiay />} />
          <Route path='/chitietgiay/:id' element={<ChiTietGiay />} />
          <Route path='/democustom' element={<DemoCustomHook />} />
          <Route path='/demologin' element={<DemoLogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
