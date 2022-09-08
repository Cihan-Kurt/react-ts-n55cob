import * as React from 'react';
import './style.css';
import Maintable from './Maintable';

const Layout = () => {
  const mockLehrer = {
    name: 'PoS',
    subject: 'Religion',
    headTeachOfClass: 'FI007',
  };

  return (
    <div>
      <div className="layout-head">
        <div>name: {mockLehrer.name}</div>
        <div>subject: {mockLehrer.subject}</div>
        <div>class: {mockLehrer.headTeachOfClass}</div>
      </div>
      <div className="content-wrap">
        <Maintable />
      </div>
    </div>
  );
};

export default Layout;
