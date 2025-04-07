import './Control.css'
import Light from './Light/Light'
import Pump from './Pump/Pump'

function Control() {
    return (
        <>
            <div class="ControlHeader">
                <h2>Control</h2>
            </div>

            <div class="Grid">
                <Light/>
                <Pump/>
            </div>

        </>
    )
}

export default Control