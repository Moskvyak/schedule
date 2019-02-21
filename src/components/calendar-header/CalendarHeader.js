import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './CalendarHeader.css';

export const CalendarHeader = ({
  increaseRowHeight,
  decreaseRowHeight,
  people
}) =>
  <div className="calendar-header__wrapper">
    <div className="calendar-header__timelane">
      <FontAwesomeIcon onClick={increaseRowHeight} icon={faPlus} size="lg" />
      <FontAwesomeIcon onClick={decreaseRowHeight} icon={faMinus} size="lg" />
    </div>
    {people.map(person =>
      <div className="calendar-header__card" key={person.id}>
        <h3>
          {person.title}
        </h3>
      </div>
    )}
  </div>;
