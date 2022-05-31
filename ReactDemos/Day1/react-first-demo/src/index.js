import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//React.createElement("h1", null , "Hello");
// Using jsx
// const e1 = <h1> Hello </h1>
// const e2 = <h2 className="class1"> Hello from h2 </h2>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* {e1}    {e2}  */}
      {/* {10+20}  */}
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
