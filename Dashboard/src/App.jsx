// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppThemeProvider from './ThemeProvider';
import NavbarWithSidebar from './components/Navbar/NavbarWithSidebar';
import Dashboard from './pages/Dashboard';
import DSRForm from './features/DSRForm';
import DSRTable from './features/DSRTable';

function App() {
  return (
    <Router>
      <AppThemeProvider>
        <NavbarWithSidebar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dsr/add-dsr" element={<DSRForm />} />
            <Route path="/dsr/dsr-table" element={<DSRTable />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </NavbarWithSidebar>
      </AppThemeProvider>
    </Router>
  );
}

export default App;