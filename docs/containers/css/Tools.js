import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#color" className="type-subhead">Color</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#maps" className="type-subhead">Maps</a>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div className="block-item pa-md mt-sm" id="color">
        <p className="type-headline font-strong mb-nn">Color</p>
      </div>
      <div className="block-item pa-md">
        <table className="table">
          <tbody>
            <tr>
              <td>Solidify</td>
              <td>
                <div className="py-xs">
                  <code>@function solidify ($alpha-color, $background-color: white)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Shade</td>
              <td>
                <div className="py-xs">
                  <code>@function shade ($color, $percent)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tint</td>
              <td>
                <div className="py-xs">
                  <code>@function tint ($color, $percent)</code>
                </div>
              </td>
            </tr>
            <tr>
              <td>Tone</td>
              <td>
                <code>@function tone ($color, $percent)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong mb-nn" id="maps">Maps</p>
      </div>
      <div className="block-item pa-md">
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
