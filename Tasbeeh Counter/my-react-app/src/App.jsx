import React, { useState } from 'react';
import './App.css';
import backgroundImage from "./assets/Bg.png";

function Counter({ arabicTitle }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2 lang="ar" className="arabic-title">{arabicTitle}</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export const Footer = () => {
  return <p className="footer">2024&copy; Kabshah|All rights reserved</p>
}

export const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 lang="ur" className="main-title">تسبیح کاؤنٹر</h1>
      <div className="counters-container">
        <Counter arabicTitle="الله أكبر" />
        <Counter arabicTitle="سبحان الله" />
        <Counter arabicTitle="الحمد لله" />
        <Footer />
      </div>
    </div>
  );
}
