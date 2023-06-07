import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function addStar() {
  var s = document.createElement("div");
  s.className = "star";
  s.style.setProperty("--size", Math.random() * 10 + 3 + "vmin");
  s.style.left = Math.floor(Math.random() * 100) + "%";
  s.style.top = Math.floor(Math.random() * 100) + "%";
  s.onanimationend = function () {
    this.remove();
  };
  document.body.appendChild(s);
}
setInterval(addStar, 100);