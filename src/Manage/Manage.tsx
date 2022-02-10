import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Associates from './Associates/Associates';
import Observations from './Observations/Observations';

const Manage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate replace to="associates" />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/observations" element={<Observations />} />
      </Routes>
    </React.Fragment>
  )
}
export default Manage;