import React, { Component } from 'react';

import { JobList } from '../components/joblist/JobList';
import { SearchForm } from '../components/searchform/SearchForm';
import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';
import { MIN_CHARACTERS_FOR_SEARCH } from '../utils/config';

import './QuestionOne.css';

const defaultState = {
  searchValue: '',
  options: [],
  loading: false,
  error: null
};

export class QuestionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState
    };
  }

  clearSearch = () => {
    this.setState({ ...defaultState });
  };

  fetchResults = async () => {
    try {
      const { service } = this.props;
      const { searchValue } = this.state;
      const result = await service.getJobsWithSearchTerm(searchValue);
      this.setState({ options: result, loading: false, error: null });
    } catch (error) {
      this.setState({ error: 'Server error', loading: false });
    }
  };

  onSearchValueChange = event => {
    const { target: { value } } = event;
    if (!value) {
      this.clearSearch();
      return;
    }

    this.setState({ searchValue: value }, () => {
      if (value.length >= MIN_CHARACTERS_FOR_SEARCH) {
        this.setState({ loading: true, error: null }, this.fetchResults);
      }
    });
  };

  render() {
    const { searchValue, options, loading, error } = this.state;
    return (
      <SectionGroup>
        <SectionPanel>
          <SearchForm
            error={error}
            value={searchValue}
            loading={loading}
            onChange={this.onSearchValueChange}
            clearSearch={this.clearSearch}
            title="Search jobs"
            placeholder={`Try 'build'`}
          />
          <JobList options={options} title="Top results" />
        </SectionPanel>
      </SectionGroup>
    );
  }
}
