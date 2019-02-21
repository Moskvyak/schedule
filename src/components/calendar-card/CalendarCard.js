import React from 'react';
import moment from 'moment';

import { formatLocalTime } from '../../utils/formatDate';
import { cardStyleByTaskType, defaultCardStyle } from '../../utils/cardStyle';

export const CalendarCard = React.memo(
  ({ description, type, start, end, rangeStart, rowHeight }) => {
    const style = cardStyleByTaskType(type);
    const taskDuration = moment(end).diff(moment(start), 'minutes');
    const topOffsetTime = moment(start).diff(moment(rangeStart), 'minutes');

    const height = taskDuration / 60 * rowHeight;
    const top = topOffsetTime / 60 * rowHeight;

    const timeRangeLabel = `${formatLocalTime(
      moment(start)
    )} - ${formatLocalTime(moment(end))}`;

    return (
      <div
        style={{
          ...style,
          ...defaultCardStyle,
          top,
          height
        }}
      >
        {description}
        <br />
        {timeRangeLabel}
      </div>
    );
  }
);
