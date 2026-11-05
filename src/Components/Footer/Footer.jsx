import { Link } from "react-router-dom";
import { logoutUser } from "../Auth/AuthService.jsx";

const Footer = () => (
    <footer>
        <nav>
            <br />
            <hr />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Add Customers</Link>
                </li>
                    <Link to="/auth" onClick={logoutUser}>Logout</Link>
            </ul>
        </nav>
    </footer>
)

export default Footer;