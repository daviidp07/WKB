import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage/Main';
import Salary from './components/SalaryPage/Salary';
import Login from './components/LoginPage/Login';
import Page4 from './components/UserPage/Reclutador/Page4';
import SignUp from './components/SignUpPage/SignUp';
import PerfilPro from './components/PerfilProf/PerfilPro';
import Articulo1 from './components/PerfilProf/Articulos/Articulo1/Articulo1';
import Articulo2 from './components/PerfilProf/Articulos/Articulo2/Articulo2';
import Articulo3 from './components/PerfilProf/Articulos/Articulo3/Articulo3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Salary" element={<Salary />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Articulo1" element={<Articulo1 />} />
        <Route path="/Articulo2" element={<Articulo2 />} />
        <Route path="/Articulo3" element={<Articulo3 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PerfilPro" element={<PerfilPro />} />
      </Routes>
    </Router>
  );
}

export default App;
