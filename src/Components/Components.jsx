import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


export default function Components() {
    // 1) tell react about the routes (registering routes)
    return (<Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
    </Router>
    );
}