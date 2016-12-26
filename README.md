# Portrait
Base design for all 5Rabbits products

## Example Usage

```javascript
import React from 'react'
import { Layout, Navigation, SectionOffscreen } from 'portrait'
import 'portrait/lib/portrait.css'

const App = () =>
  <Layout
    header="header"
    navigation={
      <Navigation />
    }
    main={
      <SectionOffscreen
        controls={<div>Controls</div>}
        panelContent={<div>Panel</div>}
        content={<h1>Hello world</h1>}
      />
    }
  />

export default App
```

## Using sass

You can configure Portrait using the sass files:

```scss
$color-brand: #f00;
@import '~portrait/lib/scss/portrait.scss';
```
