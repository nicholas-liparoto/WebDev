import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Auth from "./Auth/Auth.jsx";
import AuthRegister from "./Auth/AuthRegister.jsx";
import AuthLogin from "./Auth/AuthLogin.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";


export default function Components() {
    // 1) tell react about the routes (registering routes)
    return (<Router>
        <Routes>
            <Route path="/auth" element={<Auth/>} />
            <Route path="/auth/register" element={<AuthRegister/>} />
            <Route path="/auth/login" element={<AuthLogin/>} />
            <Route path="/" element={<ProtectedRoute element={Home} />} />
            <Route path="/about" element={<ProtectedRoute element={About} />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
        <Footer/>
    </Router>
    );
}