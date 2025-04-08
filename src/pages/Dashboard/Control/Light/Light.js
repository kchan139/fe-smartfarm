import { useState, useEffect } from 'react';
import './Light.css'

function Light() {
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dadn-242-backend.vercel.app/getSetting?Output_ID=L01')
            .then(res => res.json())
            .then(data => {
                setIsActive(data.Activation === "on");
                setIsLoading(false);
            });
    }, []);

    const handleToggle = async () => {
        const newActivation = !isActive ? "on" : "off";
        
        try {
            const response = await fetch(
                'https://dadn-242-backend.vercel.app/webAction/changeLightActivation',
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Activation: newActivation })
                }
            );
            
            if (!response.ok) throw new Error('Update failed');
            setIsActive(!isActive);
        } catch (error) {
            console.error('Toggle error:', error);
        }
    };
    
    return (
        <div className="widget-card">
            <div className="widget-header">
                <div className="widget-icon">
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
                <div className={`toggle-switch ${isActive ? 'active' : ''}`}>
                    <input 
                        type="checkbox" 
                        id="light-toggle" 
                        className="toggle-input"
                        checked={isActive}
                        onChange={handleToggle}
                        disabled={isLoading}
                    />
                    <label htmlFor="light-toggle" className="toggle-label">
                        <span className="toggle-button"></span>
                    </label>
                </div>
            </div>
            <div className="widget-status">
                {isLoading ? 'Loading...' : `Light: ${isActive ? 'ON' : 'OFF'}`}
            </div>
        </div>
    )
}

export default Light