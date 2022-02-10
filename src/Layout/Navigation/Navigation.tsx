import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <ul>
        <li>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <Link to={'/community'}>Community</Link>
        </li>
        <li>
          <Link to={'/manage'}>Manage</Link>
          <ul>
            <li>
              <Link to={'/manage/associates'}>Associates</Link>
            </li>
            <li>
              <Link to={'/manage/observations'}>Observations</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;