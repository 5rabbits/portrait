import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <div>
          <p>Portrait includes customized typography
          for display, headings and copy.</p>
          <hr className="color-divider my-md" />
          <p className="type-title mt-xs mb-md font-strong">Display</p>
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
          <p className="type-title mb-md font-strong">Headings</p>
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
          <p className="type-title mb-md font-strong">Copy</p>
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
        <p className="type-headline font-strong mb-nn">Background colors</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-body font-strong">Brand colors</p>
        <p className="type-body mb-sm">Colors for the brand identity.</p>
        <div className="row">
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-primary mb-xs" />
            <div><code>.bg-primary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-secondary mb-xs" />
            <div><code>.bg-secondary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-base mb-xs" />
            <div><code>.bg-base</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-block mb-xs" />
            <div><code>.bg-block</code></div>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-body font-strong">Semantic colors</p>
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
        <p className="type-headline font-strong">Themes</p>
        <p className="type-body mb-nn">These are the colors for default and inverse themes.</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-body mb-sm">These colors are used in light backgrounds.</p>
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
      <div className="block-item pa-md bg-primary theme-inverse">
        <p className="type-body mb-sm">These colors are used in dark backgrounds.</p>
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
        <p className="type-headline font-strong mb-nn">Buttons</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-nn">Types of buttons</p>
        <hr className="color-divider my-md" />
        <p className="type-body">Basic button</p>
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
        <p className="type-body">Predefined button styles, each serving its own semantic purpose.</p>
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
        <p className="type-body">Remove all background colors on any button.</p>
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
        <p className="type-body">Remove all background colors and borders on any button.</p>
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
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-sm">Sizes</p>
        <p className="type-body mb-sm">These classes change the font size and the padding of a button.</p>
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
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Other buttons</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <button className="btn btn-primary btn-block">Block button</button>
          </div>
          <div className="col-xs-3">
            <code>.btn-block</code>
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
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <div className="timer-container">
          <div className="timer bg-secondary py-xs">
            <div>
              <div className="type-footnote color-secondary-inverse font-strong pl-md pr-lg">Texto de prueba</div>
              <div className="type-headline color-primary-inverse pl-md pr-lg">23:12:<span className="color-disabled-inverse">45</span></div>
            </div>
            <div className="timer-controler" />
          </div>
        </div>
        <div className="timer-add">
          <div className="add bg-primary" />
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Typography</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong">Text alignment</p>
        <p className="type-subhead">Realign text with these classes.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-left">Aligns the text to the left.</p>
            <p className="text-center">Centers the text.</p>
            <p className="text-right">Aligns the text to the right.</p>
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
        <p className="type-subhead font-strong">Text transform</p>
        <p className="type-subhead">These classes controls the capitalization of text.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-lowercase">Transforms all characters to lowercase.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-lowercase</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-uppercase">Transforms all characters to uppercase.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-uppercase</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="text-capitalize">Transforms the first character of each word to uppercase.</p>
          </div>
          <div className="col-xs-3">
            <code>.text-capitalize</code>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong">Font weight and italic</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="font-strong">This line rendered as bold text.</p>
            <p className="font-normal">This line rendered as normal text.</p>
            <p className="font-italic">This line rendered as italized text.</p>
          </div>
          <div className="col-xs-3">
            <p><code>.font-strong</code></p>
            <p><code>.font-normal</code></p>
            <p><code>.font-italic</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong">Font family</p>
        <p className="type-subhead">These are three generic families in Portrait.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <p className="font-sans">A line with sans-serif.</p>
            <p className="font-serif">A line with serif.</p>
            <p className="font-mono">A line with monospace.</p>
          </div>
          <div className="col-xs-3">
            <p><code>.font-sans</code></p>
            <p><code>.font-serif</code></p>
            <p><code>.font-mono</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong">Line height</p>
        <p className="type-subhead">Specify the space between the lines.</p>
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
        <p className="type-headline font-strong">Tables</p>
        <p className="type-body mb-nn">Use the base class <code>.table</code> to any <code>&lt;table&gt;</code>,
        then extend with custom styles or our various included modifier classes.</p>
      </div>
      <div className="block-item pa-md">
        <p className="mb-md">Basic Example</p>
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
        <p className="mb-md">Make tables more compact by cutting cell padding in half.</p>
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
        <p className="mb-md">Make tables more expanded by duplicating cell padding.</p>
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
        <p className="mb-md">Borders on all sides of the table and cells.</p>
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
        <p className="mb-md">Add zebra-striping to any table row within the <code>&lt;tbody&gt;</code></p>
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
        <p className="mb-md">To enable a hover state on table rows within a <code>&lt;tbody&gt;</code></p>
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
        <p className="mb-md">Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code>
        to make them scroll horizontal on small devices.</p>
        <div className="row">
          <div className="col-xs-9">
            <div className="table-responsive">
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
          </div>
          <div className="col-xs-3">
            <p><code>&lt;div class=&quot;table-responsive&quot;&gt;</code></p>
            <p className="ml-md"><code>&lt;table class=&quot;table&quot;&gt;</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Clearfix</p>
        <p className="type-body">Easily clear floats by adding <code>.clearfix</code>to the parent element.</p>
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
        <p className="type-headline font-strong mb-nn">Badge</p>
        <hr className="color-divider my-md" />
        <p className="mb-md">Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
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
        <hr className="color-divider my-sm" />
        <p>Add any of these modifier classes to change the appearance of a badge.</p>
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
        <p className="type-headline font-strong">Display property</p>
        <p className="type-body">The display property specifies the type of box used for an HTML element.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-inline docs-theme-default-secondary pa-xs color-primary-inverse">Item 1</div>
            <div className="display-inline docs-theme-default-disabled pa-xs">Item 2</div>
            <div className="display-inline docs-theme-default-secondary pa-xs color-primary-inverse">Item 3</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-inline</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-inblock docs-theme-default-secondary pa-xs color-primary-inverse">Item 1</div>
            <div className="display-inblock docs-theme-default-disabled pa-xs">Item 2</div>
            <div className="display-inblock docs-theme-default-secondary pa-xs color-primary-inverse">Item 3</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-inblock</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="display-block docs-theme-default-secondary pa-xs color-primary-inverse">Item 1</div>
            <div className="display-block docs-theme-default-disabled pa-xs">Item 2</div>
            <div className="display-block docs-theme-default-secondary pa-xs color-primary-inverse">Item 3</div>
          </div>
          <div className="col-xs-3">
            <p><code>.display-block</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="no-float docs-theme-default-secondary pa-xs color-primary-inverse">Item 1</div>
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
        <p className="type-headline font-strong">Vertical alignment</p>
        <p className="type-body mb-nn">Top: The element is aligned with the top of the element that content it.</p>
        <p className="type-body mb-nn">Middle: The element is placed in the middle of the element that content it.</p>
        <p className="type-body mb-nn">Bottom: The element is aligned with the lowest part of the element that content it.</p>
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
        <p className="type-headline font-strong">Spacing</p>
        <p className="type-body mb-nn">Assign margin and padding values to an element or a subset
        of its sides with shorthand classes. Includes support for individual properties,
        all properties, and vertical and horizontal properties.</p>
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
        <p className="type-headline font-strong">Button groups</p>
        <p className="type-body mb-nn">Group a series of buttons together on a single line with the button group.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="btn-group">
              <button className="btn btn-default">1</button>
              <button className="btn btn-default">2</button>
              <button className="btn btn-default">3</button>
              <button className="btn btn-default">4</button>
              <button className="btn btn-default">5</button>
              <button className="btn btn-default">6</button>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-group</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="btn-toolbar">
              <div className="btn-group">
                <button className="btn btn-default">1</button>
                <button className="btn btn-default">2</button>
                <button className="btn btn-default">3</button>
              </div>
              <div className="btn-group">
                <button className="btn btn-default">4</button>
                <button className="btn btn-default">5</button>
                <button className="btn btn-default">6</button>
              </div>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-toolbar</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row my-sm">
          <div className="col-xs-9">
            <div className="btn-group-sm">
              <button className="btn btn-default">1</button>
              <button className="btn btn-default">2</button>
              <button className="btn btn-default">3</button>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-group-sm</code>
          </div>
        </div>
        <div className="row my-sm">
          <div className="col-xs-9">
            <div className="btn-group-md">
              <button className="btn btn-default">1</button>
              <button className="btn btn-default">2</button>
              <button className="btn btn-default">3</button>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-group-md</code>
          </div>
        </div>
        <div className="row my-sm">
          <div className="col-xs-9">
            <div className="btn-group-lg">
              <button className="btn btn-default">1</button>
              <button className="btn btn-default">2</button>
              <button className="btn btn-default">3</button>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-group-lg</code>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="btn-group-vertical">
              <button className="btn btn-default">1</button>
              <button className="btn btn-default">2</button>
              <button className="btn btn-default">3</button>
            </div>
          </div>
          <div className="col-xs-3">
            <code>.btn-group-vertical</code>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Input groups</p>
        <p className="type-body mb-nn">Easily extend form control by adding text, buttons, or button group.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.input-group</code></p>
            <p className="pl-md"><code>.input-group-addon</code></p>
            <p className="pl-md"><code>.form-control</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <p className="mb-md">Add the relative form sizing classes to the <code>.input-group</code> and
        contents within will automatically resize.</p>
        <div className="row">
          <div className="col-xs-9">
            <div className="input-group input-group-sm">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <code>.input-group .input-group-sm</code>
          </div>
        </div>
        <div className="row my-md">
          <div className="col-xs-9">
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <code>.input-group</code>
          </div>
        </div>
        <div className="row my-md">
          <div className="col-xs-9">
            <div className="input-group input-group-lg">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <code>.input-group .input-group-lg</code>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">List groups</p>
        <p className="type-body mb-nn">List groups are components for displaying a series of content.
        List groups can be modified and extended to support just about any content within.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <ul className="list-group">
              <li className="list-group-item">lorem ipsum dolor sit amet</li>
              <li className="list-group-item">consectetur adipisicing elit</li>
              <li className="list-group-item">sed do eiusmod tempor incididunt</li>
            </ul>
          </div>
          <div className="col-xs-3">
            <p><code>.list-group</code></p>
            <p className="pl-md"><code>.list-group-item</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <p className="mb-md">Use contextual classes to style list items with a stateful background and color.</p>
        <div className="row">
          <div className="col-xs-9">
            <ul className="list-group">
              <li className="list-group-item">lorem ipsum dolor sit amet</li>
              <li className="list-group-item list-group-item-success">consectetur adipisicing elit</li>
              <li className="list-group-item list-group-item-info">sed do eiusmod tempor incididunt</li>
              <li className="list-group-item list-group-item-warning">ut labore et dolore magna aliqua</li>
              <li className="list-group-item list-group-item-danger">ut enim ad minim veniam</li>
            </ul>
          </div>
          <div className="col-xs-3">
            <p><code>.list-group-item</code></p>
            <p className="mt-sm"><code>.list-group-item .list-group-item-success</code></p>
            <p className="mt-sm"><code>.list-group-item .list-group-item-info</code></p>
            <p className="mt-sm"><code>.list-group-item .list-group-item-warning</code></p>
            <p className="mt-sm"><code>.list-group-item .list-group-item-danger</code></p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Forms</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div>
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>&lt;input class=&quot;form-control&quot;&gt;</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div>
              <label>Select</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>&lt;select class=&quot;form-control&quot;&gt;</code></p>
            <p className="pl-sm"><code>&lt;option&gt;</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div>
              <label>Multiple select</label>
              <select multiple className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>&lt;select multiple class=&quot;form-control&quot;&gt;</code></p>
            <p className="pl-sm"><code>&lt;option&gt;</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div>
              <label>Textarea</label>
              <textarea className="form-control" />
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>&lt;textarea class=&quot;form-control&quot;&gt;</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div>
              <input type="file" className="form-control-file" />
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>&lt;input type=&quot;file&quot; className=&quot;form-control-file
            &quot;/&gt;</code></p>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong">Form groups</p>
        <p className="type-body mb-nn">The <code>.form-group</code> add structure to forms. Add this class in
        a div tag as the parent of the form to give it a margin bottom to separate them.</p>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Multiple select</label>
              <select multiple className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <input type="file" className="form-control-file" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Variables</p>
      </div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Colors</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Generic colors</p>
        <table className="table">
          <tbody>
            <tr>
              <td><div className="brand-color pa-sm pull-left" /></td>
              <td><code>$color-brand</code></td>
              <td>#0E82F5</td>
            </tr>
            <tr>
              <td><div className="highlight-color pa-sm pull-left" /></td>
              <td><code>$color-highlight</code></td>
              <td>#FFF880</td>
            </tr>
            <tr>
              <td><div className="accent-color pa-sm pull-left" /></td>
              <td><code>$color-accent</code></td>
              <td><code>$color-brand</code></td>
            </tr>
            <tr>
              <td><div className="primary-color pa-sm pull-left" /></td>
              <td><code>$color-primary</code></td>
              <td><code>$color-accent</code></td>
            </tr>
            <tr>
              <td><div className="secondary-color pa-sm pull-left" /></td>
              <td><code>$color-secondary</code></td>
              <td>#5E7C8B</td>
            </tr>
            <tr>
              <td><div className="base-color pa-sm pull-left" /></td>
              <td><code>$color-base</code></td>
              <td>tint (<code>$color-secondary</code>, 90%)</td>
            </tr>
            <tr>
              <td><div className="block-color pa-sm pull-left" /></td>
              <td><code>$color-block</code></td>
              <td>#FFFFFF</td>
            </tr>
            <tr>
              <td><div className="text-color pa-sm pull-left" /></td>
              <td><code>$color-text</code></td>
              <td>shade (<code>$color-brand</code>, 80%)</td>
            </tr>
            <tr>
              <td><div className="inverse-color pa-sm pull-left" /></td>
              <td><code>$color-inverse</code></td>
              <td>#FFFFFF</td>
            </tr>
            <tr>
              <td><div className="success-color pa-sm pull-left" /></td>
              <td><code>$color-success</code></td>
              <td>#5cb85c</td>
            </tr>
            <tr>
              <td><div className="info-color pa-sm pull-left" /></td>
              <td><code>$color-info</code></td>
              <td>#5bc0de</td>
            </tr>
            <tr>
              <td><div className="warning-color pa-sm pull-left" /></td>
              <td><code>$color-warning</code></td>
              <td>#f0ad4e</td>
            </tr>
            <tr>
              <td><div className="danger-color pa-sm pull-left" /></td>
              <td><code>$color-danger</code></td>
              <td>#d9534f</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Theme colors</p>
        <p className="type-body font-strong mb-sm">Default</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Solid</td>
              <td><code>$color-dark-solid</code></td>
              <td>dark-text-color(solid)</td>
            </tr>
            <tr>
              <td>Icon</td>
              <td><code>$color-dark-icon</code></td>
              <td>dark-text-color(icon)</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td><code>$color-dark-primary</code></td>
              <td>dark-text-color(primary)</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td><code>$color-dark-secondary</code></td>
              <td>dark-text-color(secondary)</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td><code>$color-dark-disabled</code></td>
              <td>dark-text-color(disabled)</td>
            </tr>
            <tr>
              <td>Hint</td>
              <td><code>$color-dark-hint</code></td>
              <td>dark-text-color(hint)</td>
            </tr>
            <tr>
              <td>Divider</td>
              <td><code>$color-dark-divider</code></td>
              <td>dark-text-color(divider)</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverse</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Solid</td>
              <td><code>$color-light-solid</code></td>
              <td>light-text-color(solid)</td>
            </tr>
            <tr>
              <td>Icon</td>
              <td><code>$color-light-icon</code></td>
              <td>light-text-color(icon)</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td><code>$color-light-primary</code></td>
              <td>light-text-color(primary)</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td><code>$color-light-secondary</code></td>
              <td>light-text-color(secondary)</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td><code>$color-light-disabled</code></td>
              <td>light-text-color(disabled)</td>
            </tr>
            <tr>
              <td>Hint</td>
              <td><code>$color-light-hint</code></td>
              <td>light-text-color(hint)</td>
            </tr>
            <tr>
              <td>Divider</td>
              <td><code>$color-light-divider</code></td>
              <td>light-text-color(divider)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="block-item pa-md">
      <p className="type-headline font-strong mb-nn">Layout</p>
    </div>
    <div className="block-item pa-md">
      <p className="type-subhead font-strong mb-md">App</p>
      <table className="table mb-md">
        <tbody>
          <tr>
            <td><code>$layout-navigation-size</code></td>
            <td>48px</td>
          </tr>
          <tr>
            <td><code>$layout-navigation-background</code></td>
            <td>shade ($color-brand, 65%)</td>
          </tr>
        </tbody>
      </table>
      <p className="type-subhead font-strong mb-md">Container</p>
      <table className="table mb-md">
        <tbody>
          <tr>
            <td><code>$container-default-width</code></td>
            <td>1120px</td>
          </tr>
          <tr>
            <td><code>$container-page-width</code></td>
            <td>1120px</td>
          </tr>
          <tr>
            <td><code>$container-max-width</code></td>
            <td>1400px</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Mixins</p>
      </div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Buttons</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Size</p>
      </div>
    </div>

  </Container>

export default Content
