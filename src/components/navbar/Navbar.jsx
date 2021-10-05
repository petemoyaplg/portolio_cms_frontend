import { BrowserRouter as Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-brand">Cloudinary Demo</div>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link to="/">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/upload">Upload</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
