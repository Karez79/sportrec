// src/components/SmallColumn/SmallColumn.tsx

import React from 'react';
import './SmallColumn.css';
import allIcon from '../../assets/all-icon.svg';
import resultsIcon from '../../assets/results-icon.svg';
import videoIcon from '../../assets/video-icon.svg';
import achievementsIcon from '../../assets/achievements-icon.svg';

const SmallColumn: React.FC = () => {
  return (
    <div className="small-column">
      <h3>Фильтр ленты</h3>
      <div className="filter-option">
        <img src={allIcon} alt="All" />
        <span>Все</span>
      </div>
      <div className="filter-option">
        <img src={resultsIcon} alt="Results" />
        <span>Результаты соревнований</span>
      </div>
      <div className="filter-option">
        <img src={videoIcon} alt="Video" />
        <span>Видео</span>
      </div>
      <div className="filter-option">
        <img src={achievementsIcon} alt="Achievements" />
        <span>Достижения</span>
      </div>
    </div>
  );
};

export default SmallColumn;
