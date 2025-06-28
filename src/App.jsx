import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import Salary from './pages/SalaryPage/Salary';
import Login from './components/LoginPage/Login/Login';
import ReclutadorPage from './pages/ReclutadorPage/ReclutadorPage';
import SignUp from './components/SignUpPage/SignUp';
import PerfilPro from './pages/ProfesionPage/PerfilPro';
import Articulo1 from './pages/ProfesionPage/Articulos/Articulo1/Articulo1';
import Articulo2 from './pages/ProfesionPage/Articulos/Articulo2/Articulo2';
import Articulo3 from './pages/ProfesionPage/Articulos/Articulo3/Articulo3';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Salary" element={<Salary />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/reclutador" element={<ReclutadorPage />} />
        <Route path="/Articulo1" element={<Articulo1 />} />
        <Route path="/Articulo2" element={<Articulo2 />} />
        <Route path="/Articulo3" element={<Articulo3 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PerfilPro" element={<PerfilPro />} />
        <Route path="/administrador" element={<AdminPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
