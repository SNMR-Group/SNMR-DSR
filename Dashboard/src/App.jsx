import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from "@mui/material/Box";
import NavbarWithSidebar from "./components/Navbar/NavbarWithSidebar";
import DashBoard from "./pages/DashBoard";
import AddMaterials from "./features/AddMaterial";

function App() {
  return (
    <Router>
      <NavbarWithSidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add-materials" element={<AddMaterials />} />
          </Routes>
        </Box>
      </NavbarWithSidebar>
    </Router>
  );
}

export default App;