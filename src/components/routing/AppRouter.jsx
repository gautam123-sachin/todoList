import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header.jsx';
import ListingScreen from '../../screens/ListingScreen.jsx';
import EditFormScreen from '../../screens/EditFormScreen.jsx';

/**
 * The main router component for the application.
 */
const AppRouter = () => {
  return (
    <Router>
      {/* Render the header component */}
      <Header />
      <Routes>
        {/* Render the listing screen component for the root path */}
        <Route path="/" element={<ListingScreen />} />
        {/* Render the edit form screen component for the "/edit/:id" path */}
        <Route path="/edit/:id" element={<EditFormScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;