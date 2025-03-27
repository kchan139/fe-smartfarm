import "./Header.css";
import Logo from '../../../assets/logo/logotree2.svg'
import LogoName from '../../../assets/logo/logotree3.svg'

function Header() {
    return (
        <>
            <div class="header">
                <div class="logo">
                    <img src={Logo} alt="Tech Tree Logo"/>
                    {/* <div class="logo-text">SMART FARM</div> */}
                    <img src={LogoName} alt="SMART FARM"/>
                </div>
                
                <nav class="nav-bar">
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Dashboard</a></li>
                    </ul>
                </nav>
                
                <button class="sign-in-btn">Sign In</button>
            </div>
        </>
    )
}

export default Header;