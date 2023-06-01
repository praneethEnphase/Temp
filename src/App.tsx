import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function TempApp() {

  const [val, setVal] = useState<string>("Hi, please delete this and enter a value")

  const onChange = (x: { target: { value: string; }; }) => {
    setVal(x.target.value)
  }

  return (
    <div className="App">
      <input onChange={onChange} value={val}/>
      <p>{val}</p>
    </div>
  );
}

export default TempApp;
