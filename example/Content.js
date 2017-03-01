import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <div>
          <h2 className="type-title mt-xs mb-md font-strong">Display</h2>
          <table className="table mb-z">
            <tbody>
              <tr>
                <td className="type-mega py-md">Lorem ipsum dolore siet amet.</td>
                <td><code>.type-mega</code></td>
              </tr>
              <tr>
                <td className="type-jumbo py-md">Lorem ipsum dolore siet amet.</td>
                <td><code>.type-jumbo</code></td>
              </tr>
              <tr>
                <td className="type-display py-md">Lorem ipsum dolore siet amet.</td>
                <td><code>.type-display</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="block-item pa-md">
        <div>
          <h2 className="type-title mb-md font-strong">Headings</h2>
          <table className="table mb-z">
            <tbody>
              <tr>
                <td className="type-headline py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</td>
                <td><code>.type-headline</code></td>
              </tr>
              <tr>
                <td className="type-title py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</td>
                <td><code>.type-title</code></td>
              </tr>
              <tr>
                <td className="type-subhead py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</td>
                <td><code>.type-subhead</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="block-item pa-md">
        <div>
          <h2 className="type-title mb-md font-strong">Copy</h2>
          <table className="table mb-z">
            <tbody>
              <tr>
                <td className="type-body py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</td>
                <td><code>.type-body</code></td>
              </tr>
              <tr>
                <td className="type-footnote py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</td>
                <td><code>.type-footnote</code></td>
              </tr>
              <tr>
                <td className="type-caption py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</td>
                <td><code>.type-caption</code></td>
              </tr>
              <tr>
                <td className="type-small py-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</td>
                <td><code>.type-small</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <div className="row">
          <div className="col-xs-3">
            <div className="swatch-color-sm" />
            <div className="swatch-color-lg bg-primary" />
            <div className="swatch-color-sm" />
            <div><code>.bg-primary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm" />
            <div className="swatch-color-lg bg-secondary" />
            <div className="swatch-color-sm" />
            <div><code>.bg-secondary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm" />
            <div className="swatch-color-lg bg-base" />
            <div className="swatch-color-sm" />
            <div><code>.bg-base</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm" />
            <div className="swatch-color-lg bg-block" />
            <div className="swatch-color-sm" />
            <div><code>.bg-block</code></div>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <div className="row">
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-success-light" />
            <div className="swatch-color-lg bg-success" />
            <div className="swatch-color-sm bg-success-dark mb-xs" />
            <div><code>.bg-success-light</code></div>
            <div><code>.bg-success</code></div>
            <div><code>.bg-success-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-warning-light" />
            <div className="swatch-color-lg bg-warning" />
            <div className="swatch-color-sm bg-warning-dark mb-xs" />
            <div><code>.bg-warning-light</code></div>
            <div><code>.bg-warning</code></div>
            <div><code>.bg-warning-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-danger-light" />
            <div className="swatch-color-lg bg-danger" />
            <div className="swatch-color-sm bg-danger-dark mb-xs" />
            <div><code>.bg-danger-light</code></div>
            <div><code>.bg-danger</code></div>
            <div><code>.bg-danger-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-info-light" />
            <div className="swatch-color-lg bg-info" />
            <div className="swatch-color-sm bg-info-dark mb-xs" />
            <div><code>.bg-info-light</code></div>
            <div><code>.bg-info</code></div>
            <div><code>.bg-info-dark</code></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="px-sm py-sm docs-theme-default-solid color-solid-inverse">Solid
              <span className="pull-right">#031A31</span>
            </div>
            <div className="px-sm py-sm docs-theme-default-divider">Divider
              <span className="pull-right">10%</span>
            </div>
            <div className="px-sm py-sm docs-theme-default-disabled">Disabled / Hint
              <span className="pull-right">30%</span>
            </div>
            <div className="px-sm py-sm docs-theme-default-icon">Icon / Secondary
              <span className="pull-right">60%</span>
            </div>
            <div className="px-sm py-sm docs-theme-default-primary color-primary-inverse">Primary
              <span className="pull-right">90%</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <p className="color-solid pb-sm">Default Theme</p>
            <p className="color-primary type-headline font-strong pb-sm">AENEAN EU LEO QUAM PELLENTESQUE ORNARE</p>
            <p className="color-secondary type-body">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
            <hr className="color-divider pb-sm" />
            <p className="color-hint type-footnote mb-z">Etiam porta sem malesuada magna mollis euismod.</p>
          </div>
          <div className="col-xs-12 col-md-3">
            <p><code>.color-solid-default</code></p>
            <p><code>.color-divider-default</code></p>
            <p><code>.color-disabled-default</code></p>
            <p><code>.color-hint-default</code></p>
            <p><code>.color-icon-default</code></p>
            <p><code>.color-secondary-default</code></p>
            <p><code>.color-primary-default</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md bg-secondary theme-inverse">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <div className="px-sm py-sm docs-theme-inverse-solid color-solid-default">Solid
              <span className="pull-right">#FFFFFF</span>
            </div>
            <div className="px-sm py-sm docs-theme-inverse-divider">Divider
              <span className="pull-right">20%</span>
            </div>
            <div className="px-sm py-sm docs-theme-inverse-disabled">Disabled / Hint
              <span className="pull-right">40%</span>
            </div>
            <div className="px-sm py-sm docs-theme-inverse-icon color-icon-default">Icon
              <span className="pull-right">80%</span>
            </div>
            <div className="px-sm py-sm docs-theme-inverse-secondary color-secondary-default">Secondary
              <span className="pull-right">70%</span>
            </div>
            <div className="px-sm py-sm docs-theme-inverse-primary color-primary-default">Primary
              <span className="pull-right">100%</span>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <p className="color-solid pb-sm">Inverse Theme</p>
            <p className="color-primary type-headline font-strong pb-sm">AENEAN EU LEO QUAM PELLENTESQUE ORNARE</p>
            <p className="color-secondary type-body">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.</p>
            <hr className="color-divider pb-sm" />
            <p className="color-hint type-footnote mb-z">Etiam porta sem malesuada magna mollis euismod.</p>
          </div>
          <div className="col-xs-12 col-md-3">
            <p><code>.color-solid-inverse</code></p>
            <p><code>.color-divider-inverse</code></p>
            <p><code>.color-disabled-inverse</code></p>
            <p><code>.color-hint-inverse</code></p>
            <p><code>.color-icon-inverse</code></p>
            <p><code>.color-secondary-inverse</code></p>
            <p><code>.color-primary-inverse</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md my-md">
        <div className="row">
          <div className="col-xs-9">
            <button className="btn">Button</button>
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
          <div className="col-xs-3">
            <code>.btn</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-default">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-link">Link</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-(name)</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-outline-default">Default</button>
            <button className="btn btn-outline-primary">Primary</button>
            <button className="btn btn-outline-secondary">Secondary</button>
            <button className="btn btn-outline-success">Success</button>
            <button className="btn btn-outline-info">Info</button>
            <button className="btn btn-outline-warning">Warning</button>
            <button className="btn btn-outline-danger">Danger</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-outline-(name)</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-inverse-default">Default</button>
            <button className="btn btn-inverse-primary">Primary</button>
            <button className="btn btn-inverse-secondary">Secondary</button>
            <button className="btn btn-inverse-success">Success</button>
            <button className="btn btn-inverse-info">Info</button>
            <button className="btn btn-inverse-warning">Warning</button>
            <button className="btn btn-inverse-danger">Danger</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-inverse-(name)</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p>
              <button className="btn btn-primary btn-lg">Large button</button>
              <button className="btn btn-secondary btn-lg">Large button</button>
            </p>
            <p>
              <button className="btn btn-primary">Default button</button>
              <button className="btn btn-secondary">Default button</button>
            </p>
            <p>
              <button className="btn btn-primary btn-sm">Small button</button>
              <button className="btn btn-secondary btn-sm">Small button</button>
            </p>
            <p>
              <button className="btn btn-primary btn-xs">Extra small button</button>
              <button className="btn btn-secondary btn-xs">Extra small button</button>
            </p>
          </div>
          <div className="col-xs-3">
            <p><code>.btn-lg</code></p>
            <p><code>.btn</code></p>
            <p><code>.btn-sm</code></p>
            <p><code>.btn-xs</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-primary btn-rounded">Rounded button</button>
            <button className="btn btn-secondary btn-rounded">Rounded button</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-rounded</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-primary btn-ghost">Ghost button</button>
            <button className="btn btn-secondary btn-ghost">Ghost button</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-ghost</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-primary btn-block">Block button</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-block</code>
          </div>
        </div>
      </div>
    </div>

  </Container>

export default Content
