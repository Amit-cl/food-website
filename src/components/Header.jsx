import { LOGO_URL } from './Constant';
import { Link } from 'react-router-dom';
// filepath: c:\Users\Amit\OneDrive\Desktop\foodweb\foodweb\src\components\Header.jsx

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                   <li><Link to="/">
                       Home
                    </Link>
                    </li>
                    <li><Link to="/About">
                        About 
                    </Link>
                    </li>
                    <li><Link to="Contact">
                        Contact Us
                    </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
