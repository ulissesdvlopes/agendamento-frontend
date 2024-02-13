import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router';
import { AuthProvider } from './contexts/AuthContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
