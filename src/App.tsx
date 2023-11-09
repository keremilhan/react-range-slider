import React, { useState } from 'react';
import './App.css';
import NumberSlider from './NumberSlider';

function App() {
    const [value, setValue] = useState(5);

    return (
        <div className="App">
            <NumberSlider value={value} setValue={setValue} min={5} max={23} />
        </div>
    );
}

export default App;
