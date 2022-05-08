import React from 'react';

import './GoalList.css';

const GoalList = props => {
  return (
    <ul className="goal-list">
      {props.goals.map(({id, text}) => {
        return <li key={id}>{text}</li>
      })}
    </ul>
  );
};

export default GoalList;
