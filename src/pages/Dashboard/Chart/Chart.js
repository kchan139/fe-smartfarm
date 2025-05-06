import "./Chart.css"
import { useState, useEffect, useRef } from 'react';

function Chart({type, updateInterval, title}){
    const histogramRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  
  const timePeriods = [
    "12-2 AM", "2-4 AM", "4-6 AM", "6-8 AM", 
    "8-10 AM", "10-12 PM", "12-2 PM", "2-4 PM", 
    "4-6 PM", "6-8 PM", "8-10 PM", "10-12 AM"
  ];
  
  // Initialize the histogram
  const initHistogram = () => {
    if (!histogramRef.current) return;
    
    const histogram = histogramRef.current;
    
    // Clear existing bars if any
    const existingBars = histogram.querySelectorAll('.bar-container');
    existingBars.forEach(bar => bar.remove());
    
    // Create bar containers for each time period
    timePeriods.forEach((time, index) => {
      const barContainer = document.createElement('div');
      barContainer.className = 'bar-container';
      
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = '0%';
      
      const valueLabel = document.createElement('div');
      valueLabel.className = 'value-label';
      valueLabel.textContent = '0';
      
      const timeLabel = document.createElement('div');
      timeLabel.className = 'time-label';
      timeLabel.textContent = time;
      
      barContainer.appendChild(bar);
      bar.appendChild(valueLabel);
      barContainer.appendChild(timeLabel);
      histogram.appendChild(barContainer);
    });
    
    setInitialized(true);
  };
  
  // Update the histogram with new data
  const updateHistogram = (data) => {
    if (!histogramRef.current) return;
    
    const bars = histogramRef.current.querySelectorAll('.bar');
    
    bars.forEach((bar, index) => {
      const value = data[index];
      const valueLabel = bar.querySelector('.value-label');
      
      // Animate the height change
      setTimeout(() => {
        bar.style.height = value + '%';
        valueLabel.textContent = value;
      }, index * 100);
    });
  };
  
  // Generate random data
  const generateRandomData = () => {
    // Night hours have less light
    return [
      Math.floor(Math.random() * 5),  // 12-2 AM
      Math.floor(Math.random() * 5),  // 2-4 AM
      Math.floor(Math.random() * 10 + 1),  // 4-6 AM
      Math.floor(Math.random() * 40 + 10),  // 6-8 AM
      Math.floor(Math.random() * 50 + 20),  // 8-10 AM
      Math.floor(Math.random() * 40 + 50),  // 10-12 PM
      Math.floor(Math.random() * 40 + 50),  // 12-2 PM
      Math.floor(Math.random() * 40 + 40),  // 2-4 PM
      Math.floor(Math.random() * 50 + 20),  // 4-6 PM
      Math.floor(Math.random() * 40 + 5),   // 6-8 PM
      Math.floor(Math.random() * 10),       // 8-10 PM
      Math.floor(Math.random() * 5)         // 10-12 AM
    ];
  };
  
  // Initialize chart on component mount
  useEffect(() => {
    initHistogram();
    
    // Initial update
    if (initialized) {
      updateHistogram(generateRandomData());
    }
    
    // Set up interval for updates
    const intervalId = setInterval(() => {
      if (initialized) {
        updateHistogram(generateRandomData());
      }
    }, updateInterval);
    
    // Clean up on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [initialized, updateInterval]);
    return (
        <>
            <div class = {type} >
                <h1>{title}</h1>
                <div class="histogram" ref={histogramRef}>
                    <div class="y-axis">
                        <span class="y-axis-label">100</span>
                        <span class="y-axis-label">80</span>
                        <span class="y-axis-label">60</span>
                        <span class="y-axis-label">40</span>
                        <span class="y-axis-label">20</span>
                        <span class="y-axis-label">0</span>
                    </div>
                    <div class="x-axis"></div>
                </div>
            </div>
        </>
    )

}

export default Chart