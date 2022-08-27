import { GlobalStyle, lightTheme } from '@yingxuanli/kanban-mangement-component'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Components/Header'

function App() {
  const Wrapper = styled.div`
    background-color: ${(props) => props.theme.backgroundTertiary};
  `
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
