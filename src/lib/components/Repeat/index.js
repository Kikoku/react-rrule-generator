import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';
import { Grid, Select } from 'semantic-ui-react'

const Repeat = ({
  id,
  repeat: {
    frequency,
    yearly,
    monthly,
    weekly,
    daily,
    hourly,
    options,
  },
  handleChange,
}) => {
  const isOptionAvailable = option => !options.frequency || options.frequency.indexOf(option) !== -1;
  const isOptionSelected = option => frequency === option;

  return (
    <Grid className="px-3">
      <Grid.Row className="form-group row">
        <Grid.Column mobile={1} className="col-sm-2 text-sm-right">
          <label
            htmlFor={`${id}-frequency`}
            className="col-form-label"
          >
            <strong>
              Repeat
            </strong>
          </label>
        </Grid.Column>
        <Grid.Column mobile={10} className="col-sm-6">
          <Select
            fluid
            name="repeat.frequency"
            id={`${id}-frequency`}
            className="form-control"
            value={frequency}
            onChange={(e, target) => handleChange({target})}
            options={[
              {key: 'Yearly', value: 'Yearly', text: 'Yearly'},
              {key: 'Monthly', value: 'Monthly', text: 'Monthly'},
              {key: 'Weekly', value: 'Weekly', text: 'Weekly'},
              {key: 'Daily', value: 'Daily', text: 'Daily'},
              {key: 'Hourly', value: 'Hourly', text: 'Hourly'},
            ].filter(o => isOptionAvailable(o.key))}
          />
        </Grid.Column>
      </Grid.Row>
      <div style={{width: '100%'}}>
      
      {
        isOptionSelected('Yearly') &&
        <RepeatYearly
          id={`${id}-yearly`}
          yearly={yearly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Monthly') &&
        <RepeatMonthly
          id={`${id}-monthly`}
          monthly={monthly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Weekly') &&
        <RepeatWeekly
          id={`${id}-weekly`}
          weekly={weekly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Daily') &&
        <RepeatDaily
          id={`${id}-daily`}
          daily={daily}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Hourly') &&
        <RepeatHourly
          id={`${id}-hourly`}
          hourly={hourly}
          handleChange={handleChange}
        />
      }
      </div>
    </Grid>
  );
};

Repeat.propTypes = {
  id: PropTypes.string.isRequired,
  repeat: PropTypes.shape({
    frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
    options: PropTypes.shape({
      frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
      yearly: PropTypes.oneOf(['on', 'on the']),
      monthly: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Repeat;
