import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../../utils/auth';
import Logo from '../../../assets/logo/logotree2.svg'
import LogoName from '../../../assets/logo/logotree3.svg'
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        if (isAuthenticated()) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };
    
    return (
        <>
            <div className="header">
                <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                    <img src={Logo} alt="Tech Tree Logo"/>
                    {/* <div className="logo-text">SMART FARM</div> */}
                    <img src={LogoName} alt="SMART FARM"/>
                </div>
                
                <nav className="nav-bar">
                    <ul className="nav-links">
                        <li><a onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>Home</a></li>
                        <li><a onClick={() => navigate('/about')} style={{cursor: 'pointer'}}>About</a></li>
                        <li><a onClick={handleDashboardClick} style={{cursor: 'pointer'}}>Dashboard</a></li>
                    </ul>
                </nav>
                
                <button className="sign-in-btn" onClick={() => navigate('/login')}>Sign In</button>
            </div>
        </>
    )
}

export default Header;