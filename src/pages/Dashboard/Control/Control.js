import './Control.css'
import Light from './Light/Light'
import Pump from './Pump/Pump'

function Control() {
    return (
        <>
            <div class="ControlHeader">
                <h2>Control</h2>
            </div>
            <div class="auto-button">  
                <span>
                        Auto
                </span>
                <div className="toggle-switch-auto active">
                    
                    <input 
                        type="checkbox" 
                        id="auto-toggle" 
                        className="toggle-input-auto"
                        // checked={isActive}
                        // onChange={handleToggle}
                        // disabled={isLoading}
                    />
                    <label htmlFor="auto-toggle" className="toggle-label-auto">
                        <span className="toggle-button-auto"></span>
                    </label>
                </div>
            </div>

            <div class="Grid">
                <Light/>
                <Pump/>
            </div>

        </>
    )
}

export default Control