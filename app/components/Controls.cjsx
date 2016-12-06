React              = require('react')

Controls           = require('components/app/Controls')

SearchForm         = require('components/controls/SearchForm')
Button             = require('components/controls/Button')

CalendarNavigation = require('components/timeflow/CalendarNavigation')
ReviewNavigation   = require('components/timeflow/ReviewNavigation')
TimingStats        = require('components/timeflow/TimingStats')
UserSelect         = require('components/timeflow/UserSelect')
SectionHeading     = require('components/timeflow/SectionHeading')

@ControlsCalendar = React.createClass
  render: ->
    return (
      <Controls
        main={
          <CalendarNavigation/>
        }
        content={
          <TimingStats/>
        }
        actions={
          <UserSelect/>
        }
      />
    )

@ControlsTimeEntry = React.createClass
  render: ->
    return (
      <Controls
        main={
          <ReviewNavigation/>
        }
        content={
          <TimingStats/>
        }
        actions={
          <Button label="Exportar resultados"/>
        }
      />
    )

@ControlsSection = React.createClass
  render: ->
    return (
      <Controls
        main={
          <SectionHeading/>
        }
        content={
          <SearchForm/>
        }
        actions={
          <Button label="Nuevo Proyecto"/>
        }
      />
    )

module.exports = @ControlsSection
