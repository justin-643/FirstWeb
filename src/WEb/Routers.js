import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Screen1 from './Home';
import Screen2 from './Form';
import Screen3 from './Login';
import Header from './Header';
import Footer from './Footer';
import Admin from './Admin';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoute'; // Import the PrivateRoute component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  return (
    <div>
      <Header />
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/Screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Use PrivateRoute for protected Admin route */}
          <Route path="/admin" element={<PrivateRoute isAuthenticated={isAuthenticated}><Admin /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
