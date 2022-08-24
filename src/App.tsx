import { ThemeProvider } from 'styled-components'
import { lightTheme, 
  GlobalStyle } from '@yingxuanli/kanban-mangement-component'
import Header from './Components/Header'
import styled from 'styled-components'
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
