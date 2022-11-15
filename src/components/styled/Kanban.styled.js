import styled from 'styled-components'

const StyledKanban = styled.div`
font-size:12px;
  height: calc(100% - 150px);
  padding-left: 30px;
  padding-right: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  max-width: 1400px;
  margin: auto;

.column {
  background-color: white;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.column h2{
  margin-top: 0;
}
`

export default StyledKanban
