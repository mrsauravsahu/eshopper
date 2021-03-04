import * as React from 'react';
import PropTypes from 'prop-types';

import './welcome.css';

export const Welcome = ({ poweredBy }) => (
  <div className="welcome">
    <p className="welcome__react">Welcome to React!</p>
    <p className="welcome__poweredBy">
      Powered by
      <span className="welcome__poweredBy__tech">{poweredBy}</span>
    </p>
  </div>
);

Welcome.propTypes = {
  poweredBy: PropTypes.string,
};

Welcome.defaultProps = {
  poweredBy: '@Snowpack',
};
