import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <div>
          <h2 className="type-title mt-xs mb-md font-strong">Display</h2>
          <table className="table mb-nn">
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
          <table className="table mb-nn">
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
          <table className="table mb-nn">
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
            <p className="color-hint type-footnote mb-nn">Etiam porta sem malesuada magna mollis euismod.</p>
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
            <p className="color-hint type-footnote mb-nn">Etiam porta sem malesuada magna mollis euismod.</p>
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
      <div className="block-item pa-md mt-sm">
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

    <div>
      <div className="block-item pa-md mt-sm">
        <div className="limite">
          <div className="contador bg-secondary">
            <div>
              <div className="type-footnote color-secondary-inverse font-strong pl-md pr-lg">Texto de prueba</div>
              <div className="type-headline color-primary-inverse pl-md pr-lg">23:12:<span className="color-disabled-inverse">45</span></div>
            </div>
            <div className="pausar" />
          </div>
        </div>
        <div className="container-agregar">
          <div className="agregar bg-primary" />
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Typography</h2>
        <h2 className="type-title mt-xs mb-md font-strong">Text alignment</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-left">Lorem ipsum dolor sit amet.</p>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
            <p className="text-right">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <p><code>.text-left</code></p>
            <p><code>.text-right</code></p>
            <p><code>.text-center</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-justify</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-nowrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-nowrap</code>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <h2 className="type-title mt-xs mb-md font-strong">Text transform</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-lowercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-lowercase</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-uppercase</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-capitalize">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-capitalize</code>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <h2 className="type-title mt-xs mb-md font-strong">Font weight and italic</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="font-strong">Lorem ipsum dolor sit amet.</p>
            <p className="font-normal">Lorem ipsum dolor sit amet.</p>
            <p className="font-italic">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <p><code>.font-strong</code></p>
            <p><code>.font-normal</code></p>
            <p><code>.font-italic</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <h2 className="type-title mt-xs mb-md font-strong">Font family</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="font-sans">Lorem ipsum dolor sit amet.</p>
            <p className="font-serif">Lorem ipsum dolor sit amet.</p>
            <p className="font-mono">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <p><code>.font-sans</code></p>
            <p><code>.font-serif</code></p>
            <p><code>.font-mono</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <h2 className="type-title mt-xs mb-md font-strong">Line height</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="line-height-small">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-small">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-small">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <code>.line-height-small</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="line-height-medium">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-medium">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-medium">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <code>.line-height-medium</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="line-height-large">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-large">Lorem ipsum dolor sit amet.</p>
            <p className="line-height-large">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col-xs-3">
            <code>.line-height-large</code>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Tables</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-condensed</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-expanded">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-expanded</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-bordered</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-striped</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-hover</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>-</th>
                  <th>Column</th>
                  <th>Column</th>
                  <th>Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
                <tr>
                  <th>Row</th>
                  <td>Text</td>
                  <td>Text</td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <code>.table .table-responsive</code>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Clearfix</h2>
        <div className="row">
          <div className="col-xs-9">
            <div className="clearfix">
              <p className="center-block bg-primary pa-xs mb-sm">Lorem ipsum dolor sit amet.</p>
              <p className="pull-right bg-primary pa-xs">Lorem ipsum dolor sit amet.</p>
              <p className="pull-left bg-primary pa-xs">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.clearfix</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Badge</h2>
        <div className="row">
          <div className="col-xs-9">
            <div className="mb-sm">
              <h1>&lt;h1&gt; <span className="badge bg-primary">Badge</span> &lt;/h1&gt;</h1>
            </div>
            <div className="my-sm">
              <h2>&lt;h2&gt; <span className="badge bg-primary">Badge</span> &lt;/h2&gt;</h2>
            </div>
            <div className="my-sm">
              <h3>&lt;h3&gt; <span className="badge bg-primary">Badge</span> &lt;/h3&gt;</h3>
            </div>
            <div className="my-sm">
              <h4>&lt;h4&gt; <span className="badge bg-primary">Badge</span> &lt;/h4&gt;</h4>
            </div>
            <div className="my-sm">
              <h5>&lt;h5&gt; <span className="badge bg-primary">Badge</span> &lt;/h5&gt;</h5>
            </div>
            <div className="my-sm">
              <h6>&lt;h6&gt; <span className="badge bg-primary">Badge</span> &lt;/h6&gt;</h6>
            </div>
          </div>
          <div className="col-xs-3">
            <p className="mb-sm"><code>.badge</code></p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9">
            <div className="my-sm">
              <span className="badge badge-default">Badge default</span>
            </div>
            <div className="my-sm">
              <span className="badge badge-primary">Badge primary</span>
            </div>
            <div className="my-sm">
              <span className="badge badge-success">Badge success</span>
            </div>
            <div className="my-sm">
              <span className="badge badge-info">Badge info</span>
            </div>
            <div className="my-sm">
              <span className="badge badge-warning">Badge warning</span>
            </div>
            <div className="my-sm">
              <span className="badge badge-danger">Badge danger</span>
            </div>
            <div className="my-sm">
              <span className="badge">Badge</span>
            </div>
          </div>
          <div className="col-xs-3">
            <p className="my-sm"><code>.badge .badge-default</code></p>
            <p className="my-sm"><code>.badge .badge-primary</code></p>
            <p className="my-sm"><code>.badge .badge-success</code></p>
            <p className="my-sm"><code>.badge .badge-info</code></p>
            <p className="my-sm"><code>.badge .badge-warning</code></p>
            <p className="my-sm"><code>.badge .badge-danger</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Display property</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-inline docs-theme-default-secondary pa-xs color-primary-inverse">Display-inline</div>
            <div className="display-inline docs-theme-default-disabled pa-xs">Display-inline</div>
            <div className="display-inline docs-theme-default-secondary pa-xs color-primary-inverse">Display-inline</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-inline</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-inblock docs-theme-default-secondary pa-xs color-primary-inverse">Display-inblock</div>
            <div className="display-inblock docs-theme-default-disabled pa-xs">Display-inblock</div>
            <div className="display-inblock docs-theme-default-secondary pa-xs color-primary-inverse">Display-inblock</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-inblock</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-block docs-theme-default-secondary pa-xs color-primary-inverse">Display-block</div>
            <div className="display-block docs-theme-default-disabled pa-xs">Display-block</div>
            <div className="display-block docs-theme-default-secondary pa-xs color-primary-inverse">Display-block</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-block</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="no-float docs-theme-default-secondary pa-xs color-primary-inverse">No float</div>
          </div>
          <div className="col-xs-3">
            <p><code>.no-float</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="no-float affix docs-theme-default-secondary pa-xs color-primary-inverse">Affix</div>
          </div>
          <div className="col-xs-3">
            <p><code>.affix</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Vertical alignment</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="to-align">
              <tbody>
                <tr>
                  <td className="align-top">top</td>
                  <td className="align-middle">middle</td>
                  <td className="align-bottom">bottom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <p><code>.align-top</code></p>
            <p><code>.align-middle</code></p>
            <p><code>.align-bottom</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Spacing</h2>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <table className="table">
              <tbody>
                <tr>
                  <th>Property</th>
                  <th>Sides</th>
                  <th>Size</th>
                </tr>
                <tr>
                  <td>
                    <p>m = Margin</p>
                    <p>p = Padding</p>
                  </td>
                  <td>
                    <p>a = All</p>
                    <p>y = Vertical axis</p>
                    <p>x = Horizontal axis</p>
                    <p>t = Top</p>
                    <p>r = Right</p>
                    <p>b = Bottom</p>
                    <p>l = Left</p>
                  </td>
                  <td>
                    <p>nn = None</p>
                    <p>xxs = Double extra small</p>
                    <p>xs = Extra small</p>
                    <p>sm = Small</p>
                    <p>md = Medium</p>
                    <p>lg = Large</p>
                    <p>xl = Extra large</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-3">
            <p>Examples</p>
            <br />
            <p><code>.ma-nn</code></p>
            <p><code>.mt-xs</code></p>
            <p><code>.my-md</code></p>
            <br />
            <p><code>.pl-xxs</code></p>
            <p><code>.px-lg</code></p>
            <p><code>.pb-sm</code></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="block-item pa-md mt-sm">
        <h2 className="type-title mt-xs mb-md font-strong">Button groups</h2>
      </div>
    </div>

  </Container>

export default Content
