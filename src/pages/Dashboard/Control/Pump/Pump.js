import './Pump.css'

function Pump() {
    return (
    <div class="widget-card">
        <div class="widget-header">
            <div class="widget-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L12 5" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                    <path d="M5 5H19C19 5 21 8 17 10C13 12 11 12 7 10C3 8 5 5 5 5Z" stroke="#333" stroke-width="2"/>
                    <path d="M7 10C7 10 7 16 7 18C7 20 9 22 12 22C15 22 17 20 17 18C17 16 17 10 17 10" stroke="#333" stroke-width="2"/>
                </svg>
            </div>
            <div class="toggle-switch">
                <input type="checkbox" id="water-toggle" class="toggle-input"/>
                <label for="water-toggle" class="toggle-label">
                    <span class="toggle-button"></span>
                </label>
            </div>
        </div>
        <div class="widget-status">
            Pump
        </div>
    </div>
    )
}

export default Pump;