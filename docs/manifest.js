/* eslint-disable import/no-webpack-loader-syntax */

import sortBy from 'lodash/sortBy'

export default sortBy([
  // Controls
  {
    name: 'Button',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!controls/Button'),
        examples: require('controls/Button/examples.yml'),
      })
    }, 'Button'),
  },
  {
    name: 'RoundButton',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!controls/RoundButton'),
        examples: require('controls/RoundButton/examples.yml'),
      })
    }, 'RoundButton'),
  },
  {
    name: 'SearchInput',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!controls/SearchInput'),
        examples: require('controls/SearchInput/examples.yml'),
      })
    }, 'SearchInput'),
  },

  // Elements
  {
    name: 'BlockItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!elements/BlockItem'),
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
        source: require('!!docs-loader!main/SectionToolbar'),
        examples: require('main/SectionToolbar/examples.yml'),
      })
    }, 'SectionToolbar'),
  },
  {
    name: 'Layout',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!main/Layout'),
        examples: require('main/Layout/examples.yml'),
      })
    }, 'Layout'),
  },
  {
    name: 'Navigation',
    getComponent: callback => require.ensure([], require => {
      require('main/Navigation/examples.scss')

      callback({
        source: require('!!docs-loader!main/Navigation'),
        examples: require('main/Navigation/examples.yml'),
      })
    }, 'Navigation'),
  },
  {
    name: 'NavigationItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!main/NavigationItem'),
        examples: require('main/NavigationItem/examples.yml'),
      })
    }, 'NavigationItem'),
  },
  {
    name: 'Section',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!main/Section'),
        examples: require('main/Section/examples.yml'),
      })
    }, 'Section'),
  },

  // Shared
  {
    name: 'Container',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/Container'),
        examples: require('shared/Container/examples.yml'),
      })
    }, 'Container'),
  },
  {
    name: 'TableContainer',
    getComponent: callback => require.ensure([], require => {
      require('shared/TableContainer/examples.scss')

      callback({
        source: require('!!docs-loader!shared/TableContainer'),
        examples: require('shared/TableContainer/examples.yml'),
      })
    }, 'TableContainer'),
  },
  {
    name: 'EmptyBlock',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/EmptyBlock'),
        examples: require('shared/EmptyBlock/examples.yml'),
      })
    }, 'EmptyBlock'),
  },
  {
    name: 'EmptyView',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/EmptyView'),
        examples: require('shared/EmptyView/examples.yml'),
      })
    }, 'EmptyView'),
  },
  {
    name: 'Grid',
    getComponent: callback => require.ensure([], require => {
      require('shared/Grid/examples.scss')

      callback({
        source: require('!!docs-loader!shared/Grid'),
        examples: require('shared/Grid/examples.yml'),
      })
    }, 'Grid'),
  },
  {
    name: 'Loader',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/Loader'),
        examples: require('shared/Loader/examples.yml'),
      })
    }, 'Loader'),
  },
  {
    name: 'States',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/States'),
        examples: require('shared/States/examples.yml'),
      })
    }, 'States'),
  },
  {
    name: 'FiltersForm',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/FiltersForm'),
        examples: require('shared/FiltersForm/examples.yml'),
      })
    }, 'FiltersForm'),
  },
  {
    name: 'ScrollLock',
    getComponent: callback => require.ensure([], require => {
      callback({
        source: require('!!docs-loader!shared/ScrollLock'),
        examples: require('shared/ScrollLock/examples.yml'),
      })
    }, 'ScrollLock'),
  },
], 'name')
