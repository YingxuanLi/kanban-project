

import { ThemeProvider } from 'styled-components'
import { darkTheme } from '@yingxuanli/kanban-mangement-component'
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <h1>hello world</h1>
    </ThemeProvider>
  )
}

export default App
