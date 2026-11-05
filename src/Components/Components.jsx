import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


export default function Components() {
    // 1) tell react about the routes (registering routes)
    return (<Router>
        <Routes>
            <Route path="/" element={<ProtectedRoute element={<Home/>} />} />
            <Route path="/about" element={<ProtectedRoute element={<About/>} />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
        <Footer/>
    </Router>
    );
}