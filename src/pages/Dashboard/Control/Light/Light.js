import './Light.css'

function Light() {
    return (
        <>
            <div class="widget-card">
                <div class="widget-header">
                    <div class="widget-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="5" stroke="#4CAF50" stroke-width="2"/>
                            <path d="M12 4V2" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M12 22V20" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M20 12L22 12" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M2 12L4 12" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M17.6569 6.34315L19.0711 4.92893" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M4.92893 19.0711L6.34315 17.6569" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M17.6569 17.6569L19.0711 19.0711" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                            <path d="M4.92893 4.92893L6.34315 6.34315" stroke="#4CAF50" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="toggle-switch active">
                        <input type="checkbox" id="light-toggle" class="toggle-input" checked/>
                        <label for="light-toggle" class="toggle-label">
                            <span class="toggle-button"></span>
                        </label>
                    </div>
                </div>
                <div class="widget-status">
                    Light
                </div>
            </div>
        </>
    )
}

export default Light