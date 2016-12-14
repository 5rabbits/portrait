import React from 'react'

const Layout = () =>
  <section className="layout-wrapper" id="block-app">
    <header className="layout-header" id="block-header">
      { this.props.header }
    </header>
    <nav className="layout-navigation" id="block-navigation">
      { this.props.navigation }
    </nav>
    <main className="layout-main" id="block-main">
      { this.props.main }
    </main>
  </section>

export default Layout
