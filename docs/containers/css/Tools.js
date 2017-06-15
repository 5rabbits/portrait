import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong" id="contents">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#color" className="type-subhead">Color</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="index-items" id="color">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Color</p>
        <p className="type-body mb-nn">These functions change the tone of a color.</p>
      </div>
      <div className="block-item pa-md">
        <table className="table table-width">
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
    </div>
    <a href="#contents"><button className="btn btn-lg btn-to-top">Up</button></a>
  </Container>

export default Content
