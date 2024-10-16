import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import FormLearn from './components/FormLearn';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-bg text-text">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<FormLearn />} />
      </Routes>
    </div>
  );
}

export default App;
