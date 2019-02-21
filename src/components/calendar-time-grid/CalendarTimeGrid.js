import React from 'react';

import moment from 'moment';
import { formatLocalTime } from '../../utils/formatDate';

import './CalendarTimeGrid.css';

export const CalendarTimeGrid = React.memo(
  ({ start, rowHeight, numberOfRows }) => {
    const style = { height: rowHeight * numberOfRows };
    const timeElements = [];
    for (let i = 0; i < numberOfRows; i++) {
      const timeElement = formatLocalTime(moment(start).add(i, 'hour'));
      timeElements.push(timeElement);
    }

    return (
      <div className="calendar-time-grid__wrapper" style={style}>
        {timeElements.map(timeElement =>
          <div
            key={timeElement}
            className="calendar-time-grid__row"
            style={{
              height: rowHeight,
              lineHeight: `${rowHeight - 1}px`
            }}
          >
            {timeElement}
          </div>
        )}
      </div>
    );
  }
);
