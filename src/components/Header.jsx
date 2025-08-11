import { LOGO_URL } from './Constant';
// filepath: c:\Users\Amit\OneDrive\Desktop\foodweb\foodweb\src\components\Header.jsx

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
