import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>

    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong mb-nn">Colors</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Generic colors</p>
        <table className="table mb-nn">
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
        <p className="type-title font-strong mb-sm">Theme colors</p>
        <table className="table">
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
        <table className="table">
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
        <table className="table mb-nn">
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
    </div>

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Layout</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">App</p>
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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

    <div>
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

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Badges</p>
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

    <div>
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

    <div>
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

    <div>
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

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Grid</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Variables</p>
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Media queries breakpoints</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Extra small screen (phone)</p>
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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

    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Container sizes</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-title font-strong mb-md">Small screen (tablet)</p>
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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
        <table className="table mb-nn">
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

  </Container>

export default Content
