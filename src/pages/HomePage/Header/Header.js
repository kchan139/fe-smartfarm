import "./Header.css";

function Header() {
    return (
        <>
            <div class="header">
                <div class="logo">
                    <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/03/anh-meme-hai-1.jpg" alt="Tech Tree Logo"/>
                    <div class="logo-text">SMART FARM</div>
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