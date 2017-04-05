import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
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
        <p className="type-subhead font-strong mb-sm">Theme colors</p>
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
        <table className="table">
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
      </div>
      <div className="block-item pa-md">
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
    </div>
    <div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn">Mixins</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Buttons</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Variant</td>
              <td>
                <div className="py-xs">
                  <code>@mixin button-variant($color, $background, $border)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.btn-default &#123;@include button-variant ($btn-default-color, $btn-default-bg, $btn-default-border);&#125;</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>Outline variant</td>
              <td>
                <div className="py-xs">
                  <code>@mixin button-outline-variant($color)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.btn-outline-primary &#123;@include button-outline-variant ($btn-primary-bg);&#125;</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>Inverse variant</td>
              <td>
                <div className="py-xs">
                  <code>@mixin button-inverse-variant($color)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.btn-inverse-secondary &#123;@include button-inverse-variant ($btn-secondary-bg);&#125;</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>Size</td>
              <td>
                <div className="py-xs">
                  <code>@mixin button-size($padding-vertical, $padding-horizontal,
                $font-size, $line-height, $border-radius)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.btn-xs &#123;@include button-size ($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, <br />$line-height-small, $btn-border-radius-small);&#125;</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Badges</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Variant</td>
              <td>
                <div className="py-xs">
                  <code>@mixin label-variant($color)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.badge-success &#123;@include label-variant ($label-success-bg);&#125;</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-sm">Border-radius</p>
        <p className="mb-sm">Single side border-radius.</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Border top</td>
              <td><code>@mixin border-top-radius($radius)</code></td>
            </tr>
            <tr>
              <td>Border right</td>
              <td><code>@mixin border-right-radius($radius)</code></td>
            </tr>
            <tr>
              <td>Border bottom</td>
              <td><code>@mixin border-bottom-radius($radius)</code></td>
            </tr>
            <tr>
              <td>Border left</td>
              <td><code>@mixin border-left-radius($radius)</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">List-group</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Variant</td>
              <td>
                <div className="py-xs">
                  <code>@mixin list-group-item-variant($state, $background, $color)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.list-group-item-success &#123;@include list-group-item-variant (info, $state-info-bg, $state-info-text);&#125;</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Themes</p>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <p>Base</p>
                <p>Classes</p>
              </td>
              <td>
                <div className="py-xs">
                  <p><code>@mixin color-theme-base($theme: dark)</code></p>
                  <p><code>@mixin color-theme-classes($theme: dark)</code></p>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">
                    .theme-default &#123;@include color-theme-base(dark);
                    @include color-theme-classes(dark);&#125;
                  </pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md">
        <p className="type-subhead font-strong mb-md">Typography</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Type</td>
              <td>
                <div className="py-xs">
                  <code>@mixin typography($name)</code>
                  <p className="mt-xs mb-nn">Example: </p><pre className="mb-nn">.type-jumbo &#123;@include typography(jumbo);&#125;</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Container>

export default Content
