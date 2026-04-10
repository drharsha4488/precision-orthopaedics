import React from 'react';
import '../pages/TreatmentTemplate.css';

const RecoveryChart = ({ data }) => {
  const maxWeeks = Math.max(data.conventional.weeks, data.robotic.weeks);
  return (
    <div className="recovery-chart">
      <div className="chart-bar-row">
        <span className="chart-label">{data.conventional.label}</span>
        <div className="chart-bar-track">
          <div className="chart-bar conventional" style={{ width: `${(data.conventional.weeks / maxWeeks) * 100}%` }}>
            {data.conventional.weeks} weeks
          </div>
        </div>
      </div>
      <div className="chart-bar-row">
        <span className="chart-label">{data.robotic.label}</span>
        <div className="chart-bar-track">
          <div className="chart-bar robotic" style={{ width: `${(data.robotic.weeks / maxWeeks) * 100}%` }}>
            {data.robotic.weeks} weeks
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryChart;
