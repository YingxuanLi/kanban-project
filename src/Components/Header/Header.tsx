import { Button } from '@yingxuanli/kanban-mangement-component'
import styled from 'styled-components'
import { IconVerticalEllipsis } from '@yingxuanli/kanban-mangement-component'

const Wrapper = styled.div`
  display: flex;
  direction: column;
  align-items: center;
  column-gap: 10px;
  padding: 0px 10px 0px 10px;
  margin: 0px 10px 0px 10px;
`

const FlexboxRow = styled.div`
  display: flex;
  direction: column;
  width: 1140px;
  height: 96px;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <FlexboxRow>
      <h2>Platform Launch</h2>
      <Wrapper>
        <Button buttonType="primary" label="+ Add New task" size="small" />
        <IconVerticalEllipsis />
      </Wrapper>
    </FlexboxRow>
  )
}
export default Header
