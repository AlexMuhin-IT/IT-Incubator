import React from 'react';
import styled from 'styled-components';

type ProjectPropsType = {
  title: string
  text: string
  src: string
  subtitle: string
}


export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <SubTitle>{props.subtitle}</SubTitle>
      <Link href='#'>Live Preview</Link>
      <Link href='#'>View Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 540px;
  width: 100%;
  padding-bottom: 30px;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`
const SubTitle = styled.p`

`

const Link = styled.a`

`
