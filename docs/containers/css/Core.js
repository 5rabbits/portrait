import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong" id="contents">Contents</p>
        <div className="row">
          <div className="col-xs-6">
            <ul className="pl-md">
              <li className="pb-xs type-title">
                <a href="#badges" className="type-subhead">Badges</a>
                <ul className="pl-md type-body">
                  <li>Variant</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#border-radius" className="type-subhead">Border-radius</a>
              </li>
              <li className="pb-xs type-title">
                <a href="#buttons" className="type-subhead">Buttons</a>
                <ul className="pl-md type-body">
                  <li>Variant</li>
                  <li>Outline variant</li>
                  <li>Inverse variant</li>
                  <li>Size</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#colors" className="type-subhead">Colors</a>
                <ul className="pl-md type-body">
                  <li>Generic colors</li>
                  <li>Brand colors</li>
                  <li>Theme colors</li>
                  <li>Others</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#container-sizes" className="type-subhead">Container sizes</a>
                <ul className="pl-md type-body">
                  <li>Small screen (tablet)</li>
                  <li>Medium screen (desktop)</li>
                  <li>Large screen (wide desktop)</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#grid" className="type-subhead">Grid</a>
                <ul className="pl-md type-body">
                  <li>Variables</li>
                  <li>Gutters</li>
                  <li>Grid framework</li>
                  <li>Grid mixins</li>
                  <li>Grid system</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#layer" className="type-subhead">Layer</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6">
            <ul className="pl-md">
              <li className="pb-xs type-title">
                <a href="#layout" className="type-subhead">Layout</a>
                <ul className="pl-md type-body">
                  <li>App</li>
                  <li>Container</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#list-group" className="type-subhead">List-group</a>
                <ul className="pl-md type-body">
                  <li>Variant</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#navbar" className="type-subhead">Navbar</a>
                <ul className="pl-md type-body">
                  <li>Inverted navbar</li>
                  <li>Inverted navbar links</li>
                  <li>Inverted navbar brand label</li>
                  <li>Inverted navbar toggle</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#media-queries-breakpoints" className="type-subhead">Media queries breakpoints</a>
                <ul className="pl-md type-body">
                  <li>Extra small screen (phone)</li>
                  <li>Small screen (tablet)</li>
                  <li>Medium screen (desktop)</li>
                  <li>Large screen (wide desktop)</li>
                  <li>Maximum</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#screen-sizes" className="type-subhead">Screen sizes</a>
              </li>
              <li className="pb-xs type-title">
                <a href="#themes" className="type-subhead">Themes</a>
                <ul className="pl-md type-body">
                  <li>Base</li>
                  <li>Classes</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#typography" className="type-subhead">Typography</a>
                <ul className="pl-md type-body">
                  <li>Type</li>
                </ul>
              </li>
              <li className="pb-xs type-title">
                <a href="#z-index" className="type-subhead">z-index</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="badges">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Badges</p>
      </div>
      <div className="block-item pa-md">
        <div>
          <p className="type-body font-strong mb-nn">Variant <code className="font-normal">@mixin label-variant($color)</code></p>
          <div className="pt-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.badge-success &#123;@include label-variant ($label-success-bg);&#125;</pre>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="border-radius">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Border-radius</p>
      </div>
      <div className="block-item pa-md">
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$border-radius-base</code></td>
              <td>3px</td>
            </tr>
            <tr>
              <td><code>$border-radius-large</code></td>
              <td><code>$border-radius-base</code></td>
            </tr>
            <tr>
              <td><code>$border-radius-small</code></td>
              <td><code>$border-radius-base</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="buttons">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Buttons</p>
      </div>
      <div className="block-item pa-md">
        <div>
          <p className="type-body mb-nn font-strong">Variant <code className="font-normal">@mixin button-variant($color, $background, $border)</code></p>
          <div className="py-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.btn-default &#123;@include button-variant ($btn-default-color, $btn-default-bg, $btn-default-border);&#125;</pre>
          </div>
        </div>
        <hr className="color-divider" />
        <div>
          <p className="type-body font-strong mb-nn mt-sm">Outline variant <code className="font-normal">@mixin button-outline-variant($color)</code></p>
          <div className="py-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.btn-outline-primary &#123;@include button-outline-variant ($btn-primary-bg);&#125;</pre>
          </div>
        </div>
        <hr className="color-divider" />
        <div>
          <p className="type-body font-strong mb-nn mt-sm">Inverse variant <code className="font-normal">@mixin button-inverse-variant($color)</code></p>
          <div className="py-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.btn-inverse-secondary &#123;@include button-inverse-variant ($btn-secondary-bg);&#125;</pre>
          </div>
        </div>
        <hr className="color-divider" />
        <div>
          <p className="type-body font-strong mb-nn mt-sm">Size <code className="font-normal">@mixin button-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius)</code></p>
          <div className="pt-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.btn-xs &#123;@include button-size ($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);&#125;</pre>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="colors">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Colors</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Generic colors</p>
        <table className="table mb-nn table-width">
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
        <p className="type-title font-strong mb-md">Brand colors</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$brand-primary</code></td>
              <td><code>$color-primary</code></td>
            </tr>
            <tr>
              <td><code>$brand-success</code></td>
              <td><code>$color-success</code></td>
            </tr>
            <tr>
              <td><code>$brand-info</code></td>
              <td><code>$color-info</code></td>
            </tr>
            <tr>
              <td><code>$brand-warning</code></td>
              <td><code>$color-warning</code></td>
            </tr>
            <tr>
              <td><code>$brand-danger</code></td>
              <td><code>$color-danger</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-sm">Theme colors</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td>Default</td>
              <td><code>$theme-dark</code></td>
              <td><code>$color-text</code></td>
            </tr>
            <tr>
              <td>Inverse</td>
              <td><code>$theme-light</code></td>
              <td><code>$color-inverse</code></td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Default</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td>Solid</td>
              <td><code>$color-dark-solid</code></td>
              <td>#031A31</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td><code>$color-dark-primary</code></td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Icon</td>
              <td><code>$color-dark-icon</code></td>
              <td>60%</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td><code>$color-dark-secondary</code></td>
              <td>60%</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td><code>$color-dark-disabled</code></td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Hint</td>
              <td><code>$color-dark-hint</code></td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Divider</td>
              <td><code>$color-dark-divider</code></td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverse</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td>Solid</td>
              <td><code>$color-light-solid</code></td>
              <td>#FFFFFF</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td><code>$color-light-primary</code></td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Icon</td>
              <td><code>$color-light-icon</code></td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td><code>$color-light-secondary</code></td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td><code>$color-light-disabled</code></td>
              <td>40%</td>
            </tr>
            <tr>
              <td>Hint</td>
              <td><code>$color-light-hint</code></td>
              <td>40%</td>
            </tr>
            <tr>
              <td>Divider</td>
              <td><code>$color-light-divider</code></td>
              <td>20%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Others</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$shade-color</code></td>
              <td>#000</td>
            </tr>
            <tr>
              <td><code>$tint-color</code></td>
              <td>#FFF</td>
            </tr>
            <tr>
              <td><code>$tone-color</code></td>
              <td>gray</td>
            </tr>
            <tr>
              <td><code>$base-background</code></td>
              <td>#F9F9F9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="container-sizes">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Container sizes</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Small screen (tablet)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$container-tablet</code></td>
              <td>(720px + <code>$grid-gutter-width</code>)</td>
            </tr>
            <tr>
              <td><code>$container-sm</code></td>
              <td><code>$container-tablet</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Medium screen (desktop)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$container-desktop</code></td>
              <td>(940px + <code>$grid-gutter-width</code>)</td>
            </tr>
            <tr>
              <td><code>$container-md</code></td>
              <td><code>$container-desktop</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Large screen (wide desktop)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$container-large-desktop</code></td>
              <td>(1140px + <code>$grid-gutter-width</code>)</td>
            </tr>
            <tr>
              <td><code>$container-lg</code></td>
              <td><code>$container-large-desktop</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="grid">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Grid</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Variables</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$grid-columns</code></td>
              <td>12</td>
            </tr>
            <tr>
              <td><code>$grid-gutter-width</code></td>
              <td>32px</td>
            </tr>
            <tr>
              <td><code>$grid-float-breakpoint</code></td>
              <td><code>$screen-sm-min</code></td>
            </tr>
            <tr>
              <td><code>$grid-float-breakpoint-max</code></td>
              <td>(<code>$grid-float-breakpoint</code> - 1)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Gutters</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$unit</code></td>
              <td>8px</td>
            </tr>
            <tr>
              <td><code>$gutter-xxs</code></td>
              <td><code>$unit</code> / 2</td>
            </tr>
            <tr>
              <td><code>$gutter-xs</code></td>
              <td><code>$unit</code> * 1</td>
            </tr>
            <tr>
              <td><code>$gutter-sm</code></td>
              <td><code>$unit</code> * 2</td>
            </tr>
            <tr>
              <td><code>$gutter</code></td>
              <td><code>$unit</code> * 4</td>
            </tr>
            <tr>
              <td><code>$gutter-md</code></td>
              <td><code>$unit</code> * 4</td>
            </tr>
            <tr>
              <td><code>$gutter-lg</code></td>
              <td><code>$unit</code> * 8</td>
            </tr>
            <tr>
              <td><code>$gutter-xl</code></td>
              <td><code>$unit</code> * 12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-xs">Grid Framework</p>
        <p className="type-body mb-md">Used only by Bootstrap to generate
         the correct number of grid classes given any value of `$grid-columns`.</p>
        <table className="table mb-nn">
          <tbody>
            <tr>
              <td>Make grid columns</td>
              <td><code>@mixin make-grid-columns($i: 1, $list: &#34;.col-xs-#&#123;&#36;i&#125;,
                .col-sm-#&#123;&#36;i&#125;, .col-md-#&#123;&#36;i&#125;,
                .col-lg-#&#123;&#36;i&#125;&#34;)</code></td>
            </tr>
            <tr>
              <td>Float grid columns</td>
              <td><code>@mixin float-grid-columns($class, $i: 1,
                $list: &#34;.col-#&#123;&#36;class&#125;-&#123;&#36;i&#125;&#34;)</code></td>
            </tr>
            <tr>
              <td>Calc grid column</td>
              <td><code>@mixin calc-grid-column($index, $class, $type)</code></td>
            </tr>
            <tr>
              <td>Loop grid columns</td>
              <td><code>@mixin loop-grid-columns($columns, $class, $type)</code></td>
            </tr>
            <tr>
              <td>Make grid</td>
              <td><code>@mixin make-grid($class)</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-sm">Grid Mixins</p>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Container fixed: <span className="font-normal">Centered container element.</span></p>
          <code>@mixin container-fixed($gutter: $grid-gutter-width)</code>
        </div>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Make row: <span className="font-normal">Creates a wrapper for a series of columns.</span></p>
          <code>@mixin make-row($gutter: $grid-gutter-width)</code>
        </div>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Make xs column: <span className="font-normal">Generate the extra small columns.</span></p>
          <p><code>@mixin make-xs-column($columns, $gutter: $grid-gutter-width)</code></p>
          <p><code>@mixin make-xs-column-offset($columns)</code></p>
          <p><code>@mixin make-xs-column-push($columns)</code></p>
          <p><code>@mixin make-xs-column-pull($columns)</code></p>
        </div>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Make sm column: <span className="font-normal">Generate the small columns.</span></p>
          <p><code>@mixin make-sm-column($columns, $gutter: $grid-gutter-width)</code></p>
          <p><code>@mixin make-sm-column-offset($columns)</code></p>
          <p><code>@mixin make-sm-column-push($columns)</code></p>
          <p><code>@mixin make-sm-column-pull($columns)</code></p>
        </div>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Make md column: <span className="font-normal">Generate the medium columns.</span></p>
          <p><code>@mixin make-md-column($columns, $gutter: $grid-gutter-width)</code></p>
          <p><code>@mixin make-md-column-offset($columns)</code></p>
          <p><code>@mixin make-md-column-push($columns)</code></p>
          <p><code>@mixin make-md-column-pull($columns)</code></p>
        </div>
        <hr className="color-divider" />
        <div className="my-sm">
          <p className="type-body font-strong">Make lg column: <span className="font-normal">Generate the large columns.</span></p>
          <p><code>@mixin make-lg-column($columns, $gutter: $grid-gutter-width)</code></p>
          <p><code>@mixin make-lg-column-offset($columns)</code></p>
          <p><code>@mixin make-lg-column-push($columns)</code></p>
          <p><code>@mixin make-lg-column-pull($columns)</code></p>
        </div>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Grid system</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td>Row</td>
              <td><code>.row &#123;@include make-row;&#125;</code></td>
            </tr>
            <tr>
              <td>Columns</td>
              <td><code>@include make-grid-columns;</code></td>
            </tr>
            <tr>
              <td>Extra small grid</td>
              <td><code>@include make-grid(xs);</code></td>
            </tr>
            <tr>
              <td>Small grid</td>
              <td><code>@media (min-width: $screen-sm-min)</code></td>
            </tr>

            <tr>
              <td>Medium grid</td>
              <td><code>@media (min-width: $screen-md-min)</code></td>
            </tr>
            <tr>
              <td>Large grid</td>
              <td><code>@media (min-width: $screen-lg-min)</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="layer">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Layer</p>
      </div>
      <div className="block-item pa-md">
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$layer-dialog</code></td>
              <td>90</td>
            </tr>
            <tr>
              <td><code>$layer-backdrop</code></td>
              <td>80</td>
            </tr>
            <tr>
              <td><code>$layer-modal</code></td>
              <td>70</td>
            </tr>
            <tr>
              <td><code>$layer-navigation</code></td>
              <td>60</td>
            </tr>
            <tr>
              <td><code>$layer-controls</code></td>
              <td>50</td>
            </tr>
            <tr>
              <td><code>$layer-content</code></td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="layout">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Layout</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">App</p>
        <table className="table mb-nn table-width">
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
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Container</p>
        <table className="table mb-nn table-width">
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
    </div>

    <div className="index-items" id="list-group">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">List-group</p>
      </div>
      <div className="block-item pa-md">
        <div>
          <p className="type-body font-strong mb-nn">Variant <code className="font-normal">@mixin list-group-item-variant($state, $background, $color)</code></p>
          <div className="pt-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.list-group-item-success &#123;@include list-group-item-variant (info, $state-info-bg, $state-info-text);&#125;</pre>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="navbar">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Navbar</p>
      </div>
      <div className="block-item pa-md">
        <table className="table table-width">
          <tbody>
            <tr>
              <td><code>$navbar-height</code></td>
              <td>48px</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverted navbar</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td><code>$navbar-inverse-color</code></td>
              <td>#fff</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-bg</code></td>
              <td>shade(<code>$color-brand</code>,65%)</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-border</code></td>
              <td>transparent</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverted navbar links</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td><code>$navbar-inverse-link-color</code></td>
              <td>rgba(#fff,.6)</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-hover-color</code></td>
              <td>#fff</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-hover-bg</code></td>
              <td>transparent</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-active-color</code></td>
              <td>#fff</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-active-bg</code></td>
              <td>transparent</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-disabled-color</code></td>
              <td>#444</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-link-disabled-bg</code></td>
              <td>transparent</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverted navbar brand label</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td><code>$navbar-inverse-brand-color</code></td>
              <td><code>$navbar-inverse-link-color</code></td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-brand-hover-color</code></td>
              <td>#fff</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-brand-hover-bg</code></td>
              <td>transparent</td>
            </tr>
          </tbody>
        </table>
        <p className="type-body font-strong mb-sm">Inverted navbar toggle</p>
        <table className="table table-width">
          <tbody>
            <tr>
              <td><code>$navbar-inverse-toggle-bg</code></td>
              <td>darken(<code>$navbar-inverse-bg</code>,5%)</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-toggle-hover-bg</code></td>
              <td>darken(<code>$navbar-inverse-bg</code>,5%)</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-toggle-icon-bar-bg</code></td>
              <td>#fff</td>
            </tr>
            <tr>
              <td><code>$navbar-inverse-toggle-border-color</code></td>
              <td>darken(<code>$navbar-inverse-bg</code>,5%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="media-queries-breakpoints">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Media queries breakpoints</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Extra small screen (phone)</p>
        <table className="table mb-nn table-width ">
          <tbody>
            <tr>
              <td><code>$screen-xs</code></td>
              <td>480px</td>
            </tr>
            <tr>
              <td><code>$screen-xs-min</code></td>
              <td><code>$screen-xs</code></td>
            </tr>
            <tr>
              <td><code>$screen-phone</code></td>
              <td><code>$screen-xs-min</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Small screen (tablet)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$screen-sm</code></td>
              <td>768px</td>
            </tr>
            <tr>
              <td><code>$screen-sm-min</code></td>
              <td><code>$screen-sm</code></td>
            </tr>
            <tr>
              <td><code>$screen-tablet</code></td>
              <td><code>$screen-sm-min</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Medium screen (desktop)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$screen-md</code></td>
              <td>992px</td>
            </tr>
            <tr>
              <td><code>$screen-md-min</code></td>
              <td><code>$screen-md</code></td>
            </tr>
            <tr>
              <td><code>$screen-desktop</code></td>
              <td><code>$screen-md-min</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Large screen (wide desktop)</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$screen-lg</code></td>
              <td>1200px</td>
            </tr>
            <tr>
              <td><code>$screen-lg-min</code></td>
              <td><code>$screen-lg</code></td>
            </tr>
            <tr>
              <td><code>$screen-lg-desktop</code></td>
              <td><code>$screen-lg-min</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-xs">Maximum</p>
        <p className="type-body mb-md">So media queries do not overlap when required, provide a maximum</p>
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$screen-xs-max</code></td>
              <td>(<code>$screen-sm-min</code> - 1)</td>
            </tr>
            <tr>
              <td><code>$screen-sm-max</code></td>
              <td>(<code>$screen-md-min</code> - 1)</td>
            </tr>
            <tr>
              <td><code>$screen-md-max</code></td>
              <td>(<code>$screen-lg-min</code> - 1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="screen-sizes">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Screen sizes</p>
      </div>
      <div className="block-item pa-md">
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$size-mini</code></td>
              <td>500px</td>
            </tr>
            <tr>
              <td><code>$size-small</code></td>
              <td>768px</td>
            </tr>
            <tr>
              <td><code>$size-medium:</code></td>
              <td>992px</td>
            </tr>
            <tr>
              <td><code>$size-large</code></td>
              <td>1200px</td>
            </tr>
            <tr>
              <td><code>$size-oversized</code></td>
              <td>1500px</td>
            </tr>
            <tr>
              <td><code>$size-container</code></td>
              <td>960px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="index-items" id="themes">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Themes</p>
      </div>
      <div className="block-item pa-md">
        <div>
          <p className="type-body font-strong mb-nn">Base <code className="font-normal">@mixin color-theme-base($theme: dark)</code></p>
          <p className="type-body font-strong mb-nn">Classes <code className="font-normal">@mixin color-theme-classes($theme: dark)</code></p>
          <div className="pt-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.theme-default &#123;@include color-theme-base(dark);
            @include color-theme-classes(dark);&#125;</pre>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="typography">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Typography</p>
      </div>
      <div className="block-item pa-md">
        <div>
          <p className="type-body font-strong mb-nn">Type <code className="font-normal">@mixin typography($name)</code></p>
          <div className="pt-sm">
            <p className="type-footnote mb-nn">Example: </p><pre className="mb-nn">.type-jumbo &#123;@include typography(jumbo);&#125;</pre>
          </div>
        </div>
      </div>
    </div>

    <div className="index-items" id="z-index">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">z-index</p>
      </div>
      <div className="block-item pa-md">
        <table className="table mb-nn table-width">
          <tbody>
            <tr>
              <td><code>$zindex-tooltip</code></td>
              <td>1070</td>
            </tr>
            <tr>
              <td><code>$zindex-popover</code></td>
              <td>1060</td>
            </tr>
            <tr>
              <td><code>$zindex-modal</code></td>
              <td>1050</td>
            </tr>
            <tr>
              <td><code>$zindex-modal-background</code></td>
              <td>1040</td>
            </tr>
            <tr>
              <td><code>$zindex-navbar-fixed</code></td>
              <td>1030</td>
            </tr>
            <tr>
              <td><code>$zindex-navbar</code></td>
              <td>1000</td>
            </tr>
            <tr>
              <td><code>$zindex-dropdown</code></td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <a href="#contents"><button className="btn btn-lg btn-to-top">Up</button></a>
  </Container>

export default Content
