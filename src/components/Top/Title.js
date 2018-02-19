import React from 'react';
import Typography from 'material-ui/Typography';
import './Title.css';

export const Title = (props) => (
  <Typography type="title" color="inherit" align="left" className="Title">
    <span className="Title-name" onClick={() => props.backToSearch()}>Portal Network</span>
  </Typography>
);