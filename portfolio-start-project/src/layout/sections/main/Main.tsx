import React from 'react';
import styled from 'styled-components';
import photo from "../../../assets/images/myPhoto.webp"
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={'center'} justify={'space-around'}>
        <div>
          <span>Hi There 👋,</span>
          <Name>My name is Alex Muhin</Name>
          <MainTitle>A Web Developer.</MainTitle>
        </div>

        <Photo src={photo} alt="" />
      </FlexWrapper >
    </StyledMain>
  );
};

const StyledMain = styled.div`

`


const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`