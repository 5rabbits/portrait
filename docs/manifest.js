/* eslint-disable import/no-webpack-loader-syntax */

import sortBy from 'lodash/sortBy'

export default sortBy([
  // Controls
  {
    name: 'Button',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!controls/Button'),
        examples: require('controls/Button/examples.yml'),
      })
    }, 'Button'),
  },
  {
    name: 'RoundButton',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!controls/RoundButton'),
        examples: require('controls/RoundButton/examples.yml'),
      })
    }, 'RoundButton'),
  },
  {
    name: 'SearchInput',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!controls/SearchInput'),
        examples: require('controls/SearchInput/examples.yml'),
      })
    }, 'SearchInput'),
  },

  // Elements
  {
    name: 'BlockItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!elements/BlockItem'),
        examples: require('elements/BlockItem/examples.yml'),
      })
    }, 'BlockItem'),
  },

  // Main
  {
    name: 'SectionToolbar',
    getComponent: callback => require.ensure([], require => {
      require('main/SectionToolbar/examples.scss')

      callback({
        source: require('!!docs!main/SectionToolbar'),
        examples: require('main/SectionToolbar/examples.yml'),
      })
    }, 'SectionToolbar'),
  },
  {
    name: 'Layout',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!main/Layout'),
        examples: require('main/Layout/examples.yml'),
      })
    }, 'Layout'),
  },
  {
    name: 'Navigation',
    getComponent: callback => require.ensure([], require => {
      require('main/Navigation/examples.scss')

      callback({
        source: require('!!docs!main/Navigation'),
        examples: require('main/Navigation/examples.yml'),
      })
    }, 'Navigation'),
  },
  {
    name: 'NavigationItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!main/NavigationItem'),
        examples: require('main/NavigationItem/examples.yml'),
      })
    }, 'NavigationItem'),
  },
  {
    name: 'Section',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!main/Section'),
        examples: require('main/Section/examples.yml'),
      })
    }, 'Section'),
  },
  {
    name: 'SectionHeading',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!main/SectionHeading'),
        examples: require('main/SectionHeading/examples.yml'),
      })
    }, 'SectionHeading'),
  },

  // Shared
  {
    name: 'Container',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/Container'),
        examples: require('shared/Container/examples.yml'),
      })
    }, 'Container'),
  },
  {
    name: 'EmptyBlock',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/EmptyBlock'),
        examples: require('shared/EmptyBlock/examples.yml'),
      })
    }, 'EmptyBlock'),
  },
  {
    name: 'EmptyView',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/EmptyView'),
        examples: require('shared/EmptyView/examples.yml'),
      })
    }, 'EmptyView'),
  },
  {
    name: 'Grid',
    getComponent: callback => require.ensure([], require => {
      require('shared/Grid/examples.scss')

      callback({
        source: require('!!docs!shared/Grid'),
        examples: require('shared/Grid/examples.yml'),
      })
    }, 'Grid'),
  },
  {
    name: 'Loader',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/Loader'),
        examples: require('shared/Loader/examples.yml'),
      })
    }, 'Loader'),
  },
  {
    name: 'Offscreen',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/Offscreen'),
        examples: require('shared/Offscreen/examples.yml'),
      })
    }, 'Offscreen'),
  },
  {
    name: 'States',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/States'),
        examples: require('shared/States/examples.yml'),
      })
    }, 'States'),
  },
  {
    name: 'ActionPanel',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!shared/ActionPanel'),
        examples: require('shared/ActionPanel/examples.yml'),
      })
    }, 'ActionPanel'),
  },

  // Templates
  {
    name: 'CommonSection',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs!templates/CommonSection'),
        examples: require('templates/CommonSection/examples.yml'),
      })
    }, 'CommonSection'),
  },
], 'name')
