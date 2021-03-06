import React from 'react'
import { Container } from 'shared'

const Content = () =>
  <Container>
    <div>
      <div className="block-item pa-md">
        <p className="type-headline font-strong" id="contents">Contents</p>
        <ul className="pl-md">
          <li className="pb-xs type-title">
            <a href="#normalize" className="type-subhead">Normalize</a>
          </li>
          <li className="pb-xs type-title">
            <a href="#scaffolding" className="type-subhead">Scaffolding</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="index-items" id="normalize">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Normalize</p>
        <p className="type-body mb-nn">Normalize.css is an alternative to CSS resets.</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-body">Normalize aims to:</p>
        <ul className="pl-sm mb-xs">
          <li className="type-body">Preserves useful defaults, unlike many CSS resets.</li>
          <li className="type-body">Normalizes styles for a wide range of elements.</li>
          <li className="type-body">Corrects bugs and common browser inconsistencies.</li>
          <li className="type-body">Improves usability with subtle modifications.</li>
          <li className="type-body">Explains what code does using detailed comments.</li>
        </ul>
        <p className="type-body">It will affect:</p>
        <ol className="pl-md">
          <li className="type-body">HTML display:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>html</code>, <code>body</code>, <code>article</code>, <code>aside</code>,
            <code>details</code>, <code>figcaption</code>, <code>figure</code>, <code>footer</code>,
            <code>header</code>, <code>hgroup</code>, <code>main</code>, <code>menu</code>,
            <code>nav</code>, <code>section</code>, <code>summary</code>, <code>audio</code>,
            <code>canvas</code>, <code>progress</code> and <code>video</code>.</li>
          </ul>
          <li className="type-body">Links:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>a</code></li>
          </ul>
          <li className="type-body">Text-level semantics:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>abbr[title]</code>, <code>b</code>, <code>strong</code>,
            <code>dfn</code>, <code>h1</code>, <code>mark</code>, <code>small</code>,
            <code>sub</code> and <code>sup</code>.</li>
          </ul>
          <li className="type-body">Enbedded content:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>img</code> and <code>svg:not(:root)</code>.</li>
          </ul>
          <li className="type-body">Grouping content:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>figure</code>, <code>hr</code>, <code>pre</code>,
            <code>code</code>, <code>kbd</code> and <code>samp</code>.</li>
          </ul>
          <li className="type-body">Forms:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>button</code>, <code>input</code>, <code>optgroup</code>,
            <code>select</code>, <code>textarea</code>, <code>fieldset</code> and
            <code>legend</code>.</li>
          </ul>
          <li className="type-body">Tables:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>table</code>, <code>td</code> and <code>th</code>.</li>
          </ul>
        </ol>
      </div>
    </div>

    <div className="index-items" id="scaffolding">
      <div className="block-item pa-md mt-sm">
        <p className="type-headline font-strong">Scaffolding</p>
        <p className="type-body mb-nn">Scaffolding is a global reset to different css elements.</p>
      </div>
      <div className="block-item pa-md">
        <p className="type-body">It will affect:</p>
        <ol className="pl-md">
          <li className="type-body">The box-sizing in all the elements.</li>
          <li className="type-body">HTML tags:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>html</code>, <code>body</code>, <code>input</code>,
            <code>button</code>, <code>select</code>, <code>textarea</code>, <code>ul</code>,
            <code>table</code>, <code>img</code>, <code>hr</code> and <code>a</code>.</li>
          </ul>
          <li className="type-body">Classes:</li>
          <ul className="pl-sm">
            <li className="type-body"><code>.sr-only</code> and <code>.sr-only-focusable</code>.</li>
          </ul>
        </ol>
      </div>
    </div>
    <a href="#contents"><button className="btn btn-lg btn-to-top">Up</button></a>
  </Container>

export default Content
