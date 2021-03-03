import * as React from 'react';
import './welcome.css';

export type WelcomeProps = {
  poweredBy?: string
};

export const Welcome: React.FC<WelcomeProps> = ({ poweredBy = '@Snowpack' }) => (
  <div className="welcome">
    <p className="welcome__react">Welcome to React!</p>
    <p className="welcome__poweredBy">
      Powered by
      <span className="welcome__poweredBy__tech">{poweredBy}</span>
    </p>
  </div>
);
