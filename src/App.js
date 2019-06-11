import React from 'react';
import useDarkMode from './hooks/use-dark-mode';
import Toggle from './components/Toggle';
import Content from './components/Content';
import './App.scss';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
}

export default App;
