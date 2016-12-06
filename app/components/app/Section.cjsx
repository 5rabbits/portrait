React     = require('react')

Loader    = require('../shared/Loader')
Offscreen = require('../shared/Offscreen')
EmptyView = require('../shared/EmptyView')

@Section = React.createClass
  render: ->
    return (
      <section className="section-wrapper" id="block-section">
        <header className="section-controls" id="block-controls">
          <div className="container-max">
            { @props.controls }
          </div>
        </header>
        <section className="section-content" id="block-content">
          <div className="container-max">

            <article className="hidden section-state" id="block-content-loading">
              <Loader/>
            </article>

            <article className="hidden section-state" id="block-content-empty">
              <EmptyView/>
            </article>

            <article className="hidden- section-state" id="block-content-data">
              { @props.content }
            </article>

          </div>
        </section>
      </section>
    )

@SectionOffscreen = React.createClass
  render: ->
    return (
      <section className="section-wrapper" id="block-section">
        <header className="section-controls" id="block-controls">
          <div className="container-max">
            { @props.controls }
          </div>
        </header>
        <section className="section-content" id="block-content">
          <div className="container-max">

            <Offscreen
              panel={
                <div className="container-page">
                  <form>
                    <div className="form-group">
                      <label className="type-caption" for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label className="type-caption" for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"/> Check me out
                      </label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
              }
              content={
                <div className="section-states">

                  <article className="hidden section-state" id="block-content-loading">
                    <Loader/>
                  </article>
                  <article className="hidden section-state" id="block-content-empty">
                    <EmptyView/>
                  </article>
                  <article className="hidden- section-state" id="block-content-data">
                    { @props.content }
                  </article>

                </div>
            }/>

          </div>
        </section>
      </section>
    )

module.exports = @SectionOffscreen
