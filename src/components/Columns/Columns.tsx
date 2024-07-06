import React from 'react';
import './Columns.css';
import LargeColumn from '../LargeColumn/LargeColumn';
import SmallColumn from '../SmallColumn/SmallColumn';

const Columns: React.FC = () => {
  return (
    <div className="columns-container">
      <div className="column column-large">
        <LargeColumn />
      </div>
      <div className="column column-small">
        <SmallColumn />
      </div>
    </div>
  );
};

export default Columns;
