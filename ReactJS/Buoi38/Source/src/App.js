import './App.css';
import BaiTapLayOut from './component/demo_layout/BaiTapLayOut';
import DemoComponent from './component/demobuoimot/DemoComponent';
import DemoState from './component/demoState/DemoState';
import BaiTapCar from './component/bt_car_basic/BaiTapCar';
import BaiTapMovie from './component/bt_car_basic/BaiTapMovie';
import DemoProps from './component/demo_props/DemoProps';
// import TrangChuSanPham from './component/bt_phone/TrangChuSanPham';
import DemoRedux from './component/demoRedux/DemoRedux';
import TrangChuSanPham from './component/bt_phone_redux/TrangChuSanPham';
import BaiTapXucXac from './component/bt_xucxac/BaiTapXucXac';
import BaiTapQuanLyNguoiDung from './component/bt_quanlynguoidung/BaiTapQuanLyNguoiDung';
import ChaComponent from './component/lifecycle/ChaComponent';
import DemoApi from './component/demo_axios/DemoApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoRouter from './component/DemoRouter';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <DemoRouter />

        <Routes>
          <Route path='/xucxac' element={<BaiTapXucXac />} />
          <Route path='/demo' element={<DemoApi />} />
          <Route path='/quanly' element={<BaiTapQuanLyNguoiDung />} />

          <Route path='*' element={<DemoComponent />} />
          <Route path='/' element={<BaiTapCar />} />
        </Routes>
      </BrowserRouter>

      {/* <DemoComponent /> */}
      {/* <BaiTapLayOut /> */}
      {/* <DemoState /> */}
      {/* <BaiTapCar /> */}
      {/* <BaiTapMovie /> */}
      {/* <DemoProps /> */}
      {/* <TrangChuSanPham /> */}
      {/* <DemoRedux /> */}
      {/* <BaiTapXucXac /> */}
      {/* <BaiTapQuanLyNguoiDung /> */}
      {/* <ChaComponent  /> */}
      {/* <DemoApi /> */}
    </div>
  );
}

export default App;
