import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import { Grid, Select } from 'semantic-ui-react'

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
}) => {
  const isActive = mode === 'on';

  return (
    <Grid.Row className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <Grid.Column mobile={1}/>
      <Grid.Column mobile={1}>
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on"
            value="on"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </Grid.Column>
      <Grid.Column mobile={1}>
        on day
      </Grid.Column>

      <Grid.Column mobile={4}>
        <Select
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={(e, target) => numericalFieldHandler(handleChange({ target }))}
          options={[...new Array(31)].map((day, i) => ({key:i, value: i + 1, text: i +1}))}
        />
      </Grid.Column>
    </Grid.Row>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOn;
