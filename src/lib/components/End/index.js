import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';
import { Grid, Select } from 'semantic-ui-react'

const End = ({
  id,
  end: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <Grid className="px-3">
      <Grid.Row className="form-group">
        <Grid.Column mobile={3} className="text-sm-right">
          <label
            htmlFor={id}
            className="col-form-label"
          >
            <strong>
              End
            </strong>
          </label>
        </Grid.Column>
        <Grid.Column mobile={4} className="col-sm-3">
          <Select
            fluid
            name="end.mode"
            id={id}
            className="form-control"
            value={mode}
            onChange={(e, target) => handleChange({ target })}
            options={[
              {key:'Never', value:'Never', text: 'Never'},
              {key:'After', value:'After', text: 'After'},
              {key:'On date', value:'On date', text: 'On date'},
            ].filter(o => isOptionAvailable(o))}
          />
        </Grid.Column>

        {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
          />
        }
        {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
          />
        }

      </Grid.Row>
    </Grid>
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
