import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { createRoot } from 'react-dom/client';
// import  App  from './components/App';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab='home' />);