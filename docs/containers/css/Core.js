import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong mb-nn">Core</p>
      </div>
      <div className="block-item pa-md mt-sm">
        <p className="type-subhead font-strong mb-nn">Colors</p>
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
  </Container>

export default Content
