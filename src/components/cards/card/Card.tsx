import styled from 'styled-components';
import { CardImg } from './Img';
import { Article } from './Article';
import { BoxBtn } from './Button';



export function Cards() {
  return (
    <Box>
      <Card>
        <CardImg />
        <Article />
        <BoxBtn />
      </Card>
    </Box>
  )
};

const Box = styled.article`
display: flex;

`

const Card = styled.div`
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`