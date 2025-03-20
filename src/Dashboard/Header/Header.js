import "./Header.css";

function Header () {
    return (
        <>
            <div class="header">
                <div class="page-title">Dashboard</div>
                <div class="search-bar">
                    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="#999" stroke-width="2" />
                        <path d="M16 16L21 21" stroke="#999" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <input type="text" placeholder="Search"/>
                </div>
                <div class="user-profile">
                    <svg class="notification-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#333" stroke-width="2" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#333" stroke-width="2" />
                    </svg>
                    <img src="https://i.pravatar.cc/100" alt="User" class="user-avatar"/>
                    <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#333" stroke-width="2" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Header;