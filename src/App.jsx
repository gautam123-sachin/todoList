import React from 'react';
import AppRouter from './components/routing/AppRouter.jsx';
import './styles/main.css';

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered React component.
 */
const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
