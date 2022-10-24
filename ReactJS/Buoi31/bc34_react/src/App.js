import './App.css';
import BaiTapLayOut from './component/demo_layout/BaiTapLayOut';
import DemoComponent from './component/demobuoimot/DemoComponent';
import DemoState from './component/demoState/DemoState';
import BaiTapCar from './component/bt_car_basic/BaiTapCar';
import BaiTapMovie from './component/bt_car_basic/BaiTapMovie';


function App() {
  return (
    <div className='App'>
        {/* <DemoComponent /> */}
        {/* <BaiTapLayOut /> */}
        {/* <DemoState /> */}
        {/* <BaiTapCar /> */}
        <BaiTapMovie />
    </div>
  );
}

export default App;
