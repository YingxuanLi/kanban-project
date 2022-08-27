import {
  Button,
  IconVerticalEllipsis
} from '@yingxuanli/kanban-mangement-component'
import styled from 'styled-components'

import { Logo } from '../Logo/Logo'

const ButtonWrapper = styled.div`
  display: flex;
  direction: column;
  align-items: center;
  column-gap: 20px;
  /* flex: 1 1 100%; */
  padding: 0px 10px 0px 20px;
  margin: 0px 20px 0px 10px;
`
const Kanban = styled.span`
  font-size: 30px;
`
const FlexboxRow = styled.div`
  display: flex;
  direction: column;
  height: 96px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
`
const LogoWrapper = styled.div`
  display: flex;
  direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  flex-wrap: nowrap;
  padding-left: 10px;
  flex: 0 1 13%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
`
const HeaderStyle = {
  // flex: '0 1 30%'
}

const HeaderWrapper = styled.div`
  display: flex;
  direction: column;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
  justify-content: space-between;
  background-color: red;
  margin-left: 5px;
  padding-left: 5px;
  background-color: ${(props) => props.theme.background};
`

interface HeaderProps {
  showLogoName?: boolean
}

const Header = ({ showLogoName = true }: HeaderProps) => {
  return (
    <FlexboxRow>
      {showLogoName ? (
        <LogoWrapper>
          <Logo />
          <Kanban>kanban</Kanban>
        </LogoWrapper>
      ) : null}
      <HeaderWrapper>
        <h1 style={HeaderStyle}>Platform Launch</h1>
        <ButtonWrapper>
          <Button buttonType="primary" label="+ Add New task" size="small" />
          <IconVerticalEllipsis />
        </ButtonWrapper>
      </HeaderWrapper>
    </FlexboxRow>
  )
}
export default Header
