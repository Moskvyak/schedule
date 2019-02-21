import React from 'react';
import PropTypes from 'prop-types';

import { JobListItem } from '../joblist-item/JobListItem';

import './JobList.css';

export const JobList = ({ options, title }) =>
  <div className="joblist__wrapper">
    {title && <h3>
      {title}
    </h3>}
    {options.map(option => <JobListItem key={option.id} option={option} />)}
  </div>;


JobList.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string
}