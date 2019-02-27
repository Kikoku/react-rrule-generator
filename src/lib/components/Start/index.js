import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';
import { Grid } from 'semantic-ui-react'

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
}) => (
  <div className="px-3">
    <Grid>
      <Grid.Row className="form-group">
        <Grid.Column mobile={3} className="text-sm-right">
          <label
            htmlFor={id}
            className="col-form-label"
          >
            <strong>
              Start
            </strong>
          </label>
        </Grid.Column>
        <StartOnDate id={id} onDate={onDate} handleChange={handleChange} />
      </Grid.Row>
    </Grid>
  </div>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Start;
