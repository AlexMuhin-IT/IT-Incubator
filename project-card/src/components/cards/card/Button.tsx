import styled, { css } from "styled-components";

type ButtonStyledPropsType = {
  color?: string
  name?: string
  btnType: 'primary' | 'outlined'
}


export function BoxBtn() {
  return (
    <div>
      {/* <ButtonStyled btnType={'primary'} name='See more'> {'props.title'} </ButtonStyled >
      <ButtonStyled btnType={'outlined'} name='Save'> ${'props.name'} </ButtonStyled>
      <ButtonStyled btnType={'outlined'} name='Save'> ${'props => props.name'} </ButtonStyled> */}
      <ButtonStyled btnType={'outlined'} name='Save'>See more</ButtonStyled>
      <ButtonStyled btnType={'outlined'} name='Save'>Save</ButtonStyled>

    </div>
  )
}

//создание кнопки
const ButtonStyled = styled.button<ButtonStyledPropsType>`
  padding: 10px 30px;
  border-radius: 10px;
  border: 2px solid  #3013e9;
  
  :last-child{
    margin-left: 10px;
  }
//стили для 1 кнопки
  ${props => props.btnType === 'primary' && css<ButtonStyledPropsType>`
    background-color: ${props => props.color || '#3013e9'};
    color: ${props => props.color || '#fff'};

    &:hover {
      background-color: transparent;
      color: #3013e9;
    }
  `}

// стили для 2 кнопки
  ${props => props.btnType === 'outlined' && css<ButtonStyledPropsType>`
    background-color: ${props => props.color || '#fff'};
    color: ${props => props.color || '#3013e9'};
    
  &:hover {
      background-color: #3013e9;
      color:  #fff;
    }
  `}
`

