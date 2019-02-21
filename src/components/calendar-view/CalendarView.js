import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';

import { CalendarCard } from '../calendar-card/CalendarCard';
import { CalendarHeader } from '../calendar-header/CalendarHeader';
import { CalendarTimeGrid } from '../calendar-time-grid/CalendarTimeGrid';

import './CalendarView.css';

export class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowHeight: 80
    };
  }

  increaseRowHeight = () => {
    this.setState(prevState => ({ rowHeight: prevState.rowHeight + 10 }));
  };

  decreaseRowHeight = () => {
    if (this.state.rowHeight > 50) {
      this.setState(prevState => ({ rowHeight: prevState.rowHeight - 10 }));
    }
  };

  getNumberOfHours = () => {
    const { start, end } = this.props;
    return moment(end).diff(moment(start), 'hours');
  };

  render() {
    const { people, start } = this.props;
    const { rowHeight } = this.state;
    const numberOfRows = this.getNumberOfHours();
    return (
      <Fragment>
        <CalendarHeader
          people={people}
          increaseRowHeight={this.increaseRowHeight}
          decreaseRowHeight={this.decreaseRowHeight}
        />
        <div
          className="calendar-view__body"
          style={{ height: rowHeight * numberOfRows }}
        >
          <CalendarTimeGrid
            start={start}
            rowHeight={rowHeight}
            numberOfRows={numberOfRows}
          />
          {people.map(person =>
            <div
              className="calendar-view__card"
              key={person.id}
              style={{ height: rowHeight * numberOfRows }}
            >
              {person.cards.map(card =>
                <CalendarCard
                  {...card}
                  rangeStart={start}
                  key={`${card.id}-${card.type}`}
                  rowHeight={rowHeight}
                />
              )}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

CalendarView.propTypes = {
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        card: PropTypes.array
    }))
}
