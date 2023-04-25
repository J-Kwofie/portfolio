import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
