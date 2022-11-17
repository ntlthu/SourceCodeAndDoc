import './App.css';
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
import SignUp from './components/quan_ly_user/SignUp';
import InfoUser from './components/quan_ly_user/InfoUser';
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import AdminComponent from './components/AdminComponent';

function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>

        <Routes>
          <Route path='/' element={<Header />}>
            <Route index path='/' element={<DemoUseState />} />

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

            {/*  quản lý user */}
            <Route path='/demologin' element={<DemoLogin />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/info' element={<InfoUser />} />

            <Route path='*' element={<DemoLogin />} />
          </Route>
          <Route path='/' element={<AdminComponent />} >
            <Route path='/admin/danhsachgiay' element={<DanhSachGiay />} />

          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;