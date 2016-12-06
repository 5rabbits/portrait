React      = require('react')

Layout     = require('components/app/Layout')
Navigation = require('components/app/Navigation')
Section    = require('components/app/Section')

Controls   = require('components/Controls')
Content    = require('components/Content')
StyleGuide = require('components/StyleGuide')

@Application = React.createClass
  render: ->
    return (
      <Layout
        header="header"
        navigation={
          <Navigation/>
        }
        main={
          <Section
            controls={
              <Controls/>
            }
            content={
              <div>
                <Content/>
                <StyleGuide/>
              </div>
            }
          />
        }
      />
    )

module.exports = @Application
