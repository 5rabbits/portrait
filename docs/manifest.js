/* eslint-disable import/no-webpack-loader-syntax */

import sortBy from 'lodash/sortBy'

export default sortBy([
  // Controls
  {
    name: 'RoundButton',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('controls/RoundButton'),
        source: require('!!docs!controls/RoundButton'),
      })
    }, 'RoundButton'),
  },
  {
    name: 'SearchForm',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('controls/SearchForm'),
        source: require('!!docs!controls/SearchForm'),
      })
    }, 'SearchForm'),
  },

  // Elements
  {
    name: 'BlockItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('elements/BlockItem'),
        source: require('!!docs!elements/BlockItem'),
      })
    }, 'BlockItem'),
  },

  // Main
  {
    name: 'Controls',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/Controls'),
        source: require('!!docs!main/Controls'),
      })
    }, 'Controls'),
  },
  {
    name: 'Layout',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/Layout'),
        source: require('!!docs!main/Layout'),
      })
    }, 'Layout'),
  },
  {
    name: 'Navigation',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/Navigation'),
        source: require('!!docs!main/Navigation'),
        examples: require('main/Navigation/examples.yml'),
      })
    }, 'Navigation'),
  },
  {
    name: 'NavigationItem',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/NavigationItem'),
        source: require('!!docs!main/NavigationItem'),
      })
    }, 'NavigationItem'),
  },
  {
    name: 'Section',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/Section'),
        source: require('!!docs!main/Section'),
      })
    }, 'Section'),
  },
  {
    name: 'SectionHeading',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/SectionHeading'),
        source: require('!!docs!main/SectionHeading'),
      })
    }, 'SectionHeading'),
  },
  {
    name: 'SectionOffscreen',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('main/SectionOffscreen'),
        source: require('!!docs!main/SectionOffscreen'),
      })
    }, 'SectionOffscreen'),
  },

  // Shared
  {
    name: 'Container',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/Container'),
        source: require('!!docs!shared/Container'),
      })
    }, 'Container'),
  },
  {
    name: 'EmptyBlock',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/EmptyBlock'),
        source: require('!!docs!shared/EmptyBlock'),
      })
    }, 'EmptyBlock'),
  },
  {
    name: 'EmptyView',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/EmptyView'),
        source: require('!!docs!shared/EmptyView'),
      })
    }, 'EmptyView'),
  },
  {
    name: 'Grid',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/Grid'),
        source: require('!!docs!shared/Grid'),
      })
    }, 'Grid'),
  },
  {
    name: 'Loader',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/Loader'),
        source: require('!!docs!shared/Loader'),
      })
    }, 'Loader'),
  },
  {
    name: 'Offscreen',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/Offscreen'),
        source: require('!!docs!shared/Offscreen'),
      })
    }, 'Offscreen'),
  },
  {
    name: 'States',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/States'),
        source: require('!!docs!shared/States'),
      })
    }, 'States'),
  },
  {
    name: 'ActionPanel',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('shared/ActionPanel'),
        source: require('!!docs!shared/ActionPanel'),
      })
    }, 'ActionPanel'),
  },

  // Templates
  {
    name: 'CommonSection',
    getComponent: callback => require.ensure([], require => {
      callback({
        component: require('templates/CommonSection'),
        source: require('!!docs!templates/CommonSection'),
      })
    }, 'CommonSection'),
  },
], 'name')
