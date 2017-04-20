import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#badge" className="type-subhead">Badge</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#buttons" className="type-subhead">Buttons</a>
            <ul className="pl-md type-body">
              <li>Types</li>
              <li>Sizes</li>
              <li>Other buttons</li>
            </ul>
          </li>
          <li className="pb-xs type-title">
            <a href="#button-groups" className="type-subhead">Button groups</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#input-groups" className="type-subhead">Input groups</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#list-groups" className="type-subhead">List groups</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#forms" className="type-subhead">Forms</a>
            <ul className="pl-md type-body">
              <li>Form groups</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm" id="badge">
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
      <div className="block-item pa-md mt-sm" id="buttons">
        <p className="type-headline font-strong mb-nn">Buttons</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-nn">Types</p>
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
      <div className="block-item pa-md mt-sm" id="button-groups">
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
      <div className="block-item pa-md mt-sm" id="input-groups">
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
      <div className="block-item pa-md mt-sm" id="list-groups">
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
      <div className="block-item pa-md mt-sm" id="forms">
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
  </Container>

export default Content
