import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import { MONTHS } from '../../../constants/index';

import { Grid, Select } from 'semantic-ui-react'

const RepeatYearlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
}) => {
  const daysInMonth = moment(on.month, 'MMM').daysInMonth();
  const isActive = mode === 'on';

  return (
    <Grid>
      <Grid.Row className={`form-group d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
        <Grid.Column mobile={1}>

        </Grid.Column>
        <Grid.Column mobile={1} className="col-sm-1 offset-sm-2">

          {hasMoreModes && (
            <input
              id={id}
              type="radio"
              name="repeat.yearly.mode"
              aria-label="Repeat yearly on"
              value="on"
              checked={isActive}
              onChange={handleChange}
            />
          )}
        </Grid.Column>

        <Grid.Column mobile={1}>
          on
        </Grid.Column>

        <Grid.Column mobile={4}>
          <Select
            fluid
            id={`${id}-month`}
            name="repeat.yearly.on.month"
            aria-label="Repeat yearly on month"
            className="form-control"
            value={on.month}
            disabled={!isActive}
            onChange={(e, target) => handleChange({ target })}
            options={MONTHS.map(month => ({key: month, value:month, text: month}))}
          />
        </Grid.Column>

        <Grid.Column mobile={4}>
          <Select
            fluid
            id={`${id}-day`}
            name="repeat.yearly.on.day"
            aria-label="Repeat yearly on a day"
            className="form-control"
            value={on.day}
            disabled={!isActive}
            onChange={(e, target) => numericalFieldHandler(handleChange({ target }))}
            options={[...new Array(daysInMonth)].map((day, i) => ({ key: i, value: i+1, text: i+1}))}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
RepeatYearlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    month: PropTypes.oneOf(MONTHS).isRequired,
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOn;
