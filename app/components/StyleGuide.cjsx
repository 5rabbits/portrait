React = require('react')

@StyleGuide = React.createClass
  render: ->
    return (
      <div className="container-page hidden-">
        <div className="block-item pa-md">
          <div className="mb-md">
            <p>Utiliza las clases de boton en los elementos <strong>&lt;a&gt;</strong>, <strong>&lt;button&gt;</strong>, o <strong>&lt;input&gt;</strong>.</p>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="mb-md">
                <div className="type-caption color-hint">TIPOS</div>
                <div className="docs-demo mt-xs"><a className="btn btn-default" href="#" role="button">Link</a>
                  <button className="btn btn-default" type="submit">Button</button>
                  <input className="btn btn-default" type="button" value="Input"/>
                  <input className="btn btn-default" type="submit" value="Submit"/>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="mb-md">
                <div className="type-caption color-hint">CLASS</div>
                <div className="mt-xs">
                  <p><code>.btn</code></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="mb-md">
                <div className="type-caption color-hint">COLORES</div>
                <div className="docs-demo mt-xs">
                  <button type="button" className="btn btn-primary">Primary</button>
                  <button type="button" className="btn btn-secondary">Secondary</button>
                  <button type="button" className="btn btn-default">Default</button>
                  <button type="button" className="btn btn-success">Success</button>
                  <button type="button" className="btn btn-warning">Warning</button>
                  <button type="button" className="btn btn-danger">Danger</button>
                  <button type="button" className="btn btn-link">Link</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="mb-md">
                <div className="type-caption color-hint">CLASS</div>
                <div className="mt-xs">
                  <p><code>.btn-{name}</code></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="mb-md">
                <div className="type-caption color-hint">OUTLINE</div>
                <div className="docs-demo mt-xs">
                  <button type="button" className="btn btn-outline-primary">Primary</button>
                  <button type="button" className="btn btn-outline-secondary">Secondary</button>
                  <button type="button" className="btn btn-outline-default">Default</button>
                  <button type="button" className="btn btn-outline-success">Success</button>
                  <button type="button" className="btn btn-outline-warning">Warning</button>
                  <button type="button" className="btn btn-outline-danger">Danger</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="mb-md">
                <div className="type-caption color-hint">CLASS</div>
                <div className="mt-xs">
                  <p><code>.btn-outline-{name}</code></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="mb-md">
                <div className="type-caption color-hint">INVERSE</div>
                <div className="docs-demo mt-xs">
                  <button type="button" className="btn btn-inverse-primary">Primary</button>
                  <button type="button" className="btn btn-inverse-secondary">Secondary</button>
                  <button type="button" className="btn btn-inverse-default">Default</button>
                  <button type="button" className="btn btn-inverse-success">Success</button>
                  <button type="button" className="btn btn-inverse-warning">Warning</button>
                  <button type="button" className="btn btn-inverse-danger">Danger</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="mb-md">
                <div className="type-caption color-hint">CLASS</div>
                <div className="mt-xs">
                  <p><code>.btn-inverse-{name}</code></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="mb-md">
                <div className="type-caption color-hint">SIZES</div>
                <div className="docs-demo mt-xs">
                  <p>
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-default btn-lg">Large button</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary">Default button</button>
                    <button type="button" className="btn btn-default">Default button</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary btn-sm">Small button</button>
                    <button type="button" className="btn btn-default btn-sm">Small button</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary btn-xs">Extra small button</button>
                    <button type="button" className="btn btn-default btn-xs">Extra small button</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="mb-md">
                <div className="type-caption color-hint">CLASS</div>
                <div className="mt-xs">
                  <p><code>.btn-lg</code></p>
                  <p><code>.btn</code></p>
                  <p><code>.btn-sm</code></p>
                  <p><code>.btn-xs</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

module.exports = @StyleGuide
