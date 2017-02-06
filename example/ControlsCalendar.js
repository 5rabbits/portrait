import React from 'react'
import { Controls } from 'main'
import { CalendarNavigation, TimingStats, UserSelect } from './timeflow'

const ContentProjects = () =>
  <Controls
    main={<CalendarNavigation />}
    content={<TimingStats />}
    actions={<UserSelect />}
  />

export default ContentProjects
