import "./Sidebar.css";
import Logo from '../../../assets/logo/logotree2.svg';
import LogoName from '../../../assets/logo/logotree3.svg';

function Sidebar () {
    return (
        <>
            <div class="logo">
                {/* <svg width="40" height="40" viewBox="0 0 40 40">
                    <rect x="10" y="27" width="20" height="3" fill="#4CAF50" />
                    <circle cx="20" cy="15" r="10" fill="#4CAF50" opacity="0.7" />
                    <circle cx="20" cy="15" r="5" fill="#4CAF50" />
                    <rect x="18" y="25" width="4" height="10" fill="#4CAF50" />
                </svg> */}
                <img src={Logo} width="40%" height="40%" alt="icon" />
                <img src={LogoName} width="70%" alt="icon" />
                {/* <div class="logo-text">TECH <span>TREE</span></div> */}
            </div>

            <div class="menu-item active">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="#4CAF50" />
                    <rect x="14" y="14" width="7" height="7" rx="1" fill="#4CAF50" />
                </svg>
                <div class="menu-text">Dashboard</div>
            </div>

            <div class="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L12 20" stroke="#333" stroke-width="2" />
                    <path d="M12 4C14 7 17 8 20 8" stroke="#333" stroke-width="2" />
                    <path d="M12 4C10 7 7 8 4 8" stroke="#333" stroke-width="2" />
                    <path d="M12 12C14 15 17 16 20 16" stroke="#333" stroke-width="2" />
                    <path d="M12 12C10 15 7 16 4 16" stroke="#333" stroke-width="2" />
                </svg>
                <div class="menu-text">Device Configuration</div>
            </div>

            <div class="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6H20" stroke="#333" stroke-width="2" />
                    <path d="M4 12H20" stroke="#333" stroke-width="2" />
                    <path d="M4 18H20" stroke="#333" stroke-width="2" />
                    <circle cx="8" cy="6" r="2" fill="#333" />
                    <circle cx="14" cy="12" r="2" fill="#333" />
                    <circle cx="8" cy="18" r="2" fill="#333" />
                </svg>
                <div class="menu-text">Data Statistic</div>
            </div>

            <div class="menu-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#333" stroke-width="2" />
                    <path d="M12 7V13" stroke="#333" stroke-width="2" />
                    <circle cx="12" cy="16" r="1" fill="#333" />
                </svg>
                <div class="menu-text">Support</div>
            </div>

            
        </>
    )
}


export default Sidebar;