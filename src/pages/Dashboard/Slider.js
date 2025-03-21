
import './Slider.css'

function Slider ({lowest, highest, value, unit}) {
    
    return (
        <div class="slider-container status-slider">
        <div class="slider">
            <div class="slider-fill" style={{ width: value }}></div>
            <div class="slider-thumb" style={{ left: value }}></div>
        </div>
        <div class="slider-ticks">
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
            <div class="tick"></div>
        </div>
        <div class="slider-labels">
            <span>{lowest} {unit}</span>
            <span>{highest} {unit}</span>
        </div>
    </div>
    )
}

export default Slider;