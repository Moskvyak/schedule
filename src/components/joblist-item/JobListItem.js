import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { formatLocalDateTime } from '../../utils/formatDate';
import './JobListItem.css';

export const JobListItem = React.memo(({ option }) => {
  const { name, start, end, contact } = option;
  const startDate = formatLocalDateTime(moment(start));
  const endDate = formatLocalDateTime(moment(end));
  return (
    <div className="joblist-item__wrapper">
      <div className="joblist-item__title">
        <span>{contact.name}</span> - {name}
      </div>
      <div className="joblist-item__time-period">
        {startDate} - {endDate}
      </div>
    </div>
  );
});

JobListItem.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  }).isRequired
}