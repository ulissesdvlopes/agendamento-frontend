import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </div>
  );
}

export default App;
