import React, { PureComponent } from 'react';
import { CalendarNavigation, TimingStats, UserSelect } from 'timeflow';

export default class ContentProjects extends PureComponent {
  render() {
    return (
      <Controls main={<CalendarNavigation/>}
                content={<TimingStats/>}
                actions={<UserSelect/>} />
    );
  }
}
