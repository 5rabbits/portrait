import React from 'react'
import { CalendarNavigation, TimingStats, UserSelect } from './timeflow'
import { Controls } from './main'

const ContentProjects = () =>
  <Controls
    main={<CalendarNavigation />}
    content={<TimingStats />}
    actions={<UserSelect />}
  />

export default ContentProjects
