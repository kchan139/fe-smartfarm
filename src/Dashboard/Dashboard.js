import { useEffect, useState } from 'react';
import './Dashboard.css'
import Widget from './Widget.js'


function Dashboard() {
    const [humid, setHumid] = useState(0);
    const [temp, setTemp] = useState(0);
    const [light, setLight] = useState(0);

    useEffect(() => {
        setInterval(() => {            
            //* get api value here
            const humidFeed = 5;
            setHumid(humidFeed); 
            const tempFeed = 10;
            setTemp(tempFeed);
            const lightFeed = 15;
            setLight(lightFeed);
        }, 2000);
    }, [])


    return (
        <>
            <div class="dashboard">
                <Widget value={humid} unit="%" lowest="0" highest="100" >Humidity</Widget>
                <Widget value={temp} unit="°C" lowest="0" highest="50" >Temerature</Widget>
                <Widget value={light} unit=" Lux" lowest="0" highest="500" >Light</Widget>
            </div>
        </>
    )
}

export default Dashboard;