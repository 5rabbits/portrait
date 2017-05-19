import React from 'react'
import childrenPropType from 'propTypes/children'

const Layout = props =>
  <section className="layout-wrapper" id="block-app">
    <header className="layout-header" id="block-header">
      {props.header}
    </header>
    <nav className="layout-navigation" id="block-navigation">
      {props.navigation}
    </nav>
    <main className="layout-main" id="block-main">
      {props.main}
    </main>
  </section>

Layout.propTypes = {
  header: childrenPropType,
  main: childrenPropType,
  navigation: childrenPropType,
}

Layout.defaultProps = {
  header: null,
  main: null,
  navigation: null,
}

export default Layout
