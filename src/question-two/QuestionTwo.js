import React, { Component } from 'react';

import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';
import { Swimlane } from '../components/swimlane/Swimlane';
import { CalendarView } from '../components/calendar-view/CalendarView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { uiConfig } from '../utils/config';

import './QuestionTwo.css';

/**
 * Please do not change these dates, the data on the server all fall within the 01/09/2018
 */
const RANGE_START = new Date('2018-09-01T00:00:00Z');
const RANGE_END = new Date('2018-09-01T24:00:00Z');

export class QuestionTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lanes: [],
      mode: 'calendar'
    };
  }

  mapTasksToCards = (taskArray, resourceId, type) => {
    const cards = taskArray
      .filter(jobA => jobA.resource.id === resourceId)
      .map(job => {
        return {
          id: job.task.id,
          type,
          description: job.task.name,
          start: new Date(job.task.start),
          end: new Date(job.task.end)
        };
      });
    return cards;
  };

  async componentWillMount() {
    const { service } = this.props;
    const response = await service.getResourceAllocations();
    const { resources, jobAllocations, activityAllocations } = response;
    const lanes = resources.map(resource => {
      const lane = {
        id: resource.id,
        title: resource.name,
        cards: [
          ...this.mapTasksToCards(jobAllocations, resource.id, 'job'),
          ...this.mapTasksToCards(activityAllocations, resource.id, 'activity')
        ]
      };
      return lane;
    });
    this.setState({ lanes });
  }

  toggleCalendar = () => {
    this.setState({ mode: 'calendar' });
  };

  toggleSwimLane = () => {
    this.setState({ mode: 'swimlane' });
  };

  isCalendarMode = () => {
    return this.state.mode === 'calendar';
  };

  isSwimLaneMode = () => {
    return this.state.mode === 'swimlane';
  };

  renderActions = () => {
    return (
      <div className="question-two__action-wrapper">
        <FontAwesomeIcon
          onClick={this.toggleCalendar}
          icon={faCalendarAlt}
          color={
            this.isCalendarMode()
              ? uiConfig.primaryColor
              : uiConfig.enabledColor
          }
          size="lg"
        />
        <FontAwesomeIcon
          onClick={this.toggleSwimLane}
          icon={faList}
          color={
            this.isSwimLaneMode()
              ? uiConfig.primaryColor
              : uiConfig.enabledColor
          }
          size="lg"
        />
      </div>
    );
  };
  render() {
    const { lanes } = this.state;

    return (
      <SectionGroup>
        <SectionPanel>
          {this.renderActions()}
          {this.isSwimLaneMode() &&
            <Swimlane lanes={lanes} start={RANGE_START} end={RANGE_END} />}
          {this.isCalendarMode() &&
            <CalendarView people={lanes} start={RANGE_START} end={RANGE_END} />}
        </SectionPanel>
      </SectionGroup>
    );
  }
}
