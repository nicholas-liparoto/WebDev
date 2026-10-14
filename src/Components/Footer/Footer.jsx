import { Link } from "react-router-dom";

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
            </ul>
        </nav>
    </footer>
)

export default Footer;