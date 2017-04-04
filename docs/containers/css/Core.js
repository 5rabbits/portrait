import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong mb-nn">Core</p>
      </div>
      <div className="block-item pa-md mt-sm">
        <p className="type-subhead font-strong mb-md">Colors</p>
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
      <div className="block-item pa-md mt-sm">
        <p className="type-subhead font-strong mb-md">Maps</p>
        <table className="table">
          <tbody>
            <tr>
              <td>Map deep get</td>
              <td>
                <div className="py-xs">
                  <code>@function map-deep-get ($map, $keys...)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Map get value</td>
              <td>
                <div className="py-xs">
                  <code>@function map-get-value ($map, $key, $msg)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Expose map</td>
              <td>
                <div className="py-xs">
                  <code>@mixin expose-map ($map)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Depth</td>
              <td>
                <div className="py-xs">
                  <code>@function depth ($map)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Debug map</td>
              <td>
                <div className="py-xs">
                  <code>@mixin debug-map ($map,$class)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Debug list</td>
              <td>
                <div className="py-xs">
                  <code>@mixin debug-list ($list,$class)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Debug</td>
              <td>
                <div className="py-xs">
                  <code>@mixin debug ($source,$class:&#34;&#34;)</code>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Container>

export default Content
