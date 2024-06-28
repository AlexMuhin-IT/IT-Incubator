/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';
import { IconNav } from '../icon/IconNav';
// import { Icon } from '../icon/Icon';




export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <div>
      <StyledMenu>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            )
          })}
        </ul>
        <IconNav />
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled.nav`
ul {
  display: flex;
  gap: 30px;
};
li {
  justify-content: space-between;
  list-style-type: none;
}

`
