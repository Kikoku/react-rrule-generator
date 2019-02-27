import React from 'react';
import PropTypes from 'prop-types';

import { DAYS } from '../../../constants/index';

import { Grid, Select } from 'semantic-ui-react'

const RepeatMonthlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
}) => {
  const isActive = mode === 'on the';

  return (
    <Grid.Row className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <Grid.Column mobile={1} />
      <Grid.Column mobile={1}>
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on the"
            value="on the"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </Grid.Column>
      <Grid.Column mobile={1}>
        on the
      </Grid.Column>
      <Grid.Column mobile={4}>
        <Select
          id={`${id}-which`}
          name="repeat.monthly.onThe.which"
          aria-label="Repeat monthly on the which"
          className="form-control"
          value={onThe.which}
          disabled={!isActive}
          onChange={(e, target) => handleChange({ target })}
          options={[
            {key: 'First', value: 'First', text:'First'},
            {key: 'Second', value: 'Second', text:'Second'},
            {key: 'Third', value: 'Third', text:'Third'},
            {key: 'Fourth', value: 'Fourth', text:'First'},
            {key: 'Last', value: 'Last', text:'Last'},
          ]}
        />
      </Grid.Column>
      <Grid.Column mobile={4}>
        <Select
          id={`${id}-day`}
          name="repeat.monthly.onThe.day"
          aria-label="Repeat monthly on the day"
          className="form-control"
          value={onThe.day}
          disabled={!isActive}
          onChange={(e, target) => handleChange({ target })}
          options={DAYS.map(day => ({key:day, value: day, text: day}))}
        />          
      </Grid.Column>

    </Grid.Row>
  );
};
RepeatMonthlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOnThe;
