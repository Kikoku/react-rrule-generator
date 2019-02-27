import React from 'react';
import PropTypes from 'prop-types';

import { MONTHS, DAYS } from '../../../constants/index';

import { Grid, Select } from 'semantic-ui-react'

const RepeatYearlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
}) => {
  const isActive = mode === 'on the';

  return (
    <Grid>
      <Grid.Row className={`form-group d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
        <Grid.Column mobile={1}>

        </Grid.Column>
        <Grid.Column mobile={1}>
          {hasMoreModes && (
            <input
              id={id}
              type="radio"
              aria-label="Repeat yearly on the"
              name="repeat.yearly.mode"
              checked={isActive}
              value="on the"
              onChange={handleChange}
            />
          )}
        </Grid.Column>
        <Grid.Column mobile={1}>
          on the
        </Grid.Column>

        <Grid.Column mobile={4}>
          <Select
            fluid
            id={`${id}-which`}
            name="repeat.yearly.onThe.which"
            aria-label="Repeat yearly on the which"
            className="form-control"
            value={onThe.which}
            disabled={!isActive}
            onChange={(e, target) => handleChange({ target })}
            options={[
              { key: 'First', value: 'First', text: 'First'},
              { key: 'Second', value: 'Second', text: 'Second'},
              { key: 'Thrid', value: 'Thrid', text: 'Thrid'},
              { key: 'Fourth', value: 'Fourth', text: 'Fourth'},
              { key: 'Last', value: 'Last', text: 'Last'},
            ]}
          />
        </Grid.Column>

        <Grid.Column mobile={4}>
          <Select
            fluid
            id={`${id}-day`}
            name="repeat.yearly.onThe.day"
            aria-label="Repeat yearly on the day"
            className="form-control"
            value={onThe.day}
            disabled={!isActive}
            onChange={(e, target) => handleChange({ target })}
            options={DAYS.map(day => ({key:day, value:day, text:day}))}
          />
        </Grid.Column>

        <Grid.Column mobile={1}>
          of
        </Grid.Column>

        <Grid.Column mobile={4}>
          <Select
            fluid
            id={`${id}-month`}
            name="repeat.yearly.onThe.month"
            aria-label="Repeat yearly on the month"
            className="form-control"
            value={onThe.month}
            disabled={!isActive}
            onChange={(e, target) => handleChange({ target })}
            options={MONTHS.map(month => ({key:month, value:month, text: month}))}
          />
        </Grid.Column>

      </Grid.Row>
    </Grid>
  );
};
RepeatYearlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    month: PropTypes.oneOf(MONTHS).isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOnThe;
