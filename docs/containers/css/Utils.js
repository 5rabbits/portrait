import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong" id="contents">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#background-colors" className="type-subhead">Background colors</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#clearfix" className="type-subhead">Clearfix</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#display-property" className="type-subhead">Display property</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#flexbox" className="type-subhead">Flexbox</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#text" className="type-subhead">Text</a>
            <ul className="pl-md type-body">
              <li>Text alignment</li>
              <li>Text transform</li>
              <li>Font weight and italic</li>
              <li>Font family</li>
              <li>Line height</li>
            </ul>
          </li>
          <li className="pb-xs type-title">
            <a href="#themes" className="type-subhead">Themes</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#typography" className="type-subhead">Typography</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#spacing" className="type-subhead">Spacing</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#vertical-alignment" className="type-subhead">Vertical alignment</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="index-items" id="background-colors">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Background colors</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-sm">Brand colors</p>
        <p className="type-body mb-sm">Colors for the brand identity.</p>
        <div className="row">
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-primary mb-xs" />
            <div className="mt-sm"><code>.bg-primary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-secondary mb-xs" />
            <div className="mt-sm"><code>.bg-secondary</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-base mb-xs" />
            <div className="mt-sm"><code>.bg-base</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-lg bg-block mb-xs" />
            <div className="mt-sm"><code>.bg-block</code></div>
          </div>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Semantic colors</p>
        <div className="row">
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-success-light" />
            <div className="swatch-color-lg bg-success" />
            <div className="swatch-color-sm bg-success-dark mb-xs" />
            <div className="mt-sm"><code>.bg-success-light</code></div>
            <div className="mt-sm"><code>.bg-success</code></div>
            <div className="mt-sm"><code>.bg-success-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-warning-light" />
            <div className="swatch-color-lg bg-warning" />
            <div className="swatch-color-sm bg-warning-dark mb-xs" />
            <div className="mt-sm"><code>.bg-warning-light</code></div>
            <div className="mt-sm"><code>.bg-warning</code></div>
            <div className="mt-sm"><code>.bg-warning-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-danger-light" />
            <div className="swatch-color-lg bg-danger" />
            <div className="swatch-color-sm bg-danger-dark mb-xs" />
            <div className="mt-sm"><code>.bg-danger-light</code></div>
            <div className="mt-sm"><code>.bg-danger</code></div>
            <div className="mt-sm"><code>.bg-danger-dark</code></div>
          </div>
          <div className="col-xs-3">
            <div className="swatch-color-sm bg-info-light" />
            <div className="swatch-color-lg bg-info" />
            <div className="swatch-color-sm bg-info-dark mb-xs" />
            <div className="mt-sm"><code>.bg-info-light</code></div>
            <div className="mt-sm"><code>.bg-info</code></div>
            <div className="mt-sm"><code>.bg-info-dark</code></div>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="clearfix">
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

    <div className="index-items" id="display-property">
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

    <div className="index-items" id="flexbox">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Flexbox</p>
        <p className="type-body mb-nn">Flexbox is a layout mode to accomodate elements in a page
        into a predectible way in different screen sizes and display divices.</p>
      </div>
      <div className="block-item pa-md">
        <div className="row">
          <div className="col-xs-9">
            <div className="flex-container flex-vertical mb-sm">
              <div className="bg-warning">Div 1</div>
              <div className="bg-info-light">Div 2</div>
              <div className="bg-warning">Div 3</div>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.flex-container</code></p>
            <p><code>.flex-vertical</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="flex-container flex-horizontal flex-height bg-secondary mb-sm">
              <div className="bg-warning">Div 1</div>
              <div className="bg-info-light">Div 2</div>
              <div className="bg-warning">Div 3</div>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.flex-container</code></p>
            <p><code>.flex-horizontal</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="flex-container flex-horizontal flex-vertical-align flex-height bg-secondary mb-sm">
              <div className="bg-warning">Div 1</div>
              <div className="bg-info-light">Div 2</div>
              <div className="bg-warning">Div 3</div>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.flex-container</code></p>
            <p><code>.flex-horizontal</code></p>
            <p><code>.flex-vertical-align</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="flex-container flex-horizontal flex-vertical-align flex-height bg-secondary">
              <div className="flex-content bg-warning">Div 1</div>
              <div className="flex-content bg-info-light">Div 2</div>
              <div className="flex-content bg-warning">Div 3</div>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.flex-container</code></p>
            <p><code>.flex-horizontal</code></p>
            <p><code>.flex-vertical-align</code></p>
            <p><code>.flex-content</code></p>
          </div>
        </div>
        <hr className="color-divider my-md" />
        <div className="row">
          <div className="col-xs-9">
            <div className="flex-container flex-horizontal flex-vertical-align flex-height bg-secondary">
              <div className="bg-warning">Div 1</div>
              <div className="bg-info-light">Div 2</div>
              <div className="bg-warning">Div 3</div>
            </div>
          </div>
          <div className="col-xs-3">
            <p><code>.flex-container</code></p>
            <p><code>.flex-horizontal</code></p>
            <p><code>.flex-vertical-align</code></p>
            <p><code>.flex-content</code></p>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="text">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Text</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-sm">Text alignment</p>
        <p className="type-body mb-sm">Realign text with these classes.</p>
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
        <p className="type-title font-strong mb-sm">Text transform</p>
        <p className="type-body mb-sm">These classes controls the capitalization of text.</p>
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
        <p className="type-title font-strong mb-sm">Font weight and italic</p>
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
        <p className="type-title font-strong mb-sm">Font family</p>
        <p className="type-body mb-sm">These are three generic families in Portrait.</p>
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
        <p className="type-title font-strong mb-sm">Line height</p>
        <p className="type-body mb-sm">Specify the space between the lines.</p>
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

    <div className="index-items" id="themes">
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

    <div className="index-items" id="typography">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Typography</p>
        <p className="type-body mb-nn">Portrait includes customized typography
          for display, headings and copy.</p>
      </div>
      <div className="block-item pa-md">
        <div>
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

    <div className="index-items" id="spacing">
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
        <div className="row">
          <div className="col-xs-9">
            <p className="pt-xxs bg-primary" />
            <p className="pt-xs bg-primary" />
            <p className="pt-sm bg-primary" />
            <p className="pt-md bg-primary" />
            <p className="pt-lg bg-primary" />
            <p className="pt-xl bg-primary" />
          </div>
          <div className="col-xs-3">
            <p><code>.pt-xxs</code></p>
            <p><code>.pt-xs</code></p>
            <p><code>.pt-sm</code></p>
            <p><code>.pt-md</code></p>
            <p><code>.pt-lg</code></p>
            <p><code>.pt-xl</code></p>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="vertical-alignment">
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
    <a href="#contents"><button className="btn btn-lg btn-to-top">Up</button></a>
  </Container>

export default Content
