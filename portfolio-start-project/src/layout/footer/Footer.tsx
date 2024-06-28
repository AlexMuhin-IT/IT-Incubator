import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { IconNav } from '../../components/icon/IconNav';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';



export const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'gitNav'} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'twitterNav'} />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon width={'30px'} height={'30px'} viewBox={'0 0 30px 30px'} iconId={'linkedinNav'} />
          </SocialLink>
        </SocialItem>
      </SocialList>
    
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;

`
const SocialList = styled.ul`
display: flex;
gap: 20px;
list-style-type: none;
position: relative;

&::before{
  position: absolute;
  content: ' ';
  border-bottom: 3px solid #666666;

}
`
const SocialItem = styled.li``
const SocialLink = styled.a``
