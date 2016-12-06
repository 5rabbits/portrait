React = require('react')

@Loader = React.createClass
  render: ->
    return (
      <div className="empty-view">
        <div className="empty-container">
          <div className="empty-dialog">
            <i className="fa fa-circle-o-notch fa-5x color-soft fa-spin "></i>
          </div>
        </div>
      </div>
    )

module.exports = @Loader
