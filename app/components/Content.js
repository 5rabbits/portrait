import React, { PureComponent } from 'react';
import { Grid } from './shared';
import { TimeEntry } from './timeflow';

export default class Content extends PureComponent {
  render() {
    return (
      <Grid>
        <div className="block-group">
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
          <TimeEntry/>
        </div>
      </Grid>
    );
  }
}
