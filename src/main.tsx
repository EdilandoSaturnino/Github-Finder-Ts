import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const devToolsIsOpen = () => {
  const threshold = 160;
  return (
    window.innerHeight < window.outerHeight - threshold ||
    window.innerWidth < window.outerWidth - threshold
  );
};

const handleDevToolsOpen = () => {
  if (devToolsIsOpen()) {
    window.location.reload();
  }
};

setInterval(handleDevToolsOpen, 1000);

window.addEventListener('resize', handleDevToolsOpen);
handleDevToolsOpen();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
