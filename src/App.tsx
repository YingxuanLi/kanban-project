import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyle } from '@yingxuanli/kanban-mangement-component'
import Header from './Components/Header'
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
