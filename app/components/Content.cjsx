React     = require('react')

Container = require('components/shared/Grid')
TimeEntry = require('components/timeflow/TimeEntry')

@ContentTimeEntry = React.createClass
  render: ->
    return (
      <Container>

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

      </Container>
    )

@ContentProjects = React.createClass
  render: ->
    return (
      <Container>
        <div className="block-item pa-nn">

          <table className="table table-expanded">
            <thead>
              <tr>
                <th><strong className="type-caption color-hint">Titulo</strong></th>
                <th><strong className="type-caption color-hint">Titulo</strong></th>
                <th className="text-right"><strong className="type-caption color-hint">Titulo</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>

              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>Tristique Pellentesque</td>
                <td>Tristique</td>
                <td className="text-right">
                  <label className="switch mini">
                    <input type="checkbox"/>
                    <span className="control-indicator"></span>
                  </label>
                </td>
              </tr>
            </tbody>
        </table>

        </div>
      </Container>
    )




module.exports = @ContentProjects
