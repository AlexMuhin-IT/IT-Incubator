import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import projectImg1 from './../../../assets/images/projectImg1.png'
import projectImg2 from './../../../assets/images/projectImg2.png'
import projectImg3 from './../../../assets/images/projectImg3.png'
import projectImg4 from './../../../assets/images/projectImg4.png'
import projectImg5 from './../../../assets/images/projectImg5.png'
import projectImg6 from './../../../assets/images/projectImg6.png'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper wrap={'wrap'} justify={'space-around'}>
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg1} />
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg2} />
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg3} />
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg4} />
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg5} />
        <Project
          title={'Project Tile goes here'}
          text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
          subtitle={'Tech stack : HTML , JavaScript, SASS, React'}
          src={projectImg6} />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
min-height: 50vh;

`