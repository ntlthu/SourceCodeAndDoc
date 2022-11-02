import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import DemoUseState from './components/DemoUseState';
import UseEffect from './components/UseEffect';
import UseCallback from './components/demo_usecallback/UseCallback';

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
