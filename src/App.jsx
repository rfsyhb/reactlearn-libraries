import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FormLearn from './pages/formik/FormLearn';
import TanstackQueryLearn from './pages/tanstack-query/basic-fetch/TanstackQueryLearn';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<FormLearn />} />
        <Route path="/tanstackquerylearn" element={<TanstackQueryLearn />} />
      </Routes>
    </div>
  );
}


export default App;
