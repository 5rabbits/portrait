# Portrait
Base design for all 5Rabbits products

## Example Usage

```javascript
import React from 'react'
import 'portrait/lib/portrait.css'
import { Layout, Navigation, SectionOffscreen } from 'portrait'

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
