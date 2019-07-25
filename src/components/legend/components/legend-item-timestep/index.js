import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Timestep from 'components/timestep';

import {
  addToDate,
  dateDiff,
  formatDatePretty,
  formatDate,
  getTicks
} from './utils';

import './styles.scss';

export class TimestepContainer extends PureComponent {
  timelineParams = null

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    activeLayer: PropTypes.shape({})
  }

  static defaultProps = { activeLayer: {} };

  constructor(props) {
    super(props);
    const { activeLayer } = props;
    const { timelineParams } = activeLayer;

    if (timelineParams) {
      this.timelineParams = timelineParams;
      const { minDate, maxDate, startDate, endDate, trimEndDate, interval } = this.timelineParams;

      this.state = {
        min: 0,
        max: dateDiff(maxDate, minDate, interval),
        start: dateDiff(startDate, minDate, interval),
        end: dateDiff(endDate, minDate, interval),
        trim: dateDiff(trimEndDate, minDate, interval),
        marks: getTicks(this.timelineParams)
      };
    }
  }

  handleOnChange = range => {
    const { activeLayer, handleChange } = this.props;

    this.setState({
      start: range[0],
      end: range[1],
      trim: range[2]
    });

    const formattedRange = this.formatRange([
      range[0],
      range[1],
      range[2]
    ]);

    handleChange(formattedRange, activeLayer);
  };

  formatRange = range => {
    const { minDate, interval } = this.timelineParams;
    return range.map(r => formatDate(addToDate(minDate, r, interval)));
  };

  formatValue = value => {
    const { minDate, dateFormat, interval } = this.timelineParams;
    return formatDatePretty(addToDate(minDate, value, interval), dateFormat);
  };

  render() {
    if (!this.timelineParams) return null;

    const { marks } = this.state;

    return (
      <div styleName="c-legend-timestep">
        <Timestep
          {...this.props}
          {...this.state}
          {...this.timelineParams}
          marks={marks}
          formatValue={this.formatValue}
          handleOnChange={this.handleOnChange}
        />
      </div>
    )
  }
}

export default TimestepContainer;