import {useNavigate,Link} from 'react-router-dom'
import './Header.css';
import logo from '../../assets/logo-version-final.webp';


function Header() {
    const navigate = useNavigate()
    const repeatCount = 8;
    const message = `<i class="bi bi-telephone"></i>&nbsp;Toll Free : +91 9281111733 &nbsp; | &nbsp; <i class="bi bi-envelope"></i>&nbsp;Email : info@hopatlas.com`;

    const scrollingText = Array(repeatCount).fill(message).join(' &nbsp; ');

        const handleLogin = () =>{
            navigate('/LoginForm')

        }

        const handleRegister = () =>{
            navigate('/RegisterForm')
        }


    return (
        <header className="header-fixed">
            <div className="header-top">
                <marquee direction="left" scrollamount="15" loop="infinite">
                    <span dangerouslySetInnerHTML={{ __html: scrollingText }} />
                </marquee>
            </div>
            <div className="header-nav">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="menu">
                    <a href="/">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div className="auth-buttons">
                    <button className="login" onClick={handleLogin}>Login</button>
                    <button className="register" onClick={handleRegister}>Register</button>
                    <button className="guest">Continue as Guest</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
