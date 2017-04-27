import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong" id="contents">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#tables" className="type-subhead">Tables</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="index-items" id="tables">
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
    <a href="#contents"><button className="btn btn-lg btn-to-top">Up</button></a>
  </Container>

export default Content
