import "./Sidebar.css";
import Logo from '../../../assets/logo/logotree2.svg';
import LogoName from '../../../assets/logo/logotree3.svg';
import { useNavigate } from 'react-router-dom';

function Sidebar () {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="logo" onClick={() => navigate('/')}>
                <img src={Logo} width="40%" height="40%" alt="icon" />
                <img src={LogoName} width="70%" alt="icon" />
            </div>

            <div className="menu-item active" onClick={() => navigate('/dashboard')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="#4CAF50" />
                </svg>
                <div className="menu-text">Dashboard</div>
            </div>

            {/* Keep the rest of the menu items as they are */}
            <div className="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L12 20" stroke="#333" strokeWidth="2" />
                    <path d="M12 4C14 7 17 8 20 8" stroke="#333" strokeWidth="2" />
                    <path d="M12 4C10 7 7 8 4 8" stroke="#333" strokeWidth="2" />
                    <path d="M12 12C14 15 17 16 20 16" stroke="#333" strokeWidth="2" />
                    <path d="M12 12C10 15 7 16 4 16" stroke="#333" strokeWidth="2" />
                </svg>
                <div className="menu-text">Device Configuration</div>
            </div>

            <div className="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6H20" stroke="#333" strokeWidth="2" />
                    <path d="M4 12H20" stroke="#333" strokeWidth="2" />
                    <path d="M4 18H20" stroke="#333" strokeWidth="2" />
                    <circle cx="8" cy="6" r="2" fill="#333" />
                    <circle cx="14" cy="12" r="2" fill="#333" />
                    <circle cx="8" cy="18" r="2" fill="#333" />
                </svg>
                <div className="menu-text">Data Statistic</div>
            </div>

            <div className="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#333" strokeWidth="2" />
                    <path d="M12 7V13" stroke="#333" strokeWidth="2" />
                    <circle cx="12" cy="16" r="1" fill="#333" />
                </svg>
                <div className="menu-text">Support</div>
            </div>

            {/* Add a logout option that navigates to login */}
            <div className="menu-item" onClick={() => navigate('/login')} style={{ marginTop: 'auto' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="#333" strokeWidth="2" />
                    <path d="M16 17l5-5-5-5" stroke="#333" strokeWidth="2" />
                    <path d="M21 12H9" stroke="#333" strokeWidth="2" />
                </svg>
                <div className="menu-text">Logout</div>
            </div>
        </>
    )
}

export default Sidebar;